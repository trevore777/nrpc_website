import Section from "../../components/Section";
import { site } from "../../lib/site";

export const metadata = {
  title: `Plan Your Visit | ${site.churchName}`,
  description: `Find service times, location details, and what to expect when visiting ${site.churchName}.`
};

export default function VisitPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Plan Your Visit</span>
          <h1>Thinking about visiting?</h1>
          <p className="lead">
            We know visiting a church for the first time can feel like a big step.
            Our aim is to make it simple, clear, and welcoming.
          </p>
        </div>
      </section>

      <Section title="When we meet">
        <div className="grid-2">
          <div className="card">
            <h3>Sunday Service</h3>
            <p>{site.sundayService}</p>
            <p>A time of worship, prayer, preaching, and fellowship together.</p>
          </div>
          <div className="card">
            <h3>Midweek Meeting</h3>
            <p>{site.wednesdayMeeting}</p>
            <p>Prayer, Bible encouragement, and connection during the week.</p>
          </div>
        </div>
      </Section>

      <Section title="Where we are">
        <div className="grid-2">
          <div className="card">
            <h3>Address</h3>
            <p>{site.fullAddress}</p>
            <p className="muted">
              Add parking notes here if needed, including the best entrance and where
              visitors can park comfortably.
            </p>
          </div>

          <div className="card map-card">
            <iframe
              title="Northern Rivers Pentecostal Church location map"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
          </div>
        </div>
      </Section>

      <Section title="What church life looks like here">
        <div className="grid-2">
          <div className="image-frame split-photo">
            <img src="/images/baptism.jpg" alt="Baptism in the water" />
          </div>
          <div className="card">
            <h3>Faith in action</h3>
            <p>
              We are a Pentecostal church that values worship, prayer, biblical
              preaching, discipleship, and obedience to God.
            </p>
            <p>
              You may see times of prayer, ministry, testimony, and genuine care for
              one another. We want church to be both spiritually alive and genuinely
              welcoming.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Questions people often have">
        <div className="grid-2">
          <div className="card">
            <ul className="list">
              <li>What should I wear? Modest, neat, everyday clothing is fine.</li>
              <li>How long is the service? Around 60 to 90 minutes.</li>
              <li>Can I come on my own? Yes, absolutely.</li>
              <li>Do I need to contact someone first? No, but you are welcome to.</li>
            </ul>
          </div>
          <div className="image-frame split-photo">
            <img src="/images/prayer.jpg" alt="People praying together in church" />
          </div>
        </div>
      </Section>
    </>
  );
}
