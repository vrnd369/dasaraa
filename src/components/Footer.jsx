import React from "react";
import "./Footer.css";

const asset = (file) => `${process.env.PUBLIC_URL}/assets/${file}`;

const SOCIAL = {
  instagram: "https://instagram.com/dasara.telangana.kitchens",
  facebook: "https://facebook.com/dasara.telangana.kitchens",
  x: "https://x.com/dasara_telangana",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="main-content">
      <footer className="site-footer">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" className="footer__brand-link">
              <img
                src={asset("logo.svg")}
                alt="Dasara Logo"
                className="footer__logo"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="footer__name">
                <strong>Dasara</strong> Telangana Kitchens
              </span>
            </a>
            <p className="footer__tagline">
              Telangana is the fun, <span className="text-gradient">our food is the king</span>.
              Regional recipes, tandoor classics &amp; desi-Chinese favourites — made with pride.
            </p>

            <div className="footer__social" aria-label="Social links">
              <a
                className="social"
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="social__icon" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </a>

              <a
                className="social"
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="social__icon" aria-hidden="true">
                  <path d="M13 10h3l.5-3H13V5.5c0-.9.3-1.5 1.8-1.5H17V1.2C16.6 1.1 15.5 1 14.2 1 11.5 1 9.7 2.5 9.7 5.2V7H7v3h2.7v10H13Z" />
                </svg>
              </a>

              <a
                className="social"
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="social__icon" aria-hidden="true">
                  <path d="M3 3h3.7l5 6.7L17 3h4l-7.5 9.3L21 21h-3.7l-5.5-7.2L7 21H3l7.9-10Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Hours</h4>
            <ul className="footer__list">
              <li>Mon–Fri: 12:00 – 23:00</li>
              <li>Sat–Sun: 12:00 – 23:30</li>
              <li>Festivals: Open late</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Visit</h4>
            <ul className="footer__list">
              <li>2105 New Brunswick Ave</li>
              <li>South Plainfield, NJ 07080</li>
              <li>
                <a className="footer__link" href="tel:+18483920117">‎+1 (848) 392-0117</a>
              </li>
              <li>
                <a className="footer__link" href="mailto:Dasaraspice@gmail.com">
                 Dasaraspice@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><a className="footer__link" href="#menu">Menu</a></li>
              <li><a className="footer__link" href="#reservations">Reserve</a></li>
              <li><a className="footer__link" href="#reviews">Reviews</a></li>
              <li><a className="footer__link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {year} Dasara Telangana Kitchens</span>
          <span className="made">
            Made with <span className="heart">❤</span> in Telangana
          </span>
        </div>
      </footer>
    </div>
  );
}
