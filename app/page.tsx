import Link from 'next/link';
import { church, faqs, team } from '@/components/data';

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div className="card hero-panel">
            <span className="kicker">Welcome to church in Banora Point</span>
            <h1 className="h1">A small church where people can belong, worship and grow.</h1>
            <p className="lead">
              Northern Rivers Pentecostal Church is a welcoming Pentecostal church in Banora Point. Whether you are returning to church, exploring faith, or looking for a smaller church family, you are invited.
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href="/plan-your-visit">Plan your visit</Link>
              <Link className="btn btn-secondary" href="/contact">Ask a question</Link>
            </div>
            <hr className="sep" />
            <div className="two-col">
              <div>
                <div className="badge">Sunday gathering</div>
                <p><strong>{church.sundayTime}</strong><br />Banora Point Community Centre</p>
              </div>
              <div>
                <div className="badge">Mid-week connection</div>
                <p><strong>{church.wednesdayTime}</strong><br />Weekly Zoom connect group</p>
              </div>
            </div>
          </div>
          <aside className="card hero-aside">
            <div className="eyebrow" style={{ color: '#ffd9cc' }}>First time here?</div>
            <h2 className="h2" style={{ marginTop: 8 }}>Start here</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,.86)' }}>
              We designed this site for people looking for a genuine, local and smaller church. Find the time, location, what to expect and how to get in touch.
            </p>
            <div className="stat">
              <strong>Address</strong>
              <p>{church.addressLine1}<br />{church.suburb} {church.state} {church.postcode}</p>
            </div>
            <div className="stat">
              <strong>Good to know</strong>
              <p>Come as you are. Arrive a few minutes early. Friendly faces will help you settle in.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-tight">
        <div className="container three-col">
          {[
            ['What to expect', 'A clear first-visit path reduces anxiety and helps new people decide to come.'],
            ['Find us easily', 'The address, suburb and gathering times are visible immediately on the homepage.'],
            ['Ask questions', 'Contact and visit pages give shy or hesitant visitors a simple next step.']
          ].map(([title, text]) => (
            <div className="card" key={title}>
              <h3 className="h3">{title}</h3>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="eyebrow">Mission</div>
            <h2 className="h2">Love God. Love people. Make disciples.</h2>
            <p className="lead">
              We want the church website to feel like the church itself: warm, truthful, easy to understand and easy to visit. The content here is intentionally simple so first-time visitors can decide quickly whether to come on Sunday.
            </p>
            <div className="notice" style={{ marginTop: 18 }}>
              <strong>AI-ready upgrade:</strong> this build is ready for a future “Ask our church” assistant, sermon summaries, automatic social post drafts and simplified accessibility tools.
            </div>
          </div>
          <div className="card">
            <div className="eyebrow">Leadership</div>
            <h3 className="h3">Meet the team</h3>
            <ul className="list-clean">
              {team.map((member) => (
                <li key={member.name}>
                  <strong>{member.name}</strong>
                  <div className="muted small">{member.role}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">FAQ</div>
          <h2 className="h2">Questions people often ask</h2>
          <div className="grid">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <details>
                  <summary>{faq.q}</summary>
                  <p className="muted" style={{ marginTop: 12 }}>{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
