## 2024-03-24 - Interactive Elements inside Labels
**Learning:** Using `<button>` inside `<label>` is invalid HTML and breaks form structure. Using `span` or `div` with `onClick` misses keyboard users completely, violating accessibility standards.
**Action:** The correct pattern is `<span role="button" tabIndex={0} onClick={...} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); action(); } }}>` to provide full keyboard accessibility while maintaining valid HTML structure and label functionality.
