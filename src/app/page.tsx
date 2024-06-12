import { YoutubeTranscript } from "youtube-transcript";

export default async function Home() {
  const transcription = await YoutubeTranscript.fetchTranscript(
    "https://www.youtube.com/watch?v=hTBEGO8dbRw&t=224s",
  );

  const transcriptionText = transcription
    .map((text) => {
      return text.text;
    })
    .join(" ");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Transcrição do vídeo</h1>
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: transcriptionText }}
      />
    </main>
  );
}
