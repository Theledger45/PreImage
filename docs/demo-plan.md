# Demo Plan

## Commit-by-commit sequence

1. **Demo libs/UI + editorial demo**
   - Create reusable helper library (`demos/lib/dom.js`).
   - Build the editorial-focused renderer (`demos/lib/editorialDemo.js`).
   - Add a launchable editorial demo page (`demos/editorial-demo.html`).
2. **Remaining demos + docs**
   - Add follow-up demo renderer for the rest of the queue (`demos/lib/catalogDemo.js`).
   - Publish a dedicated entrypoint for remaining demos (`demos/remaining-demos.html`).
   - Update repository docs for local usage.

## Run locally

Use any static file server from the repository root. Example:

```bash
python -m http.server 4173
```

Then open:

- `http://localhost:4173/demos/editorial-demo.html`
- `http://localhost:4173/demos/remaining-demos.html`
