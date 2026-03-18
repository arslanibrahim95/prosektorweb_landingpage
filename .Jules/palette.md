
## 2025-03-18 - [Fix non-functional checkout button in Preview Bar]
**Learning:** Found a completely non-functional primary Call-To-Action button ("Bu Tasarımı Yayına Al" / "Publish this design") in the `PreviewBar` component. This is a critical UX flaw that completely blocks the user journey.
**Action:** Implemented the `onCheckout` prop and wired it to update the application state (`setCurrentStep('PAYMENT')`) in `App.tsx` when clicked. Ensure all critical user flows are fully functional and all buttons have their respective handlers.
