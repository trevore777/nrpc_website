export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <span className="kicker">Contact</span>
          <h1 className="h1">Get in touch</h1>
          <p className="lead">
            This form is a front-end starter. Connect it to Formspree, Basin, a serverless email route, or a church Gmail inbox when you deploy.
          </p>
          <form className="card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <label className="field">
                <span>First name</span>
                <input type="text" name="firstName" placeholder="First name" />
              </label>
              <label className="field">
                <span>Last name</span>
                <input type="text" name="lastName" placeholder="Last name" />
              </label>
            </div>
            <div className="form-grid" style={{ marginTop: 14 }}>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="field">
                <span>Subject</span>
                <input type="text" name="subject" placeholder="How can we help?" />
              </label>
            </div>
            <label className="field" style={{ marginTop: 14 }}>
              <span>Message</span>
              <textarea name="message" placeholder="Tell us a little about your question or visit."></textarea>
            </label>
            <button className="btn btn-primary" type="submit" style={{ marginTop: 16 }}>Send message</button>
          </form>
        </div>
        <div className="card">
          <h2 className="h3">Suggested next integrations</h2>
          <ul className="list-clean muted">
            <li>Form handling with Formspree or Resend</li>
            <li>Google Maps embed</li>
            <li>Accessible location directions and parking notes</li>
            <li>AI assistant for common visitor questions</li>
            <li>Auto-reply welcome email for new contacts</li>
          </ul>
          <hr className="sep" />
          <div className="notice">
            Privacy tip: keep forms short and only ask for the minimum information needed for a reply.
          </div>
        </div>
      </div>
    </section>
  );
}
