import Section from "../../components/Section";
import { sermons } from "../../lib/sermons";
import { site } from "../../lib/site";

export const metadata = {
  title: `Sermons | ${site.churchName}`,
  description: `Listen to sermons and Bible messages from ${site.churchName}.`
};

function toEmbedUrl(url?: string) {
  if (!url) return "";
  return url.replace("watch?v=", "embed/");
}

export default function SermonsPage() {
  const sermonList = Array.isArray(sermons) ? sermons : [];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Sermons</span>
          <h1>Messages and teaching</h1>
          <p className="lead">
            Watch recent messages, read short previews, and decide which sermon
            you would like to watch next.
          </p>
        </div>
      </section>

      <Section title="Recent messages">
        {sermonList.length === 0 ? (
          <div className="card">
            <h3>No sermons added yet</h3>
            <p className="muted">
              Use the import page to bring in the latest YouTube sermons, then
              paste them into <strong>lib/sermons.ts</strong>.
            </p>
          </div>
        ) : (
          <div className="grid-2">
            {sermonList.map((sermon) => (
              <div className="card" key={`${sermon.title}-${sermon.date}`}>
                <h3>{sermon.title}</h3>

                <p className="muted">
                  {sermon.speaker} • {sermon.date}
                </p>

                {sermon.scripture ? (
                  <p>
                    <strong>Scripture:</strong> {sermon.scripture}
                  </p>
                ) : null}

                {sermon.youtube ? (
                  <iframe
                    src={toEmbedUrl(sermon.youtube)}
                    width="100%"
                    height="240"
                    style={{ border: 0, borderRadius: 12, marginBottom: 14 }}
                    allowFullScreen
                    title={sermon.title}
                  />
                ) : sermon.thumbnail ? (
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    style={{ width: "100%", borderRadius: 12, marginBottom: 14 }}
                  />
                ) : null}

                {sermon.hook ? (
                  <p className="highlight">{sermon.hook}</p>
                ) : null}

                <p>{sermon.summary}</p>

                {sermon.keyPoints?.length ? (
                  <>
                    <h4>What this message touches on</h4>
                    <ul className="list">
                      {sermon.keyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {sermon.link ? (
                  <div className="button-row">
                    <a
                      href={sermon.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button primary"
                    >
                      Watch this message →
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section title="About these sermon previews">
        <div className="card">
          <p>
            These summaries are designed as quick guides to help you decide
            which message you would like to watch. They are not full sermon
            transcripts or complete theological outlines.
          </p>
        </div>
      </Section>
    </>
  );
}