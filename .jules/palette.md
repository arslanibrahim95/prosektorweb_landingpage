## 2024-10-25 - Semantic buttons for accessibility
**Learning:** Using `div` with `onClick` creates accessibility issues as it lacks built-in keyboard navigation (Tab focus) and screen reader semantics (button role). In Tailwind CSS projects, changing `div` to `button` is a seamless visual drop-in replacement that instantly fixes these issues.
**Action:** Always use semantic HTML `<button>` tags for clickable actions instead of `div`s, relying on Tailwind's CSS reset to maintain the intended styling without custom CSS or ARIA roles.
