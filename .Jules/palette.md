## 2025-02-27 - Replace div elements acting as buttons with semantic button elements
**Learning:** Interactive elements like overlay actionable areas were using `div` with `onClick` instead of semantic `<button type="button">`, lacking focus states and keyboard support.
**Action:** When creating custom interactive elements with `onClick`, always use semantic `<button type="button">` and apply focus-visible styles (e.g., `focus-visible:ring-4`) to ensure keyboard accessibility.
