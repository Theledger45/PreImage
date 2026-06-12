# PreImage

PreImage is a focused pre-production sandbox for validating content presentation patterns before they are integrated into a larger product surface.  
The project is intentionally small, framework-free, and deterministic so layout and storytelling decisions can be reviewed quickly without runtime complexity.

## Project goal

PreImage exists to answer one question early: **"Is this content and UI structure worth promoting into production?"**

It is designed for:
- Fast editorial preview loops
- Shared UI primitives across different demo types
- Low-friction experimentation with copy hierarchy and visual rhythm
- Clear handoff from prototype signal to production implementation

## Current status (golden path)

The repository currently represents a "golden path" for demo iteration:
- ✅ Reusable DOM helper primitives are centralized in `demos/lib/dom.js`
- ✅ Editorial scenario rendering is implemented in `demos/lib/editorialDemo.js`
- ✅ Catalog/backlog scenario rendering is implemented in `demos/lib/catalogDemo.js`
- ✅ Two launchable demo entrypoints are available under `demos/`
- ✅ Demo workflow and sequencing are documented in `docs/demo-plan.md`

## Technical architecture

PreImage uses a simple static architecture:

1. **Seed data objects** define scenario content (title, sections, item lists).
2. **Renderer modules** convert seed data into semantic DOM trees.
3. **DOM utility helpers** handle element creation, attributes, and mounting.
4. **Static HTML entrypoints** import modules and mount rendered output.

This structure separates content modeling from rendering composition while keeping the implementation easy to inspect and modify.

## Repository structure

- `demos/editorial-demo.html`  
  Entry page for the editorial-focused demo flow.
- `demos/remaining-demos.html`  
  Entry page for the backlog/catalog demo flow.
- `demos/lib/dom.js`  
  Shared helper library (`el`, `mount`) used by all demos.
- `demos/lib/editorialDemo.js`  
  Editorial renderer plus editorial seed data.
- `demos/lib/catalogDemo.js`  
  Catalog renderer plus queue seed data.
- `demos/lib/styles.css`  
  Shared visual styling for demo pages.
- `docs/demo-plan.md`  
  Build order and local run workflow notes.

## Technical implementation details

### DOM composition strategy
- `el(tag, options)` creates semantic nodes and applies classes, text/HTML, attributes, and child nodes.
- Renderers construct complete view trees from seed objects rather than mutating existing markup.
- `mount(selector, node)` guarantees a clean render target by replacing prior content and appending the new tree.

### Demo module boundaries
- **`editorialDemo`** is optimized for long-form hierarchy (kicker, headline, dek, sections, paragraphs).
- **`catalogDemo`** is optimized for compact comparative cards/lists for follow-up ideas.
- Both modules share the same low-level helper API, making additional demo types straightforward to add.

### Why this approach
- Keeps prototype code easy to reason about
- Avoids framework lock-in during ideation
- Makes design and content feedback reviewable in plain HTML/JS
- Reduces risk when promoting validated patterns into production systems

## Run locally

From the repository root:

```bash
python -m http.server 4173
```

Then open:
- `http://localhost:4173/demos/editorial-demo.html`
- `http://localhost:4173/demos/remaining-demos.html`

## Quality and operational notes

- This repo is a pre-production prototype workspace, not a deployment artifact.
- The current workflow uses static assets only and requires no package installation.
- Changes should preserve semantic HTML structure and shared helper reuse.
- When introducing new demo types, prefer adding new renderer modules under `demos/lib/` that consume the existing helper primitives.
