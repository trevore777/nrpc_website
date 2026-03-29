export const metadata = { title: 'Sermons' };

const sermons = [
  {
    title: 'A place to start',
    text: 'Add sermon audio, YouTube links or short summaries here. Summaries help first-time visitors hear the teaching style before they attend.'
  },
  {
    title: 'AI content upgrade',
    text: 'A future AI workflow can turn sermon notes or recordings into summaries, small-group questions, daily devotionals and social captions.'
  },
  {
    title: 'Accessibility',
    text: 'Plain-language summaries, transcripts and readable headings make sermons more accessible to older visitors, busy parents and people exploring faith.'
  }
];

export default function SermonsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="kicker">Teaching</span>
        <h1 className="h1">Sermons and resources</h1>
        <p className="lead">
          This starter page is designed to grow. You can begin with a few sermon summaries, then add audio, video embeds, notes or downloadable outlines later.
        </p>
        <div className="three-col" style={{ marginTop: 24 }}>
          {sermons.map((sermon) => (
            <div className="card" key={sermon.title}>
              <h2 className="h3">{sermon.title}</h2>
              <p className="muted">{sermon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
