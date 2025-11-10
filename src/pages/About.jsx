import React from "react";
import "./Home.css"; // reuse utk-about styles
import "../styles/PremiumTitles.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useCountUp } from "../hooks/useCountUp";

export default function About() {
  // Ensure scroll to top when this page loads
  useScrollToTop();

  // Count up animations for statistics
  const { count: count25, elementRef: ref25 } = useCountUp(25, 1, 2000, 0);
  const { count: count8, elementRef: ref8 } = useCountUp(8, 1, 2000, 200);
  const { count: count100, elementRef: ref100 } = useCountUp(100, 1, 2000, 400);

  return (
    <main>
      <section id="about" className="utk-about" aria-label="About Dasara Restaurant">
        <div className="utk-about__curve" aria-hidden="true" />
        <div className="utk-about__inner">
          <header className="utk-about__header">
        
            <h2 className="premium-title premium-title--lg about-title premium-title--shadow">
              Crafted in <span className="utk-goldtext">Tradition</span>, served with <span className="utk-goldtext">Pride</span>.
            </h2>
            <p className="utk-lede">
              Dasara is our ode to Telugu kitchens — a premium dining experience where time-honoured recipes,
              seasonal produce and meticulous hospitality come together. From tiffins at sunrise to festive
              thalis at dusk, we celebrate everyday moments with ceremonial care.
            </p>
          </header>

          <div className="utk-about__grid">
            <article className="utk-card">
              <h3 className="utk-card__title">Signature Classics</h3>
              <p className="utk-card__body">
                Mirapakaya bajji with house podi, rayalaseema ragi sangati, and coastal prawn pulusu —
                reimagined with refined plating and balanced spice.
              </p>
            </article>

            <article className="utk-card">
              <h3 className="utk-card__title">Ingredient First</h3>
              <p className="utk-card__body">
                Single-estate ghee, stone-ground podis, small-batch pickles and hand-pounded masalas anchor our flavours.
              </p>
            </article>

            <article className="utk-card">
              <h3 className="utk-card__title">Thoughtful Service</h3>
              <p className="utk-card__body">
                Warm, unobtrusive service with linen, brass and clayware — a table that feels festive yet familiar.
              </p>
            </article>
          </div>

          <div className="utk-stats">
            <div className="utk-stat" ref={ref25}>
              <div className="utk-stat__num">{count25}<span>yrs</span></div>
              <div className="utk-stat__label">of culinary craft</div>
            </div>
            <div className="utk-stat" ref={ref8}>
              <div className="utk-stat__num">{count8}</div>
              <div className="utk-stat__label">regional influences</div>
            </div>
            <div className="utk-stat" ref={ref100}>
              <div className="utk-stat__num">{count100}+</div>
              <div className="utk-stat__label">family recipes</div>
            </div>
          </div>

          <div className="utk-about__cta">
            <a href="#reservations" className="utk-btn utk-btn--primary">Book Your Table</a>
            <a href="/" className="utk-btn utk-btn--ghost">Back to Home</a>
          </div>
        </div>
      </section>
    </main>
  );
}
