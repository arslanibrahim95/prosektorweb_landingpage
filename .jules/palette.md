## 2024-05-20 - Adding focus-visible to interactive elements
**Learning:** Found multiple instances where buttons had hover states but no clear keyboard focus indicators. This makes the application hard to use for keyboard navigators.
**Action:** When adding interactive elements like buttons, always include `focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-orange-500` or similar styles to ensure clear keyboard focus indicators.
