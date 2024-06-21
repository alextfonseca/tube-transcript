import { YoutubeTranscript } from "youtube-transcript";

export async function POST(request: Request) {
  const { url } = await request.json();

  const transcription = await YoutubeTranscript.fetchTranscript(url);

  const transcriptionText = transcription
    .map((text) => {
      return text.text;
    })
    .join(" ");

  return Response.json({ data: transcriptionText });
}
