// Always scroll the window/document (no custom containers)
const root = () => document.scrollingElement || document.documentElement;

// Instant jump (no animation)
export const scrollToTopImmediate = () => {
  const s = root();

  // temporarily disable any smooth scrolling
  const prev = s.style.scrollBehavior;
  s.style.scrollBehavior = "auto";

  window.scrollTo(0, 0);
  s.scrollTop = 0;

  // restore
  s.style.scrollBehavior = prev;
};

// Smooth (used by the FAB button)
export const scrollToTopSmooth = () => {
  const s = root();
  try {
    s.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } catch {
    s.scrollTop = 0;
  }
};
