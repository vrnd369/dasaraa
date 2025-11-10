import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { scrollToTopImmediate } from "../utils/scrollToTop";

function snapToHash(hash) {
  const trySnap = (attemptsLeft = 3) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
      return;
    }
    if (attemptsLeft > 0) {
      requestAnimationFrame(() => trySnap(attemptsLeft - 1));
    } else {
      // fallback
      scrollToTopImmediate();
    }
  };
  requestAnimationFrame(() => trySnap());
}

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Take over browser restoration so SPA doesn't keep old offsets
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => (window.history.scrollRestoration = prev);
    }
  }, []);

  // 1) Before paint on each route change
  useLayoutEffect(() => {
    if (hash) return;              // hash handled in the effect below
    scrollToTopImmediate();
  }, [pathname, hash]);

  // 2) After paint + after potential layout shifts
  useEffect(() => {
    if (hash) {
      snapToHash(hash);
      return;
    }
    const raf = requestAnimationFrame(() => scrollToTopImmediate());
    const t0  = setTimeout(scrollToTopImmediate, 0);
    const t1  = setTimeout(scrollToTopImmediate, 60);
    return () => { cancelAnimationFrame(raf); clearTimeout(t0); clearTimeout(t1); };
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}
