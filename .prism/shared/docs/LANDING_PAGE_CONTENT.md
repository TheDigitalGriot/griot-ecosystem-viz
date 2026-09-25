# Griot Creative Ecosystem — Knowledge Architecture

**2026-04-11 · Knowledge Architecture Research**

## An agent-native knowledge infrastructure.

Fourteen tools, five stages, one invariant — agents are first-class participants in a layered, selective-retrieval, graph-aware knowledge system. A visual reading of how Delphi, Sonar, Synaptiq, Prism, Valence, Fragment, Lucid, Griotwave, Brand Ecosystem Hub, and the rest compose into a single information architecture.

| Stat | Value |
|------|-------|
| Ecosystem tools | 14 |
| Pipeline stages | 5 |
| Research streams | 6 |
| Shared invariants | 5 |

---

## 00 · The Seed — Prism is where this started.

Every other tool in the ecosystem was built using Prism's workflow. What began as four convergent phases — Research, Plan, Implement, Validate — has evolved into six: a divergent Ideation front, the historical RPIV core, and a disciplined Shipping back. RPIV lives on as the spine.

### Prism · v3.2.0

**The first tool. The one that builds the rest.**

Prism is a Claude Code plugin that implements a structured development workflow for AI coding agents. It was built to solve the problem of agents jumping straight into code without understanding what they were changing. The phases force deliberation before action. The `.prism/shared/` directory persists that deliberation as durable, markdown-based knowledge.

Named after optics — structured light decomposition — because each phase separates a different wavelength of thought. Ideation is the source light. Research is the orientation. Plans are the refracted intent. Implementation is the focused beam. Validation is the spectrum recombined. Shipping is the light leaving the room.

- **Origin:** Optics · structured decomposition
- **License:** Marketplace plugin
- **Location:** Developer/prism-plugin/

| Stat | Value |
|------|-------|
| Skills | 21 |
| Agents | 14 |
| Commands | 25 |
| Hooks | 7 |

### The Workflow · v3.2.0 — Six phases. Three zones.

Ideate → Research → Plan → Implement → Validate → Ship. The middle four are the historical RPIV core — the convergent spine that Prism was built on. Phase 01 adds divergent creative exploration. Phase 06 adds disciplined release. Every other tool in the Griot ecosystem was built by running this loop against itself.

#### Phase 01 · Ideate ◌ (Divergent)
Divergent exploration before commitment. Creative generation, design thinking, requirements capture.
- **Skills:** brainstorm, design, prd, visual-docs
- **Output:** `.prism/shared/brainstorms/` + `designs/`

#### Phase 02 · Research ◐ (RPIV Core)
Parallel agents map the codebase. Documentarian stance — describe what exists, do not critique.
- **Skills:** research, debug
- **Output:** `.prism/shared/research/`

#### Phase 03 · Plan ◑ (RPIV Core)
Interactive planning with user approval at every step. Plans are contracts with two-category success criteria.
- **Skills:** plan, iterate
- **Output:** `.prism/shared/plans/`

#### Phase 04 · Implement ◒ (RPIV Core)
Phase-by-phase execution with verification checkpoints. Three execution models match three work scales.
- **Skills:** implement, subagent, spectrum
- **Output:** source code + commits

#### Phase 05 · Validate ◓ (RPIV Core)
Verify implementation against the plan. Automated gates + manual testing items + browser verification.
- **Skills:** validate, verify
- **Output:** `.prism/shared/validation/`

#### Phase 06 · Ship ● (Shipping)
Disciplined release. Branch cleanup, PR description, version bump, release orchestration, handoffs.
- **Skills:** finish, bookend, release
- **Output:** PR + tag + GitHub release

#### Zone Legend
- **Divergent** — Creative exploration before commitment
- **RPIV Core** — The historical convergent spine
- **Shipping** — Disciplined release discipline

### Cross-cutting Infrastructure

Four utilities float across every phase. They aren't tied to a single step — they're the scaffolding that keeps the whole workflow honest.

