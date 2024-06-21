"use client";

import { Button, Input } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>("");

  const [transcriptionText, setTranscriptionText] = useState<string>("");

  const [gettingData, setGettingData] = useState<boolean>(false);

  const [urlIsInvalid, setUrlIsInvalid] = useState<boolean>(false);

  async function fetchTranscription() {
    if (!videoUrl) {
      return;
    }
    setGettingData(true);
    setUrlIsInvalid(false);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: videoUrl,
        }),
      });

      const data = await response.json();

      setTranscriptionText(data.data);
    } catch (error) {
      setUrlIsInvalid(true);
      toast.error("Erro ao buscar transcrição, verifique a URL do vídeo.");
    }
    setGettingData(false);
  }

  return (
    <main className="flex min-h-screen flex-col p-2 items-center">
      <h1 className="text-4xl font-bold text-center">Transcrição do vídeo</h1>

      <div className="flex flex-col items-center gap-4 w-[350px] mt-8">
        <Input
          className="bg-zinc-50 p-3"
          placeholder={"URL do vídeo"}
          onChange={(e) => setVideoUrl(e.target.value)}
          status={urlIsInvalid ? "error" : undefined}
        />

        <Button
          className="w-full bg-green-600 text-white border-none h-12 text-medium rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-50 focus:outline-none focus:ring-opacity"
          onClick={fetchTranscription}
          loading={gettingData}
        >
          Gerar transcrição
        </Button>
      </div>

      {transcriptionText && (
        <div className="flex flex-col w-full gap-4 mt-8">
          <div className="w-[300px] h-[200px]">
            <ReactPlayer
              width="300px"
              height="200px"
              url={videoUrl}
              controls={true}
              // light is usefull incase of dark mode
              light={false}
              // picture in picture
              pip={true}
            />
          </div>
          <div
            className="text-lg leading-tight"
            dangerouslySetInnerHTML={{ __html: transcriptionText }}
          />
        </div>
      )}
    </main>
  );
}
