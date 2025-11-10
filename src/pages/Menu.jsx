import React, { useMemo, useState, useEffect } from "react";
import "./Menu.css";
import "../styles/PremiumTitles.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

/* IMAGE IMPORTS (filenames must match exactly) */
import imgGongura from "../assets/gongura mamsam.jpg";
import imgKodiVepudu from "../assets/kodi-vepudu.jpg";
import imgRagiNatukodi from "../assets/ragi-sangati-natukodi.jpg";
import imgRoyyala from "../assets/royyala-iguru.jpg";

import imgPodiIdli from "../assets/ghee-podi-idli.jpg";
import imgPesarattu from "../assets/pesarattu-upma.jpg";
import imgJonnaRotti from "../assets/jonna-rotti.jpg";

import imgBiryaniChicken from "../assets/biryani-chicken.jpg";
import imgBiryaniMutton from "../assets/biryani-mutton.jpg";
import imgBiryaniVeg from "../assets/biryani-veg.jpg";

import imgThaliVeg from "../assets/thali-veg.jpg";
import imgThaliNonVeg from "../assets/thali-nonveg.jpg";

import imgDoubleKaMeetha from "../assets/double-ka-meetha.jpg";
import imgQubani from "../assets/qubani-ka-meetha.jpg";
import imgPootharekulu from "../assets/pootharekulu.jpg";

import imgMajjiga from "../assets/majjiga.jpg";
import imgFilterCoffee from "../assets/filter-coffee.jpg";
import imgNannari from "../assets/nannari-sharbat.jpg";

