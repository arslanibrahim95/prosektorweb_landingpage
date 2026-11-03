## 2025-03-03 - Refactor interactive div into semantic button
**Learning:** Refactoring custom-shaped interactive `div`s into semantic `<button>` elements provides full keyboard accessibility. When using Tailwind CSS, explicitly applying the matching border-radius utility (e.g., `rounded-[3rem]`) to the wrapper alongside `focus-visible:ring` utilities ensures the focus outline properly follows the element's intended shape.
**Action:** Always replace interactive `div` elements with `<button>` rather than adding manual roles/listeners, and verify focus styles align with the element's shape.
