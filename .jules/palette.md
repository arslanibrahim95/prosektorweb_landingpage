## 2025-03-08 - Use semantic buttons for interactive elements
**Learning:** Found interactive `div` elements with `onClick` handlers used for primary actions ("Web Sitemi Önizle" and "Bu tasarımı yayına al") lacking keyboard accessibility and focus states.
**Action:** Replace interactive `div` elements with semantic `<button>` tags and add Tailwind focus-visible classes (`focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500`) to ensure native keyboard navigation and focus indication without altering the visual design.
