## 2025-02-28 - Add Accessible Spinners to Async Form Buttons
**Learning:** Adding `role="status"` and `aria-label="Yükleniyor"` to a visible loading spinner alongside the text updates is critical for visually and non-visually communicating loading states to users and screen readers alike. Replacing a plain string like "GÖNDERİLİYOR..." with a spinner SVG ensures that feedback is immediate and unmistakable.
**Action:** Always include an accessible loading spinner alongside text updates when disabling form submit buttons during async operations.
