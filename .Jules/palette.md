## 2026-03-23 - Repetitive Decorative SVGs Screen Reader Experience
**Learning:** Repetitive decorative SVGs (like rating stars generated dynamically in a map) can cause poor screen reader experiences by being read out individually (e.g. "graphic, graphic, graphic").
**Action:** Group these elements inside a container with `role=\"img\"` and a descriptive `aria-label`, while adding `aria-hidden=\"true\"` to the individual SVGs to hide them from sequential readouts, making it a single unified announcement.
