## 2024-06-26 - Semantic Buttons for Primary CTAs
**Learning:** Found an accessibility issue pattern specific to this app's components where primary call-to-actions ("Web Sitemi Önizle" and "Bu tasarımı yayına al") were implemented as interactive div elements instead of actual buttons.
**Action:** Directly replace interactive div elements with semantic <button> elements. Tailwind's CSS reset ensures they remain visually identical while gaining full accessibility benefits.
