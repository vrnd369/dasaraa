import React, { useEffect } from "react";
import "./Contact.css";
import "../styles/PremiumTitles.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-inview")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="page page--contact">
      <div className="container">
        {/* Hero */}
        <header className="contact-hero reveal">
         
          <h1 className="premium-title premium-title--lg contact-title premium-title--glow">
            Connect with <span className="gradtext">Dasara</span>
          </h1>
          <p className="lede">
            We'd love to hear from you — reservations, private dining, feedback or press. Drop a note and
            we'll get back with Telangana warmth.
          </p>
        </header>

        {/* Content grid */}
        <section className="contact-grid">
          {/* Form */}
          <form className="card form reveal" onSubmit={(e) => e.preventDefault()}>
            <h2 className="card-title">Contact</h2>

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="e.g., Suma R." required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="hello@dasarakitchens.in" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="‎+1 (848) 392-0117" />
            </div>

            <div className="field">
              <label htmlFor="topic">Topic</label>
              <select id="topic" name="topic" defaultValue="Reservation">
                <option>Reservation</option>
                <option>Private Dining</option>
                <option>Feedback</option>
                <option>Careers</option>
                <option>Press</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message…" required />
            </div>

            <button className="btn btn--primary" type="submit">Send Message</button>
            <p className="form-note">We reply within 24 hours on business days.</p>
          </form>

          {/* Map (same place, nudged downward & centered on desktop) */}
          <aside className="stack reveal">
            <div className="card map">
              <h2 className="card-title">Find us on Maps</h2>
              <div className="map-frame">
                <iframe
                  title="Dasara Telangana Kitchens location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=2105+New+Brunswick+Ave+South+Plainfield+NJ+07080&t=k&z=14&output=embed"
                />
              </div>
              <p style={{ marginTop: "16px", color: "#666", fontSize: "14px" }}>
                2105 New Brunswick Ave<br />
                South Plainfield, NJ 07080
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