export default function Menu() {
  // Ensure scroll to top when this page loads
  useScrollToTop();
  
  const CATEGORIES = useMemo(
    () => ["Signatures", "Tiffins", "Biryanis", "Thalis", "Desserts", "Beverages"],
    []
  );

  const ITEMS = useMemo(
    () => [
      { id: "sig-ggm", name: "Gongura Mamsam", price: 549, desc: "Tender mutton slow-cooked with tangy gongura, tempered ghee and house-ground spice.", cat: "Signatures", img: imgGongura, alt: "Gongura mutton curry in brass handi" },
      { id: "sig-kv", name: "Kodi Vepudu", price: 449, desc: "Crisp-fried country chicken tossed in roasted chillies, curry leaves & onion jam.", cat: "Signatures", img: imgKodiVepudu, alt: "Kodi vepudu with curry leaves" },
      { id: "sig-ragi-nk", name: "Ragi Sangati & Natukodi Pulusu", price: 579, desc: "Stone-ground ragi balls with village-style chicken curry — a Rayalaseema classic.", cat: "Signatures", img: imgRagiNatukodi, alt: "Ragi sangati with natukodi curry" },
      { id: "sig-royyala", name: "Royyala Iguru", price: 599, desc: "Coastal prawn curry, balanced heat, coconut hints and fresh coriander.", cat: "Signatures", img: imgRoyyala, alt: "Prawn curry with coriander" },

      { id: "tif-podi", name: "Ghee Podi Idli", price: 229, desc: "Mini idlis tossed in house podi & single-estate ghee. Comfort on a plate.", cat: "Tiffins", img: imgPodiIdli, alt: "Ghee podi idli close-up" },
      { id: "tif-pes", name: "Pesarattu Upma", price: 249, desc: "Green gram dosa with upma, ginger chutney and avakai relish.", cat: "Tiffins", img: imgPesarattu, alt: "Pesarattu stuffed with upma" },
      { id: "tif-jonna", name: "Jonna Rotti with Pachadi", price: 239, desc: "Sorghum flatbread, seasonal pachadi and a dab of cultured butter.", cat: "Tiffins", img: imgJonnaRotti, alt: "Jonna rotti with chutney" },

      { id: "bir-chk", name: "Hyderabadi Dum Biryani — Chicken", price: 369, desc: "Kacchi style, fragrant basmati, saffron hue and slow dum.", cat: "Biryanis", img: imgBiryaniChicken, alt: "Chicken dum biryani in handi" },
      { id: "bir-mtn", name: "Hyderabadi Dum Biryani — Mutton", price: 489, desc: "Succulent cuts, layered with spice & fried onions, sealed and finished on dum.", cat: "Biryanis", img: imgBiryaniMutton, alt: "Mutton dum biryani served with raita" },
      { id: "bir-veg", name: "Seasonal Vegetable Biryani", price: 329, desc: "Aromatic, light and herbaceous — finished with mint raita.", cat: "Biryanis", img: imgBiryaniVeg, alt: "Vegetable biryani with herbs" },

      { id: "tha-veg", name: "Dasara Festive Thali — Veg", price: 499, desc: "A celebratory spread: dal, sabzi, pulusu, pachadi, podi, roti, rice & sweet.", cat: "Thalis", img: imgThaliVeg, alt: "Veg thali on brass plate" },
      { id: "tha-nv", name: "Dasara Royal Thali — Non-Veg", price: 649, desc: "All-veg accompaniments alongside chicken curry & a signature coastal fish prep.", cat: "Thalis", img: imgThaliNonVeg, alt: "Non-veg thali with curries" },

      { id: "des-dkm", name: "Double Ka Meetha", price: 189, desc: "Saffron bread pudding, toasted nuts, reduced milk.", cat: "Desserts", img: imgDoubleKaMeetha, alt: "Double ka meetha dessert" },
      { id: "des-qubani", name: "Qubani Ka Meetha", price: 209, desc: "Stewed apricots with malai — an old city favourite.", cat: "Desserts", img: imgQubani, alt: "Qubani ka meetha with cream" },
      { id: "des-pooth", name: "Pootharekulu with Ghee", price: 219, desc: "Paper-thin sweet from Atreyapuram, drizzled with warm ghee.", cat: "Desserts", img: imgPootharekulu, alt: "Pootharekulu sweet rolls" },

      { id: "bev-majjiga", name: "Majjiga (Spiced Buttermilk)", price: 129, desc: "Chilled, curry leaf & green chilli tempering.", cat: "Beverages", img: imgMajjiga, alt: "Glass of spiced buttermilk" },
      { id: "bev-filter", name: "Filter Coffee", price: 119, desc: "Robust decoction, hot milk froth — served in davara set.", cat: "Beverages", img: imgFilterCoffee, alt: "South Indian filter coffee" },
      { id: "bev-nannari", name: "Nannari Sharbat", price: 139, desc: "Herbal cooler with lime & ice — summer’s antidote.", cat: "Beverages", img: imgNannari, alt: "Nannari sharbat with ice" },
    ],
    []
  );

  const [activeCat, setActiveCat] = useState("Signatures");

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  const filtered = ITEMS.filter((i) => i.cat === activeCat);

  const subCopy = {
    Signatures: "House favourites that define our kitchen’s flavour grammar.",
    Tiffins: "Morning comfort, Andhra style — light, warm and satisfying.",
    Biryanis: "Layered, aromatic dum biryanis — slow, sealed and celebratory.",
    Thalis: "Ceremonial spreads that turn meals into occasions.",
    Desserts: "Finishing notes — traditional sweets with finesse.",
    Beverages: "Coolers and classics brewed the old way.",
  };

  // Door reveal on scroll (opens once per image)
  useEffect(() => {
    const nodes = document.querySelectorAll(".door-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-open");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [activeCat]);

  return (
    <main id="menu" className="page page--menu">
      <div className="container">
        <h1 className="premium-title premium-title--lg contact-title premium-title--glow">Our Menu</h1>
        <p>
          Explore our signatures, tiffins, festive thalis, biryanis and desserts. Everything is cooked in
          small batches with single-estate ghee, house podis and seasonal produce.
        </p>

        {/* Category tabs */}
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCat === cat}
              className={`menu-tab ${activeCat === cat ? "is-active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section */}
        <section className="menu-section" aria-labelledby={`title-${activeCat}`}>
          <h2 id={`title-${activeCat}`} className="menu-section__title">{activeCat}</h2>
          <p className="menu-section__sub">{subCopy[activeCat]}</p>

          {/* Grid */}
          <div className="menu-grid">
            {filtered.map((item) => (
              <article className="menu-card" key={item.id}>
                <figure className="menu-media door-reveal" aria-hidden="true">
                  <img
                    className="menu-img"
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  {/* price pill over image */}
                  <div className="price-badge">{formatINR(item.price)}</div>
                  {/* doors */}
                  <span className="door door--left" />
                  <span className="door door--right" />
                </figure>

                <div className="menu-content">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
