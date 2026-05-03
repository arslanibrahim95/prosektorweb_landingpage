## 2024-05-24 - Interactive Elements inside Labels
**Learning:** Using a `<button>` inside a `<label>` is invalid HTML and breaks form accessibility.
**Action:** When an interactive element like a modal link must be nested inside a `<label>`, use a `<span role="button" tabIndex={0}>` with an `onKeyDown` handler for Space/Enter support to preserve accessibility without breaking the label.
