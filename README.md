# Simple Web Calculator

A small, responsive web calculator built with plain HTML, CSS and JavaScript. Supports basic arithmetic (addition, subtraction, multiplication, division), decimal input, clear, delete, keyboard support, and a simple responsive layout.

## Files
- index.html — UI and markup
- styles.css — styles and layout
- script.js — calculator logic and keyboard handlers

## Run locally
1. Open `index.html` in a browser (double-click or use `live-server`).
2. Use mouse or keyboard: numbers, `.` for decimal, `+ - * /` for operations, `Enter` for equals, `Backspace` to delete, `Escape` to clear.

## Publish on GitHub Pages
1. Create a new repository on GitHub or use the `gh` CLI:
   ```bash
   gh repo create my-calculator --public --source=. --remote=origin --push
   ```
2. On GitHub, enable Pages in repository Settings > Pages and select branch `main` (or `gh-pages`) and root `/`.
3. Wait a minute and visit `https://<your-username>.github.io/<repo-name>/`.

Alternatively, push to a `gh-pages` branch and use the Pages UI.

## Next steps (optional)
- Add unit tests or visual layout tests.
- Add animations, history, or scientific functions.

## License
MIT — feel free to reuse and modify.
