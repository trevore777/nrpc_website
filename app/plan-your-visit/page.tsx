import Link from 'next/link';
import { church, faqs } from '@/components/data';

export const metadata = { title: 'Plan Your Visit' };

export default function PlanYourVisitPage() {
  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <span className="kicker">New here?</span>
          <h1 className="h1">Plan your first visit</h1>
          <p className="lead">
            If you are searching for a smaller church in the Northern Rivers area, this page gives you the essentials so you can visit with confidence.
          </p>
          <div className="card" style={{ marginTop: 20 }}>
            <h2 className="h3">Visit details</h2>
            <ul className="list-clean muted">
              <li><strong>When:</strong> {church.sundayTime}</li>
              <li><strong>Where:</strong> Banora Point Community Centre, {church.addressLine1}, {church.suburb} {church.state} {church.postcode}</li>
              <li><strong>Mid-week:</strong> {church.wednesdayTime} via Zoom</li>
              <li><strong>Zoom Meeting ID:</strong> {church.zoomMeetingId}</li>
            </ul>
          </div>
          <div className="btn-row" style={{ marginTop: 18 }}>
            <Link className="btn btn-primary" href="/contact">Let us know you’re coming</Link>
            <a className="btn btn-secondary" href="https://maps.google.com/?q=25+Woodlands+Dr+Banora+Point+NSW+2486" target="_blank" rel="noreferrer">Open map</a>
          </div>
        </div>
        <div className="card">
          <div className="eyebrow">What to expect</div>
          <ul className="list-clean">
            <li><strong>Atmosphere:</strong> Warm, personal and community-focused.</li>
            <li><strong>Dress:</strong> Neat and comfortable. There is no pressure to dress up.</li>
            <li><strong>Length:</strong> Around 90 to 120 minutes.</li>
            <li><strong>Worship:</strong> Singing, prayer, preaching and time to respond.</li>
            <li><strong>New visitors:</strong> You can participate as much or as little as you like.</li>
          </ul>
          <hr className="sep" />
          <div className="notice">
            This page is intentionally practical. For small churches, clear logistics usually matter more to first-time visitors than lots of internal information.
          </div>
        </div>
      </div>

      <div className="container section-tight">
        <div className="eyebrow">More answers</div>
        <div className="grid">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p className="muted" style={{ marginTop: 12 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
