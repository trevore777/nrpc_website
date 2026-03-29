import { beliefs } from '@/components/data';

export const metadata = { title: 'Beliefs' };

export default function BeliefsPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="kicker">Our beliefs</span>
        <h1 className="h1">What we believe</h1>
        <p className="lead">
          This page gives a simpler and more visitor-friendly summary of the church’s beliefs. A longer doctrinal statement can be added later as a downloadable document or expandable reference page.
        </p>
        <div className="grid" style={{ marginTop: 24 }}>
          {beliefs.map((belief) => (
            <div className="card" key={belief.question}>
              <h2 className="h3">{belief.question}</h2>
              <p className="muted">{belief.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
