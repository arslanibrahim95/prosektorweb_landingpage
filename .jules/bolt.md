## 2026-02-15 - [npm install vs ci]
**Learning:** `npm install` on a monorepo or project with an existing `package-lock.json` might regenerate the lockfile, causing massive diffs unrelated to the actual change. This is especially risky in CI/CD environments or when versions differ slightly.
**Action:** Use `npm ci` for clean installs when the intention is to install dependencies exactly as specified in the lockfile without modification.
