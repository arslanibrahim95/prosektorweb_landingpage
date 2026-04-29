## 2026-04-29 - Improve FAQ Accordion Accessibility
**Learning:** The FAQ accordion content remains in the DOM when visually hidden using max-height, causing screen readers to read collapsed content. Also, the button lacks clear keyboard focus styles.
**Action:** Add `aria-hidden={!isOpen}` to visually hidden accordion panels and explicitly set `focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none` on interactive elements to improve screen reader compatibility and keyboard navigation.
