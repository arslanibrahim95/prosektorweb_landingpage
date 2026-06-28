## 2025-03-01 - Replace Interactive Divs with Buttons
**Learning:** The app's multi-step screens often use styled `div` elements with `onClick` handlers for primary CTAs (e.g., "Web Sitemi Önizle", "Bu tasarımı yayına al"). This completely breaks keyboard navigation for these critical actions.
**Action:** Always replace `div` elements that act as buttons with semantic `<button>` elements. Tailwind's CSS reset ensures they drop in seamlessly without visual changes.
