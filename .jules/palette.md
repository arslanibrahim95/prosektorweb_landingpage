## 2024-10-31 - Replace interactive divs with buttons
**Learning:** Interactive `div` elements with `onClick` lack keyboard accessibility by default. Adding `role="button"` and `tabIndex={0}` still requires manual keyboard event listeners for 'Enter' and 'Space'.
**Action:** Use semantic `<button>` elements instead of `div`s for click interactions. Tailwind's CSS reset ensures buttons look identical to `div`s by default, making it a safe, visually identical drop-in replacement that provides built-in keyboard accessibility.
