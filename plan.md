1. **Update `frontend/components/PhoneInput.tsx`**
   - Use the `replace_with_git_merge_diff` tool to edit `frontend/components/PhoneInput.tsx`.
   - Add an `invalid?: boolean` prop to `PhoneInputProps`.
   - Add `invalid = false` to the component signature.
   - Bind `aria-invalid={invalid ? "true" : undefined}` to the internal `<input>` element.

2. **Update `frontend/App.tsx`**
   - Use the `replace_with_git_merge_diff` tool to edit `frontend/App.tsx`.
   - In `LeadRequestFormScreen`:
     - Change `<label htmlFor="lead-company" className="form-label">OSGB Ticari Ünvanı:</label>` to `<label htmlFor="lead-company" className="form-label">OSGB Ticari Ünvanı: <span className="text-orange-500">*</span></label>`.
     - Bind `aria-invalid={!!submitError ? "true" : undefined}` to the `lead-company` input.
     - Pass `invalid={!!submitError}` to the `PhoneInput` with id="lead-phone".
     - Change `<label htmlFor="auth-check" className="text-sm font-bold cursor-pointer group-hover:text-white transition-colors">\n            OSGB adına web sitesi önizleme talebinde bulunmaya yetkiliyim.\n          </label>` to `<label htmlFor="auth-check" className="text-sm font-bold cursor-pointer group-hover:text-white transition-colors">\n            OSGB adına web sitesi önizleme talebinde bulunmaya yetkiliyim. <span className="text-orange-500">*</span>\n          </label>`.
     - Add `role="alert"` to `<p className="text-red-400 font-bold text-center">{submitError}</p>`.
   - In `LoginScreen`:
     - Change `<label htmlFor="login-name" className="form-label">OSGB Adı</label>` to `<label htmlFor="login-name" className="form-label">OSGB Adı <span className="text-orange-500">*</span></label>`.
     - Bind `aria-invalid={error ? "true" : undefined}` to the `login-name` input.
     - Change `<label htmlFor="login-code" className="form-label">Önizleme Kodu</label>` to `<label htmlFor="login-code" className="form-label">Önizleme Kodu <span className="text-orange-500">*</span></label>`.
     - Bind `aria-invalid={error ? "true" : undefined}` to the `login-code` input.
     - Add `role="alert"` to `<p className="text-red-500 font-bold">Hatalı giriş! Lütfen bilgilerinizi kontrol edin.</p>`.

3. **Record Learning**
   - Use `run_in_bash_session` to run the following exact command:
     ```bash
     cat << 'EOF' >> .jules/palette.md
     ## 2025-05-13 - Form Accessibility Indicators and Alerts
     **Learning:** Users with screen readers or cognitive disabilities struggle when required fields aren't explicitly marked and inline errors aren't announced dynamically. The `aria-invalid` attribute and `role="alert"` are critical.
     **Action:** Always include explicit visual `*` indicators for required fields, provide actionable inline error messages using `role="alert"`, and bind `aria-invalid` to invalid inputs across all forms.
     EOF
     ```

4. **Verify Implementation**
   - Run `cd frontend && pnpm install && pnpm test || true && ./node_modules/.bin/tsc --noEmit && pnpm run build`.
   - Cleanup untracked lock files (`git rm --cached frontend/pnpm-lock.yaml || true && rm frontend/pnpm-lock.yaml || true`).

5. **Complete pre-commit steps**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.

6. **Submit Changes**
   - Submit the PR with the title "🎨 Palette: Improve form accessibility with indicators and ARIA alerts" and include the exact required headers in the description: `💡 What:`, `🎯 Why:`, `📸 Before/After:`, and `♿ Accessibility:`.
