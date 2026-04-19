# Griot Creative Ecosystem — Visual Documentation

Interactive visual documentation of the Griot Creative Ecosystem, built on ported griotwave v0.3 primitives.

## What this is

A standalone Vite + React + TypeScript experience that documents the full Griot Creative Ecosystem — its thirteen tools, the five-stage knowledge pipeline, the Valence ↔ Kaleidoscope boundary analysis, and the convergence of six independent research streams onto a single thesis:

> **Agent-native, layered, selective-retrieval knowledge infrastructure.**

## Sections

| Section | Purpose |
|---|---|
| **Hero** | Title, thesis, ecosystem stats, navigation |
| **01 · Ecosystem Map** | 13 tool cards filterable by stage, with detail panels |
| **02 · Knowledge Pipeline** | Capture → Store → Structure → Use → Observe flow |
| **03 · Valence Boundary** | Side-by-side Valence vs Kaleidoscope analysis |
| **04 · Convergence** | Six research streams, five invariants, refraction metaphor |

## Running it

```bash
cd C:/Users/digit/Developer/griot-ecosystem-viz
npm install
npm run dev
```

Dev server runs at `http://localhost:5174`.

## Ported from griotwave-vite-ts

- `src/styles/tokens.css` — full griotwave v0.3 design token set
- `src/styles/global.css` — Inter + JetBrains Mono, ghost grid background
- `src/components/Ambient.tsx` — fixed-position radial ember blobs
- `src/components/HubCard.tsx` — frost glass + cardEmberLift + bioluminescent bloom
- `src/components/Section.tsx` — new simple eyebrow/title/subtitle primitive

## Data

All ecosystem tool definitions, stages, flows, research streams, and invariants live in [`src/data/ecosystem.ts`](src/data/ecosystem.ts). Edit there to update.

## Companion research document

See [`prism-plugin/.prism/shared/research/2026-04-11-griot-ecosystem-knowledge-architecture.md`](../../Users/digit/Developer/prism-plugin/.prism/shared/research/2026-04-11-griot-ecosystem-knowledge-architecture.md) for the full text research this visualization renders.
