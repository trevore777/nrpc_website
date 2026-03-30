import Link from "next/link";
import Section from "../components/Section";
import { site } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-banner">
        <div className="hero-banner-image">
          <img
            src="/images/livealife.jpg"
            alt="Live a life that pleases God"
          />
        </div>
        <div className="hero-banner-overlay" />

        <div className="container hero-banner-content">
          <span className="eyebrow">Welcome to {site.shortName}</span>
          <h1>A small church where people can pray, belong, and grow.</h1>
          <p className="lead lead-light">
            {site.churchName} is a welcoming Pentecostal church where people can
            encounter God, build genuine friendships, and be part of a caring faith
            community in the Northern Rivers.
          </p>

          <div className="button-row">
            <Link href="/visit" className="button primary">
              Plan Your Visit
            </Link>
            <Link href="/contact" className="button secondary button-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Section title="Service times and location">
        <div className="grid-2">
          <div className="card">
            <h3>When we meet</h3>
            <p>
              <span className="highlight">Sunday Worship:</span> {site.sundayService}
            </p>
            <p>
              <span className="highlight">Midweek Meeting:</span> {site.wednesdayMeeting}
            </p>
            <p>
              <span className="highlight">Location:</span> {site.fullAddress}
            </p>
            <p className="muted">
              Looking for a small church where you can quietly come, meet people,
              and seek God? You are very welcome.
            </p>
          </div>

          <div className="image-frame split-photo">
            <img
              src="/images/pastor-wife.jpg"
              alt="Church leaders smiling together"
            />
          </div>
        </div>
      </Section>

      <Section title="A church with warmth, community, and faith">
        <div className="grid-3">
          <div className="card">
            <h3>Warm fellowship</h3>
            <div className="inline-photo">
              <img
                src="/images/bbq2.jpg"
                alt="Church barbecue and fellowship outdoors"
              />
            </div>
            <p>
              We are a smaller church where people are noticed, welcomed, and invited
              into real Christian fellowship.
            </p>
          </div>

          <div className="card">
            <h3>Prayer and worship</h3>
            <div className="inline-photo">
              <img
                src="/images/worship1.jpg"
                alt="Church members worshipping together"
              />
            </div>
            <p>
              Our gatherings make room for prayer, worship, Bible teaching, and
              personal response to God.
            </p>
          </div>

          <div className="card">
            <h3>Everyday faith</h3>
            <div className="inline-photo">
              <img
                src="/images/baptism.jpg"
                alt="Outdoor baptism in the water"
              />
            </div>
            <p>
              We want church life to carry into the week through family, friendship,
              discipleship, and service.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Life together at NRPC">
        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-photo">
              <img src="/images/pastor-wife.jpg" alt="A couple smiling at church" />
            </div>
            <div className="gallery-caption">
              <strong>Friendly leadership</strong>
              <p className="muted">A church that values warmth, welcome, and people.</p>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-photo">
              <img src="/images/bbq2.jpg" alt="Church members at a barbecue by the water" />
            </div>
            <div className="gallery-caption">
              <strong>Community and meals</strong>
              <p className="muted">Sharing life together beyond the Sunday service.</p>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-photo">
              <img src="/images/baptism.jpg" alt="Outdoor baptism in calm water" />
            </div>
            <div className="gallery-caption">
              <strong>New life in Christ</strong>
              <p className="muted">Celebrating faith, obedience, and spiritual growth.</p>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-photo">
              <img src="/images/prayer.jpg" alt="Church members gathered in prayer" />
            </div>
            <div className="gallery-caption">
              <strong>Prayer and care</strong>
              <p className="muted">Standing together in prayer and spiritual support.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="New to church or visiting for the first time?">
        <div className="feature-grid">
          <div className="card">
            <h3>You can come as you are</h3>
            <p>
              Some people come with a strong church background. Others are exploring
              faith quietly for the first time. Wherever you are at, you are welcome
              to visit and see what church life is like here.
            </p>
            <p>
              There is no pressure to perform. We want people to feel at ease, hear
              the Word of God, and experience a loving Christian community.
            </p>
            <div className="button-row">
              <Link href="/visit" className="button primary">
                Go to Plan Your Visit
              </Link>
            </div>
          </div>

          <div className="image-frame split-photo">
            <img
              src="/images/bbq.jpg"
              alt="Church barbecue and outdoor fellowship near the water"
            />
          </div>
        </div>
      </Section>

      <Section title="Our heart as a church">
        <blockquote>
          We want to be a church where people can encounter God, hear truth from
          Scripture, grow in holiness, and build strong Christian lives through
          prayer, faith, and obedience.
        </blockquote>
      </Section>
    </>
  );
}