| Tool | Glyph | Description | Invocation |
|------|-------|-------------|------------|
| init | ⊹ | Bootstrap the `.prism/` directory with every shared folder — brainstorms, research, plans, validation, handoffs. | `/prism-init` |
| dispatch | ⋈ | General parallel fan-out pattern. Usable from any phase when 2+ independent problem domains can run concurrently. | `/prism-dispatch` |
| docs-update | ⟲ | Sync the VitePress docs site from a versioned `PRISM-DOCUMENTATION-[version].md` snapshot. | `/prism-docs-update` |
| eval | ⊙ | Run skill evaluations and version comparisons. Measure regressions across Prism releases. | `/prism-eval` |

### Architecture — Karpathy's Three-Layer Pattern + a Fourth Layer

Karpathy's LLM wiki architecture proposes three layers: rules, wiki, ideas. Prism implemented this before it was named, then added a fourth layer Karpathy doesn't address: *handoffs*, the session-to-session continuity that lets compacted agents recover their place.

| Layer | Karpathy Name | Prism Name | Description |
|-------|--------------|------------|-------------|
| Layer 1 | Rules | CLAUDE.md | Project-level instructions and conventions that every session inherits. |
| Layer 2 | Wiki | `.prism/shared/research/` + `docs/` | Flat markdown knowledge base. YYYY-MM-DD-topic.md convention. Research is cross-session durable. |
| Layer 3 | Ideas | `.prism/shared/plans/` + `stories/` | Task-level context. Plans and story decompositions for Spectrum execution. |
| Layer 4 | — (not addressed) | `.prism/shared/handoffs/` | Session-to-session continuity. Karpathy's pattern stops at Layer 3; Prism adds the compaction-survival layer. |

### Three Execution Models — Match the execution to the scale.

Inside Phase 04 (Implement), three execution modes handle three work scales. Direct for single-phase fixes. Subagent-Driven for medium features in an interactive session. Spectrum for large features run autonomously overnight. Use the cross-cutting `/prism-dispatch` pattern when fanning work out in parallel from any phase.

| Model | Scale | Invocation | Speed |
|-------|-------|------------|-------|
| Direct | Quick fix or single-phase | `/prism-implement` | fast |
| Subagent-Driven | Medium feature (3-10 tasks) | `/prism-subagent` | interactive |
| Spectrum | Large feature (10+ stories) | `./scripts/spectrum.sh` | overnight autonomous |

> "Prism is the development workflow used to build the other tools."
> — From the Griot Creative Ecosystem overview, 2026-04-05

---

## Live Demo · v3.2.0 — Watch the workflow run.

A user types a prompt. Prism's six-phase workflow orchestrates the tools in real time while the interface reflects each step. Left: a Griot Hub mock UI. Right: the live phase graph. Nothing is hardcoded — the same state drives both panels.

**Demo prompt:** "Build 'Cairn' — cross-project memory connecting Prism sessions across repos"

Both panels share one state machine. The mock interface shows what the user would see; the workflow graph shows what Prism is doing to make that happen. They stay in sync frame-by-frame.

---

## 01 · Map — Thirteen tools, five stages.

Every tool in the Griot ecosystem occupies a discrete role in the knowledge pipeline. Filter by stage to see role coverage.

### Capture

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **Delphi** (O) | v1.6.2 | active | YouTube/MP4 analyzer — fetches transcripts, runs cross-video analysis, extracts topics/disagreements/key moments. |
| **Sonar** (S) | concept | dev | Real-time listening + teleprompter overlay. Live audio → transcripts, key points, action items. |
| **Kaleidoscope** (C) | v0.1 | dev | Porter extracts scattered knowledge from Claude memory, session JSONL, Claude.ai projects, codebase docs. |

### Store

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **Synaptiq** (Y) | v1.0 | active | Agentic note-taking with visual nodes, file refs, typed relationships. The interactive evolution of Obsidian. |

### Structure

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **Prism** (P) | v3.2.0 | mature | Agentic development workflow. 4-phase: Research → Plan → Implement → Validate. Spectrum for autonomous overnight runs. |

### Use

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **codebase-memory-mcp** (M) | active | active | Graph-based code intelligence MCP. ~70x token reduction vs. file-by-file grep. Structural queries, dead code, blast radius. |

### Observe

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **Valence** (V) | v2 | mature | AI agent observability & orchestration platform. 35+ tRPC routers, Neo4j + ClickHouse + Postgres. |

### Support

