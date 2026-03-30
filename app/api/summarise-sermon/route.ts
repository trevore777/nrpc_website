import { NextResponse } from "next/server";
import OpenAI from "openai";
import { fetchLatestSermonsFromYouTube } from "../../../lib/youtube";

export async function GET() {
  try {
    const videos = await fetchLatestSermonsFromYouTube(10);

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const imported = await Promise.all(
      videos.map(async (video) => {
        const response = await openai.responses.create({
          model: "gpt-4.1-mini",
          input: `
You are preparing a church website sermon card.

Based only on the YouTube title and description, return VALID JSON only with this exact shape:
{
  "speaker": "string",
  "scripture": "string",
  "hook": "string",
  "summary": "string",
  "keyPoints": ["string", "string", "string", "string"]
}

Rules:
- The hook must be one short compelling sentence that helps a person decide whether to watch.
- The summary must be 2-3 sentences max and act like a preview, not a full explanation.
- The summary should create curiosity and invite the user to watch the sermon.
- Do not overstate certainty. If a detail is unclear, keep it general.
- If speaker is unclear, use "NRPC".
- If scripture is unclear, use "".
- keyPoints should be short and readable.
- Do not include markdown.

Title:
${video.title}

Description:
${video.description}
          `
        });

        const raw = response.output_text || "";

        let parsed: {
          speaker?: string;
          scripture?: string;
          hook?: string;
          summary?: string;
          keyPoints?: string[];
        };

        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = {
            speaker: "NRPC",
            scripture: "",
            hook: "A message worth watching.",
            summary:
              "This message explores a biblical theme intended to encourage faith, obedience, and trust in God. Watch the full sermon to hear the teaching in full context.",
            keyPoints: [
              "Biblical encouragement",
              "Faith and obedience",
              "Practical Christian living",
              "Watch the full message"
            ]
          };
        }

        return {
          title: video.title,
          speaker: parsed.speaker || "NRPC",
          date: video.publishedAt?.slice(0, 10) || "",
          scripture: parsed.scripture || "",
          hook: parsed.hook || "A message worth watching.",
          summary:
            parsed.summary ||
            "This message explores a biblical theme intended to encourage faith, obedience, and trust in God. Watch the full sermon to hear the teaching in full context.",
          keyPoints: parsed.keyPoints || [],
          youtube: video.url,
          link: video.url,
          thumbnail: video.thumbnail
        };
      })
    );

    return NextResponse.json({ sermons: imported });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Import failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}