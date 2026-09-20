# hilalsinem.github.io

Personal site: [hilalsinem.github.io](https://hilalsinem.github.io)

## What is served

`index.html` at the repository root. It is a single self-contained page: all styles,
scripts, illustrations and animations are inline. The only external request is the
Google Fonts stylesheet. There is no build step.

`case-study-prq.pdf` is the product document linked from the page. The two links on
the page point at that exact filename, so it has to keep that name and stay next to
`index.html`.

GitHub Pages is set to **Deploy from a branch → main → / (root)**.

## Editing

Open `index.html` in any editor and change the text. Push, and the site updates.

The animations are driven by a small script at the bottom of the file:

| Element | id | What it does |
|---|---|---|
| Requisition form | `prq` | Budget bar fills, search types, form flips to over-budget |
| Results chart | `chart` | Bars grow to their target widths |
| Approval diagram | `diag` | Nodes appear, arrows draw themselves |
| Assistant panel | `asst` | Sentence types out, draft fields populate |
| Timesheet | `sheet` | Day header highlights, rows tick in sequence |

Everything respects `prefers-reduced-motion`, so nothing animates for visitors who
have reduced motion turned on.

## The previous React version

The Create React App project is still in this repository (`src/`, `public/`,
`docs/`, `package.json`). Nothing is served from it while Pages points at the root.
To go back to it, set the Pages source to `/docs` instead.

Note that `npm run build` writes into `build/`, not `docs/`, so the old flow was to
build and then copy the output into `docs/` by hand.