| Tool | Version | Status | Description |
|------|---------|--------|-------------|
| **Fragment** (F) | v1.0.1 | mature | Multi-surface scaffolding CLI. Generates Electron/VS Code/TUI apps wired to Claude, Codex, and Gemini. |
| **Lucid** (L) | v1.2 | active | Agentic asset creation — Remotion video rendering, 3D asset pipeline, slide/design exports. |
| **Griotwave** (G) | v0.3 | research | Visual language v0.3 — frosted glass + beacon ember + bioluminescent bloom. The design system for the ecosystem. |
| **Brand Ecosystem Hub** (B) | v0.0.1 | dev | Agentic brand identity generator. YAML brand profiles for every Griot product + Lucid handoff pipeline for asset generation. |
| **SkillForge** (K) | concept | concept | Electron app to manage skills/plugins for Claude/Vercel agents across the ecosystem. |
| **Griot Hub** (H) | v0.0.1 | dev | Ecosystem command center for discovering and orchestrating all Griot tools. |
| **Damus** (Q) | v1.0 | mature | Floating screenshot analyzer — capture a region, get instant answers via Claude Max. |

### Tool Detail — Extended Descriptions

- **Delphi:** The ytmp4-ai-digest skill with interactive multi-video comparison viewer. Single-video digest and 7-way comparison analysis with frame screenshots and agentic chat. *Stack: python + react viewer. Location: ~/.claude/plugins/cache/ytmp4-ai-digest/*
- **Sonar:** Streams audio from meetings/conversations/streams into structured knowledge. Plugs into Synaptiq or runs standalone. *Stack: in development. Location: C:/Users/digit/Developer/*
- **Kaleidoscope:** Multi-surface knowledge consolidation. Porter (write) + Inspector (read) split. 5 MCP tools: extract, consolidate, diff, sync, status. Newest-wins conflict resolution. *Stack: python fastmcp + ts + go. Location: SkillsForge/kaleidoscope/*
- **Synaptiq:** Markdown-backed nodes with visual layout. Interactive graph (read-write, drag, group). Nodes can trigger workflows and update themselves. Current v1.0 built on Electron 40 + React 19 + Claude Agent SDK with Milanote GUI automation. *Stack: electron + react + claude sdk. Location: Developer/Milanote-AI/synaptiq-ai-electron/*
- **Prism:** `.prism/shared/` directory implements Karpathy's three-layer architecture: CLAUDE.md (rules) + research/docs (wiki) + plans/stories (ideas) + handoffs (the 4th layer). 18 skills, 14 agents, 25 commands, 7 hooks. *Stack: markdown + claude code plugin. Location: Developer/prism-plugin/*
- **codebase-memory-mcp:** SQLite WAL persistence. 11 MCP tools organized in indexing, query, and file access groups. Integrates with Prism as the code intelligence layer per the integration spec. *Stack: go + sqlite + tree-sitter. Location: mcp server*
- **Valence:** v2 Superset fork. Observes ~/.claude/ sessions, builds context graphs, tracks cost, orchestrates across git worktrees. Adapter layer (Composio pattern) for Claude/Codex/Cursor/Gemini. All phases A–F complete. *Stack: electron + bun + turborepo. Location: Developer/valence-context-platform/*
- **Fragment:** npm workspaces with packages/core (event bus) + packages/ui (React) + apps/{electron,vscode,tui}. Each surface wired to agent adapters. Companion fragment-plugin for AI wiring. *Stack: ts + npm workspaces. Location: Developer/fragment-ai-scaffold/*
- **Lucid:** long-form/ for Remotion rendering, 3d/ for asset pipeline, lucid-plugin/ for integration. Creates visual assets for any product in the ecosystem. *Stack: remotion + node. Location: Developer/lucid-ai-gen/*
- **Griotwave:** Two register system: Ember Bloom (story-shaped) + Industrial Instrument (load-bearing). 12 ember accent colors. Refraction-based aesthetic literally embodies the information architecture. *Stack: vite + react + css modules. Location: SkillsForge/griotwave/*
- **Brand Ecosystem Hub:** Fragment-scaffolded multi-surface monorepo (Electron + VS Code + TUI). Seeds 7 brand profiles (Prism, Valence, Fragment, Lucid, Sonar, Synaptiq, SkillForge) with name origin, visual palette, typography, and voice tone. Services for naming analysis, creative directions, ecosystem constraint resolution (prevents color/voice collisions across products), and explicit lucidHandoff.ts for downstream asset generation. better-sqlite3 local persistence. *Stack: electron + react + better-sqlite3. Location: SkillsForge/brand-pitch-generator/brand-ecosystem-hub/*
- **SkillForge:** Concept stage. Will manage both hand-authored skills AND auto-generated ones from graph communities (per GitNexus --skills pattern). *Stack: electron (planned). Location: SkillsForge/*
- **Griot Hub:** Early Electron monorepo (v0.0.1). Red Desktop Protocol v1 for RDP-based ecosystem communication. *Stack: electron + npm workspaces. Location: Developer/griot-hub/*
- **Damus:** Global hotkey Ctrl+Shift+Q. Auto-clipboard copy. Detailed vs compact display modes. Always-on-top floater. *Stack: electron + react + claude sdk. Location: Developer/damus/*

---

## 02 · Pipeline — The five-stage knowledge flow.

Capture → Store → Structure → Use → Observe. Each stage has a different cadence, a different read/write pattern, and a different retrieval strategy. Every production tool in the research converges on this shape.

### Stage 01 · Capture
Multi-modal ingestion from live sources — video, audio, AI-environment files.
- Delphi, Sonar, Kaleidoscope

### Stage 02 · Store
Durable, typed, graph-aware knowledge. Nodes with relationships.
- Synaptiq

### Stage 03 · Structure
Phase-aware project context. Rules, wiki, idea files, handoffs.
- Prism

### Stage 04 · Use
Selective retrieval + agent consumption. Per-phase manifests.
- codebase-memory-mcp

### Stage 05 · Observe
Behavioral telemetry + feedback loop. What happened, what did it cost.
- Valence

### Knowledge Flows

```
Capture → Store      (structured output)
Store → Structure    (project-scoped slice)
Structure → Use      (per-phase manifest)
Use → Observe        (agent telemetry)
Observe → Store      (feedback loop)
```

### Feedback Loop

**Observe feeds Store.** Valence's trace data flows back into the knowledge store as a signal — which wiki pages are hot, which are cold, which are missed, which are contradicted by actual agent behavior. This is the Karpathy "lint cycle" made programmatic.

```
Observe ◂ Use ◂ Structure ◂ Store ◂ Capture
```

---

## 03 · Boundary — Valence ↔ Kaleidoscope.

Both tools touch agent context, but in opposite temporal directions. Valence is the mirror — it records what happened. Kaleidoscope is the memo pad — it prepares what should happen next. The cleanest boundary is time, not feature.

### Valence — "The mirror"
**AI Agent Observability & Orchestration**

### Kaleidoscope — "The memo pad"
**Multi-surface Knowledge Consolidation**

### Comparison

| Dimension | Valence | Kaleidoscope |
|-----------|---------|-----------------|
| Primary direction | Read-path dominant (observe → analyze) | Write-path dominant (extract → merge → distribute) |
| Temporal focus | Backward: what did agents do? | Forward: what should agents know? |
| Output target | PostgreSQL / Neo4j / ClickHouse / dashboards | Filesystem markdown + .cursorrules + Claude Project KB |
| Storage model | Database-backed (Drizzle + Neo4j + ClickHouse) | Filesystem + events.jsonl append-only log |
| Parser stream | @valence/observability — heavyweight multi-phase | Simple glob + first-500-char extraction in FastMCP |
| Real-time layer | tRPC subscriptions / WebSocket | claude/channel MCP capability + events.jsonl replay |
| Router surface | 35+ tRPC routers | 5 MCP tools + 1 channel tool |
| Scale posture | Platform — team observability | Personal — knowledge consolidation |

### Where they overlap — Six shared surface areas.

The overlap is concentrated in Kaleidoscope's *Inspector* stream, which is planned but unimplemented. Everything else is distinct enough that the two projects can coexist without scope collision — provided Inspector's read-path stays narrow.

1. Session JSONL parsing — both ingest `~/.claude/projects/*/*.jsonl`
2. Adapter pattern — both define multi-AI environment ingestion interfaces
3. Electron shell as flagship desktop experience
4. Cross-project linking — Kaleidoscope's `cross-project.md` ↔ Valence's Neo4j cross-agent graph
5. Inspector stream (unimplemented in Kaleidoscope) replicates a thin slice of Valence trace analytics

### The cleanest boundary

> "If a developer wants to answer *what did my agents spend last week*, that's Valence. If they want to answer *what are my conventions for error handling in this codebase*, that's Kaleidoscope."

---

## 04 · Convergence — Six streams, one thesis.

Across six independent research streams — Karpathy's LLM wiki pattern, the code-intelligence videos, HASH.ai's refractive design, Synaptiq, Atomic, and the Prism code-intel spec — a single thesis repeats. Each stream approaches it from a different angle. The underlying shape is identical.

### Research Streams — Six angles of approach.

**S1 · Karpathy LLM Wiki**
Three-layer architecture: Rules (CLAUDE.md) → Wiki (flat markdown) → Ideas (task files) + Lint Cycle for self-improvement.
*Source: llm-knowledbase/.prism/shared/research/karpathy-llm-wiki-ecosystem-mapping.md*

**S2 · Code-Intelligence Research**
7 videos + 8 tools: index-once / query-cheap (~70x), selective retrieval, graph-derived skills, hybrid BM25+vector+RRF.
*Source: prism-plugin/.prism/shared/docs/code-intel/2026-04-11-memory-and-context-research.md*

**S3 · HASH.ai Refractive**
Block Protocol + self-building knowledge graph. Design is epistemology. Refractive design system literally encodes layered information.
*Source: SkillsForge/griotwave/.prism/shared/research/2026-04-10-refractive-design-system.md*

**S4 · Synaptiq**
Agentic note-taking with visual nodes, typed relationships. Nodes as participatory actors, not passive storage.
*Source: Developer/Milanote-AI/synaptiq-ai-electron/*

**S5 · Atomic Reference**
Rust core + SQLite + sqlite-vec + FTS5 + hybrid BM25+vector+RRF + embedded MCP server. Synaptiq's reference implementation.
*Source: github.com/kenforthewin/atomic*

**S6 · Prism Code Intelligence Spec**
codebase-memory-mcp as the knowledge graph layer for Prism's research → plan → implement → validate workflow.
*Source: prism-plugin/.prism/shared/docs/code-intel/prism-code-intelligence-integration.md*

### All converge on: agent-native, layered, selective-retrieval knowledge.

### The Five Invariants — What every stream agrees on.

**01 · Knowledge is layered, not flat**
Rules → Wiki → Ideas → Telemetry. Each layer has a different cadence, a different read/write pattern, and a different retrieval strategy.

**02 · Selective retrieval beats cumulative context**
Cumulative context is linear — memory grows with every phase. Selective retrieval is branching — each phase pulls only the slice it needs. Kimi, Prism, Kaleidoscope all implement the same rule at different scales.

**03 · Agents are participants, not observers**
Every tool exposes a surface for agent interaction. MCP tools, channel notifications, graph queries, event buses, avatar components — agents are first-class.

**04 · Design is epistemology**
HASH's refractive glass, griotwave's refraction/bloom/beacon language, Synaptiq's visual node graph. The aesthetic carries the information structure. Glass is not decoration — it's the diagram.

**05 · Local-first + agent-native + graph-aware**
Every production tool surfaces all three: local data, agent-native APIs, graph models. Atomic, Valence, codebase-memory-mcp, HASH — independent, same invariant.

### A note on the visual metaphor

**Glass is not decoration — it is the diagram.**

Griotwave's refraction/bloom/beacon visual language *literally* encodes the information architecture. Glass surfaces exist so you can see *through* layers — because the knowledge *is* layered. Ambient embers are the other tools' outputs you depend on. The bloom stack (three concentric shadows) maps to immediate dependency, transitive impact, and environmental resonance. The beacon channel is reserved for broadcast tools (Delphi, Sonar) — the only products that reach outward to capture.

This is what HASH.ai means by "design is epistemology, not aesthetics." The griotwave design system is the information architecture of the ecosystem rendered as pixels. This visualization is built on it because the metaphor is the point.

---

## Footer

**Griot Creative Ecosystem**

Companion to `.prism/shared/research/2026-04-11-griot-ecosystem-knowledge-architecture.md`

2026-04-11 · Built on griotwave v0.3
