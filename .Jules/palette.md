## 2024-05-24 - Indiscriminate aria-hidden hides informative SVGs
**Learning:** Adding `aria-hidden="true"` globally to all `<svg>` elements is a critical accessibility regression, as it hides informative elements like loading spinners (`role="status"`) and star ratings.
**Action:** Only apply `aria-hidden="true"` to SVGs that are purely decorative. For informative SVGs, ensure they have appropriate ARIA roles, labels, or are properly exposed to screen readers.
