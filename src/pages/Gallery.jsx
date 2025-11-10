import React, { useCallback, useEffect, useState } from "react";
import "./Gallery.css";
import "../styles/PremiumTitles.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

import thaliVeg from "../assets/thali-veg.jpg";
import thaliNonVeg from "../assets/thali-nonveg.jpg";
import gheePodiIdli from "../assets/ghee-podi-idli.jpg";
import gonguraMamsam from "../assets/gongura mamsam.jpg";
import kodiVepudu from "../assets/kodi-vepudu.jpg";
import ragiSangati from "../assets/ragi-sangati-natukodi.jpg";
import royyalaIguru from "../assets/royyala-iguru.jpg";
import pesarattuUpma from "../assets/pesarattu-upma.jpg";
import jonnaRotti from "../assets/jonna-rotti.jpg";
import biryaniChicken from "../assets/biryani-chicken.jpg";
import biryaniMutton from "../assets/biryani-mutton.jpg";
import biryaniVeg from "../assets/biryani-veg.jpg";
import doubleKaMeetha from "../assets/double-ka-meetha.jpg";
import qubaniKaMeetha from "../assets/qubani-ka-meetha.jpg";
import pootharekulu from "../assets/pootharekulu.jpg";
import majjiga from "../assets/majjiga.jpg";
import filterCoffee from "../assets/filter-coffee.jpg";
import nannariSharbat from "../assets/nannari-sharbat.jpg";
import muttonGheeRoast from "../assets/mutton-ghee-roast.jpg";
import muttonSeekhKebab from "../assets/mutton-seekh-kebab.jpg";
import tandooriChicken from "../assets/tandoori-chicken.jpg";
import tangdiKebab from "../assets/tangdi-kebab.jpg";
import pachiMirchiKodi from "../assets/pachi-mirchi-kodi.jpg";

/* Gallery images with varied aspect ratios for masonry effect */
const IMAGES = [
  { src: thaliVeg, alt: "Traditional vegetarian thali with seasonal vegetables and accompaniments", label: "Vegetarian Thali", tag: "Thalis" },
  { src: thaliNonVeg, alt: "Coastal non-vegetarian thali featuring seafood and meat curries", label: "Coastal Thali", tag: "Thalis" },
  { src: gonguraMamsam, alt: "Tender mutton slow-cooked with tangy gongura leaves", label: "Gongura Mamsam", tag: "Signatures" },
  { src: kodiVepudu, alt: "Crispy country chicken with roasted spices and curry leaves", label: "Kodi Vepudu", tag: "Signatures" },
  { src: ragiSangati, alt: "Stone-ground ragi balls with village-style chicken curry", label: "Ragi Sangati", tag: "Signatures" },
  { src: royyalaIguru, alt: "Coastal prawn curry with coconut and fresh coriander", label: "Royyala Iguru", tag: "Seafood" },
  { src: gheePodiIdli, alt: "Mini idlis tossed in house podi and single-estate ghee", label: "Ghee Podi Idli", tag: "Tiffins" },
  { src: pesarattuUpma, alt: "Green gram dosa stuffed with upma and chutneys", label: "Pesarattu Upma", tag: "Tiffins" },
  { src: jonnaRotti, alt: "Sorghum flatbread with seasonal pachadi and butter", label: "Jonna Rotti", tag: "Tiffins" },
  { src: biryaniChicken, alt: "Hyderabadi dum biryani with tender chicken and fragrant basmati", label: "Chicken Biryani", tag: "Biryanis" },
  { src: biryaniMutton, alt: "Succulent mutton biryani layered with spices and fried onions", label: "Mutton Biryani", tag: "Biryanis" },
  { src: biryaniVeg, alt: "Aromatic vegetable biryani with seasonal produce", label: "Vegetable Biryani", tag: "Biryanis" },
  { src: doubleKaMeetha, alt: "Saffron bread pudding with toasted nuts and reduced milk", label: "Double Ka Meetha", tag: "Desserts" },
  { src: qubaniKaMeetha, alt: "Stewed apricots with malai - an old city favorite", label: "Qubani Ka Meetha", tag: "Desserts" },
  { src: pootharekulu, alt: "Paper-thin sweet from Atreyapuram drizzled with warm ghee", label: "Pootharekulu", tag: "Desserts" },
  { src: majjiga, alt: "Chilled spiced buttermilk with curry leaves and green chilli", label: "Majjiga", tag: "Beverages" },
  { src: filterCoffee, alt: "Robust South Indian filter coffee served in davara set", label: "Filter Coffee", tag: "Beverages" },
  { src: nannariSharbat, alt: "Herbal cooler with lime and ice - perfect summer drink", label: "Nannari Sharbat", tag: "Beverages" },
  { src: muttonGheeRoast, alt: "Tender mutton ghee roast with aromatic spices", label: "Mutton Ghee Roast", tag: "Specials" },
  { src: muttonSeekhKebab, alt: "Grilled mutton seekh kebab with mint chutney", label: "Mutton Seekh Kebab", tag: "Specials" },
  { src: tandooriChicken, alt: "Tandoor-roasted chicken with yogurt marinade", label: "Tandoori Chicken", tag: "Specials" },
  { src: tangdiKebab, alt: "Grilled chicken drumsticks with traditional spices", label: "Tangdi Kebab", tag: "Specials" },
  { src: pachiMirchiKodi, alt: "Green chilli chicken curry with fresh herbs", label: "Pachi Mirchi Kodi", tag: "Specials" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // { idx, list }
  
  // Ensure scroll to top when this page loads
  useScrollToTop();

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

  const openAt = (idx) => setLightbox({ idx, list: IMAGES });

  // Lightbox keys
  const onKey = useCallback((e) => {
    if (!lightbox) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") setLightbox((l) => ({ ...l, idx: (l.idx + 1) % l.list.length }));
    if (e.key === "ArrowLeft") setLightbox((l) => ({ ...l, idx: (l.idx + l.list.length - 1) % l.list.length }));
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, onKey]);

  const current = lightbox ? lightbox.list[lightbox.idx] : null;

  return (
    <main className="page page--gallery">
      <div className="container">
        {/* Header */}
        <header className="gallery-hero reveal">
          
          <h1 className="premium-title premium-title--lg gallery-title premium-title--glow">Visual Feast</h1>
          <p className="lede">Explore our kitchen's finest creations through stunning visuals. Each dish tells a story of tradition, flavor, and culinary artistry.</p>
        </header>

        {/* Masonry */}
        <section className="masonry reveal">
          {IMAGES.map((img, i) => (
            <figure
              key={`${img.label}-${i}`}
              className="m-item"
              onClick={() => openAt(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openAt(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>
      </div>

      {/* Lightbox */}
      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">×</button>
            <button
              className="lightbox__nav prev"
              onClick={() => setLightbox(l => ({ ...l, idx: (l.idx + l.list.length - 1) % l.list.length }))}
              aria-label="Previous image"
            >‹</button>

            <img src={current.src} alt={current.alt} />

            <button
              className="lightbox__nav next"
              onClick={() => setLightbox(l => ({ ...l, idx: (l.idx + 1) % l.list.length }))}
              aria-label="Next image"
            >›</button>

            <div className="lightbox__meta">
              <h3>{current.label}</h3>
              <p>{current.alt}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
