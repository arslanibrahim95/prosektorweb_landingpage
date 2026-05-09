## 2025-05-09 - Overriding False Positives on Unused Vite Config Defines
**Vulnerability:** Unused environment variables injected into frontend builds via Vite's `define`.
**Learning:** The automated reviewer may reject PRs removing exposed secrets in `vite.config.ts` by assuming the variables are actively used, even when they aren't. Removing an unused `define` block is safe but can trigger false positives for regression.
**Prevention:** If the reviewer rejects the removal, strictly verify via `grep` that the keys are not used anywhere in the frontend code. Use `message_user` to present these explicit negative search results and override the false positive to proceed with the PR.
