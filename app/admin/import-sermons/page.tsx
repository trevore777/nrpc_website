"use client";

import { useState } from "react";

export default function ImportSermonsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleImport() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/import-sermons");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Import failed");
      }

      const formatted = `export type Sermon = {
  title: string;
  speaker: string;
  date: string;
  scripture?: string;
  hook?: string;
  summary: string;
  keyPoints?: string[];
  youtube?: string;
  link?: string;
  thumbnail?: string;
};

export const sermons: Sermon[] = ${JSON.stringify(data.sermons, null, 2)};
`;

      setResult(formatted);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Import failed";
      setResult(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <span className="eyebrow">Admin</span>
      <h1>Import and optimise sermons</h1>
      <p className="lead">
        This imports the latest YouTube videos and generates hook lines,
        preview summaries, and key points for the sermons page.
      </p>

      <div className="button-row">
        <button
          className="button primary"
          onClick={handleImport}
          disabled={loading}
        >
          {loading ? "Importing..." : "Import latest sermons"}
        </button>
      </div>

      {result ? (
        <pre
          style={{
            marginTop: 24,
            background: "#fff",
            padding: 20,
            borderRadius: 16,
            overflowX: "auto",
            whiteSpace: "pre-wrap"
          }}
        >
          {result}
        </pre>
      ) : null}
    </div>
  );
}