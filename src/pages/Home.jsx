import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useCountUp } from "../hooks/useCountUp";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const SLIDES = [
  {
    img: hero1,
    titleTop: "Mana Anandam.",
    titleBottom: "Mana Santosham.",
    sub: `Rooted in happiness and nestled in comfort —
United Telugu Kitchens celebrates the way South Indians celebrate food, one plate at a time.`,
  },
  {
    img: hero2,
    titleTop: "Mana Ruchulu.",
    titleBottom: "Mana Vinodam.",
    sub: "From gongura to jonna rotte — the flavours you grew up with, plated with love.",
  },
  {
    img: hero3,
    titleTop: "Mana Bhojanam.",
    titleBottom: "Mana Inti Vanta.",
    sub: "Warm tiffins, tandoor classics and festive spreads — every day, every mood.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Ensure scroll to top when this page loads
  useScrollToTop();

  // Count up animations for statistics
  const { count: count25, elementRef: ref25 } = useCountUp(25, 1, 2000, 0);
  const { count: count8, elementRef: ref8 } = useCountUp(8, 1, 2000, 200);
  const { count: count100, elementRef: ref100 } = useCountUp(100, 1, 2000, 400);

  // Auto-rotate slides
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  // Reveal-on-scroll
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
    <>
      {/* HERO */}
      <section id="hero" className="utk-hero" aria-label="Hero">
        <div className="utk-hero__slides">
          {SLIDES.map((s, i) => (
            <article
              key={i}
              className={`utk-slide ${i === index ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${s.img})` }}
              aria-hidden={i === index ? "false" : "true"}
            >
              <div className="utk-slide__content">
                <div className="utk-copy utk-copy--panel" role="group" aria-label="Hero text">
                  <h1 className="utk-title">
                    {s.titleTop}
                    <br />
                    <span className="utk-title__accent">{s.titleBottom}</span>
                  </h1>
                  <p className="utk-sub">{s.sub}</p>

                  <div className="utk-cta">
                    {/* CHANGE: use Link to route to /menu */}
                    <Link to="/menu" className="utk-btn utk-btn--primary" aria-label="View our menu">
                      View Menu
                    </Link>
                    <a href="#reservations" className="utk-btn utk-btn--ghost">
                      Reserve a Table
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="utk-dots" role="tablist" aria-label="Hero slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`utk-dot ${i === index ? "is-active" : ""}`}
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DASARA */}
      <section id="about" className="utk-about" aria-label="About Dasara Restaurant">
        <div className="utk-about__curve" aria-hidden="true" />

        <div className="utk-about__inner">
          <header className="utk-about__header reveal">
            <p className="utk-eyebrow">About Dasara</p>
            <h2 className="utk-display">
              Crafted in <span className="utk-goldtext">Tradition</span>, served with{" "}
              <span className="utk-goldtext">Pride</span>.
            </h2>
            <p className="utk-lede">
              Dasara is our ode to Telugu kitchens — a premium dining experience where time-honoured recipes,
              seasonal produce and meticulous hospitality come together. From tiffins at sunrise to festive
              thalis at dusk, we celebrate everyday moments with ceremonial care.
            </p>
          </header>

          <div className="utk-about__grid">
            <article className="utk-card reveal" style={{ "--delay": "0ms" }}>
              <h3 className="utk-card__title">Signature Classics</h3>
              <p className="utk-card__body">
                Mirapakaya bajji with house podi, rayalaseema ragi sangati, and coastal prawn pulusu —
                reimagined with refined plating and balanced spice.
              </p>
            </article>

            <article className="utk-card reveal" style={{ "--delay": "120ms" }}>
              <h3 className="utk-card__title">Ingredient First</h3>
              <p className="utk-card__body">
                Single-estate ghee, stone-ground podis, small-batch pickles and hand-pounded masalas anchor our flavours.
              </p>
            </article>

            <article className="utk-card reveal" style={{ "--delay": "240ms" }}>
              <h3 className="utk-card__title">Thoughtful Service</h3>
              <p className="utk-card__body">
                Warm, unobtrusive service with linen, brass and clayware — a table that feels festive yet familiar.
              </p>
            </article>
          </div>

          <div className="utk-stats reveal" style={{ "--delay": "360ms" }}>
            <div className="utk-stat" ref={ref25}>
              <div className="utk-stat__num">
                {count25}<span>yrs</span>
              </div>
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

          <div className="utk-about__cta reveal" style={{ "--delay": "480ms" }}>
            <a href="#reservations" className="utk-btn utk-btn--primary">Book Your Table</a>
            <Link to="/menu" className="utk-btn utk-btn--ghost">Explore Our Story</Link>
          </div>
        </div>
      </section>
    </>
  );
}
