## 2024-04-21 - Focus Visible Styles for Keyboard Navigation
**Learning:** In a highly visual and stylized application (like this one with heavy gradients and dark themes), default browser focus rings are often stripped out or rendered invisible. Standard `focus:` classes trigger even on mouse clicks which can feel messy to users.
**Action:** Consistently use `focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-orange-500` on interactive elements to provide clear, accessible keyboard navigation without degrading the mouse/touch experience.
