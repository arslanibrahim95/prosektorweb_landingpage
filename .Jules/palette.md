## 2026-02-23 - Fixed Header Obscuring Anchor Targets
**Learning:** Fixed headers obscure anchor targets (like 'Skip to Content' targets), requiring 'scroll-padding-top' on 'html' to ensure focus lands visibly.
**Action:** Always check for fixed headers when implementing skip links or anchor navigation and add 'scroll-padding-top' to the global CSS.
