import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoPng from "../assets/l1.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const { pathname, hash } = useLocation();

  // Force scroll to top when navigation link is clicked
  const handleNavClick = () => {
    // Ultra aggressive scroll to top
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force on all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (el.scrollTop !== undefined) {
          el.scrollTop = 0;
        }
      });
    }, 0);
  };

  // 🔸 About now goes to its own page
  const sections = useMemo(
    () => [
      { id: "hero", label: "Home", to: "/" },
      { id: "about", label: "About", to: "/about" },    // 🔸 changed from "/#about"
      { id: "menu", label: "Menu", to: "/menu" },
      { id: "gallery", label: "Gallery", to: "/gallery" },
      { id: "contact", label: "Contact", to: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // 🔸 Mark active based on route
    if (pathname !== "/") {
      if (pathname.startsWith("/about")) setActive("about");      // 🔸 added
      else if (pathname.startsWith("/menu")) setActive("menu");
      else if (pathname.startsWith("/gallery")) setActive("gallery");
      else if (pathname.startsWith("/contact")) setActive("contact");
      else setActive("hero");
      return;
    }

    // On Home we keep previous behavior
    if (hash === "#about") setActive("about");
    else setActive("hero");

    // Scroll spy on Home (unchanged)
    const NAV_OFFSET = 80;
    const ids = ["hero", "about"];
    const onScroll = () => {
      let current = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - NAV_OFFSET;
        if (window.scrollY >= top) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, hash]);

  const closeMenu = () => setOpen(false);
  const linkClass = (id) => `nav__link ${active === id ? "is-active" : ""}`;
  const isHomePage = pathname === "/";

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${!isHomePage ? "is-not-home" : ""}`} role="banner">
      <div className="nav">
        <Link to="/" className="brand" onClick={() => { closeMenu(); handleNavClick(); }}>
          <img
            className="brand__logo"
            src={logoPng}
            alt="Dasara Logo"
            aria-hidden="true"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </Link>
        {/* Desktop nav */}
        <nav className="nav__links" aria-label="Primary">
          {sections.map(({ id, label, to }) => (
            <Link key={id} to={to} className={linkClass(id)} onClick={() => { closeMenu(); handleNavClick(); }}>
              {label}
            </Link>
          ))}
        </nav>

        <a href="#reservations" className="btn btn--primary nav__cta">
          Reserve
        </a>

        {/* Mobile toggle */}
        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <div className="nav-drawer__inner">
          {sections.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              className={`nav-drawer__link ${active === id ? "is-active" : ""}`}
              onClick={() => { closeMenu(); handleNavClick(); }}
            >
              {label}
            </Link>
          ))}
          <a href="#reservations" className="btn btn--primary nav-drawer__cta" onClick={closeMenu}>
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}
