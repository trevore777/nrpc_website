import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import { site } from "../../lib/site";

export const metadata = {
  title: `Contact | ${site.churchName}`,
  description: `Get in touch with ${site.churchName} for questions, prayer, or visit details.`
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p className="lead">
            Whether you have a question, need prayer, or want to ask about visiting,
            we would be glad to hear from you.
          </p>
        </div>
      </section>

      <Section title="Contact details">
        <div className="grid-2">
          <div className="card">
            <h3>Church location</h3>
            <p>{site.fullAddress}</p>
            <p>{site.sundayService}</p>
            <p>{site.wednesdayMeeting}</p>
            <div className="button-row">
              <a href="/visit" className="button secondary">Plan Your Visit</a>
            </div>
          </div>

          <div className="card">
            <h3>Contact options</h3>
            <p>Email: {site.email}</p>
            <p>Phone: {site.phone || "Add church phone number"}</p>
            <p className="muted">
              You can also connect through social media for church updates and
              community life.
            </p>
            <SocialLinks />
          </div>
        </div>
      </Section>

      <Section title="Send a message">
        <div className="grid-2">
          <ContactForm />
          <div className="image-frame split-photo">
            <img src="/images/pastor-wife.jpg" alt="Church leaders smiling together" />
          </div>
        </div>
      </Section>
    </>
  );
}
