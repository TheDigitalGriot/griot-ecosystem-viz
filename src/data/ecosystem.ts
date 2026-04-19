export type Stage = 'capture' | 'store' | 'structure' | 'use' | 'observe' | 'support';

export interface Tool {
  id: string;
  name: string;
  glyph: string;
  ember: string; // rgb values: "59, 130, 246"
  emberName: string;
  stage: Stage;
  stageLabel: string;
  desc: string;
  longDesc: string;
  stack: string;
  version: string;
  status: 'mature' | 'active' | 'dev' | 'concept' | 'research';
  location: string;
}

export const EMBERS = {
  neural: '59, 130, 246',
  neuralIce: '34, 211, 238',
  bio: '16, 185, 133',
  bioHot: '0, 255, 102',
  solar: '249, 115, 22',
  solarHot: '251, 146, 60',
  mint: '16, 185, 129',
  mintHot: '52, 211, 153',
  voltage: '198, 249, 31',
  anomaly: '244, 114, 182',
  beacon: '255, 0, 51',
  beaconHot: '255, 23, 68',
  brass: '181, 113, 39',
  violet: '100, 79, 171',
  phosphor: '34, 146, 39',
} as const;

export const STAGES: Record<Stage, { label: string; desc: string; accent: string }> = {
  capture: {
    label: 'Capture',
    desc: 'Multi-modal ingestion from live sources — video, audio, AI-environment files.',
    accent: EMBERS.beacon,
  },
  store: {
    label: 'Store',
    desc: 'Durable, typed, graph-aware knowledge. Nodes with relationships.',
    accent: EMBERS.bio,
  },
  structure: {
    label: 'Structure',
    desc: 'Phase-aware project context. Rules, wiki, idea files, handoffs.',
    accent: EMBERS.neural,
  },
  use: {
    label: 'Use',
    desc: 'Selective retrieval + agent consumption. Per-phase manifests.',
    accent: EMBERS.neuralIce,
  },
  observe: {
    label: 'Observe',
    desc: 'Behavioral telemetry + feedback loop. What happened, what did it cost.',
    accent: EMBERS.voltage,
  },
  support: {
    label: 'Support',
    desc: 'Shared infrastructure: scaffolding, assets, design language, utilities.',
    accent: EMBERS.brass,
  },
};

export const TOOLS: Tool[] = [
  {
    id: 'delphi',
    name: 'Delphi',
    glyph: 'O',
    ember: EMBERS.beacon,
    emberName: 'beacon',
    stage: 'capture',
    stageLabel: 'Capture',
    desc: 'YouTube/MP4 analyzer — fetches transcripts, runs cross-video analysis, extracts topics/disagreements/key moments.',
    longDesc:
      'The ytmp4-ai-digest skill with interactive multi-video comparison viewer. Single-video digest and 7-way comparison analysis with frame screenshots and agentic chat.',
    stack: 'python + react viewer',
    version: 'v1.6.2',
    status: 'active',
    location: '~/.claude/plugins/cache/ytmp4-ai-digest/',
  },
  {
    id: 'sonar',
    name: 'Sonar',
    glyph: 'S',
    ember: EMBERS.beaconHot,
    emberName: 'beacon-hot',
    stage: 'capture',
    stageLabel: 'Capture',
    desc: 'Real-time listening + teleprompter overlay. Live audio → transcripts, key points, action items.',
    longDesc:
      'Streams audio from meetings/conversations/streams into structured knowledge. Plugs into Synaptiq or runs standalone.',
    stack: 'in development',
    version: 'concept',
    status: 'dev',
    location: 'C:/Users/digit/Developer/',
  },
  {
    id: 'kaleidoscope',
    name: 'Kaleidoscope',
    glyph: 'C',
    ember: EMBERS.anomaly,
    emberName: 'anomaly',
    stage: 'capture',
    stageLabel: 'Capture',
    desc: 'Porter extracts scattered knowledge from Claude memory, session JSONL, Claude.ai projects, codebase docs.',
    longDesc:
      'Multi-surface knowledge consolidation. Porter (write) + Inspector (read) split. 5 MCP tools: extract, consolidate, diff, sync, status. Newest-wins conflict resolution.',
    stack: 'python fastmcp + ts + go',
    version: 'v0.1',
    status: 'dev',
    location: 'SkillsForge/kaleidoscope/',
  },
  {
    id: 'synaptiq',
    name: 'Synaptiq',
    glyph: 'Y',
    ember: EMBERS.bio,
    emberName: 'bioluminescent',
    stage: 'store',
    stageLabel: 'Store',
    desc: 'Agentic note-taking with visual nodes, file refs, typed relationships. The interactive evolution of Obsidian.',
    longDesc:
      'Markdown-backed nodes with visual layout. Interactive graph (read-write, drag, group). Nodes can trigger workflows and update themselves. Current v1.0 built on Electron 40 + React 19 + Claude Agent SDK with Milanote GUI automation.',
    stack: 'electron + react + claude sdk',
    version: 'v1.0',
    status: 'active',
    location: 'Developer/Milanote-AI/synaptiq-ai-electron/',
  },
  {
    id: 'prism',
    name: 'Prism',
    glyph: 'P',
    ember: EMBERS.neural,
    emberName: 'neural-blue',
    stage: 'structure',
    stageLabel: 'Structure',
    desc: 'Agentic development workflow. 4-phase: Research → Plan → Implement → Validate. Spectrum for autonomous overnight runs.',
    longDesc:
      '.prism/shared/ directory implements Karpathy\'s three-layer architecture: CLAUDE.md (rules) + research/docs (wiki) + plans/stories (ideas) + handoffs (the 4th layer). 18 skills, 14 agents, 25 commands, 7 hooks.',
    stack: 'markdown + claude code plugin',
    version: 'v3.2.0',
    status: 'mature',
    location: 'Developer/prism-plugin/',
  },
  {
    id: 'codebase-memory',
    name: 'codebase-memory-mcp',
    glyph: 'M',
    ember: EMBERS.neuralIce,
    emberName: 'neural-ice',
    stage: 'use',
    stageLabel: 'Use',
    desc: 'Graph-based code intelligence MCP. ~70x token reduction vs. file-by-file grep. Structural queries, dead code, blast radius.',
    longDesc:
      'SQLite WAL persistence. 11 MCP tools organized in indexing, query, and file access groups. Integrates with Prism as the code intelligence layer per the integration spec.',
    stack: 'go + sqlite + tree-sitter',
    version: 'active',
    status: 'active',
    location: 'mcp server',
  },
  {
    id: 'valence',
    name: 'Valence',
    glyph: 'V',
    ember: EMBERS.voltage,
    emberName: 'voltage',
    stage: 'observe',
    stageLabel: 'Observe',
    desc: 'AI agent observability & orchestration platform. 35+ tRPC routers, Neo4j + ClickHouse + Postgres.',
    longDesc:
      'v2 Superset fork. Observes ~/.claude/ sessions, builds context graphs, tracks cost, orchestrates across git worktrees. Adapter layer (Composio pattern) for Claude/Codex/Cursor/Gemini. All phases A–F complete.',
    stack: 'electron + bun + turborepo',
    version: 'v2',
    status: 'mature',
    location: 'Developer/valence-context-platform/',
  },
  {
    id: 'fragment',
    name: 'Fragment',
    glyph: 'F',
    ember: EMBERS.solar,
    emberName: 'solar-flare',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Multi-surface scaffolding CLI. Generates Electron/VS Code/TUI apps wired to Claude, Codex, and Gemini.',
    longDesc:
      'npm workspaces with packages/core (event bus) + packages/ui (React) + apps/{electron,vscode,tui}. Each surface wired to agent adapters. Companion fragment-plugin for AI wiring.',
    stack: 'ts + npm workspaces',
    version: 'v1.0.1',
    status: 'mature',
    location: 'Developer/fragment-ai-scaffold/',
  },
  {
    id: 'lucid',
    name: 'Lucid',
    glyph: 'L',
    ember: EMBERS.solarHot,
    emberName: 'solar-hot',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Agentic asset creation — Remotion video rendering, 3D asset pipeline, slide/design exports.',
    longDesc:
      'long-form/ for Remotion rendering, 3d/ for asset pipeline, lucid-plugin/ for integration. Creates visual assets for any product in the ecosystem.',
    stack: 'remotion + node',
    version: 'v1.2',
    status: 'active',
    location: 'Developer/lucid-ai-gen/',
  },
  {
    id: 'griotwave',
    name: 'Griotwave',
    glyph: 'G',
    ember: EMBERS.bioHot,
    emberName: 'bio-hot',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Visual language v0.3 — frosted glass + beacon ember + bioluminescent bloom. The design system for the ecosystem.',
    longDesc:
      'Two register system: Ember Bloom (story-shaped) + Industrial Instrument (load-bearing). 12 ember accent colors. Refraction-based aesthetic literally embodies the information architecture.',
    stack: 'vite + react + css modules',
    version: 'v0.3',
    status: 'research',
    location: 'SkillsForge/griotwave/',
  },
  {
    id: 'brand-ecosystem-hub',
    name: 'Brand Ecosystem Hub',
    glyph: 'B',
    ember: EMBERS.brass,
    emberName: 'brass',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Agentic brand identity generator. YAML brand profiles for every Griot product + Lucid handoff pipeline for asset generation.',
    longDesc:
      'Fragment-scaffolded multi-surface monorepo (Electron + VS Code + TUI). Seeds 7 brand profiles (Prism, Valence, Fragment, Lucid, Sonar, Synaptiq, SkillForge) with name origin, visual palette, typography, and voice tone. Services for naming analysis, creative directions, ecosystem constraint resolution (prevents color/voice collisions across products), and explicit lucidHandoff.ts for downstream asset generation. better-sqlite3 local persistence.',
    stack: 'electron + react + better-sqlite3',
    version: 'v0.0.1',
    status: 'dev',
    location: 'SkillsForge/brand-pitch-generator/brand-ecosystem-hub/',
  },
  {
    id: 'skillforge',
    name: 'SkillForge',
    glyph: 'K',
    ember: EMBERS.violet,
    emberName: 'violet-frequency',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Electron app to manage skills/plugins for Claude/Vercel agents across the ecosystem.',
    longDesc:
      'Concept stage. Will manage both hand-authored skills AND auto-generated ones from graph communities (per GitNexus --skills pattern).',
    stack: 'electron (planned)',
    version: 'concept',
    status: 'concept',
    location: 'SkillsForge/',
  },
  {
    id: 'griot-hub',
    name: 'Griot Hub',
    glyph: 'H',
    ember: EMBERS.mint,
    emberName: 'mint-signal',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Ecosystem command center for discovering and orchestrating all Griot tools.',
    longDesc:
      'Early Electron monorepo (v0.0.1). Red Desktop Protocol v1 for RDP-based ecosystem communication.',
    stack: 'electron + npm workspaces',
    version: 'v0.0.1',
    status: 'dev',
    location: 'Developer/griot-hub/',
  },
  {
    id: 'damus',
    name: 'Damus',
    glyph: 'Q',
    ember: EMBERS.mintHot,
    emberName: 'mint-hot',
    stage: 'support',
    stageLabel: 'Support',
    desc: 'Floating screenshot analyzer — capture a region, get instant answers via Claude Max.',
    longDesc:
      'Global hotkey Ctrl+Shift+Q. Auto-clipboard copy. Detailed vs compact display modes. Always-on-top floater.',
    stack: 'electron + react + claude sdk',
    version: 'v1.0',
    status: 'mature',
    location: 'Developer/damus/',
  },
];

export const FLOWS: Array<{ from: Stage; to: Stage; label: string }> = [
  { from: 'capture', to: 'store', label: 'structured output' },
  { from: 'store', to: 'structure', label: 'project-scoped slice' },
  { from: 'structure', to: 'use', label: 'per-phase manifest' },
  { from: 'use', to: 'observe', label: 'agent telemetry' },
  { from: 'observe', to: 'store', label: 'feedback loop' },
];

export const INVARIANTS = [
  {
    n: 1,
    title: 'Knowledge is layered, not flat',
    body: 'Rules → Wiki → Ideas → Telemetry. Each layer has a different cadence, a different read/write pattern, and a different retrieval strategy.',
  },
  {
    n: 2,
    title: 'Selective retrieval beats cumulative context',
    body: 'Cumulative context is linear — memory grows with every phase. Selective retrieval is branching — each phase pulls only the slice it needs. Kimi, Prism, Kaleidoscope all implement the same rule at different scales.',
  },
  {
    n: 3,
    title: 'Agents are participants, not observers',
    body: 'Every tool exposes a surface for agent interaction. MCP tools, channel notifications, graph queries, event buses, avatar components — agents are first-class.',
  },
  {
    n: 4,
    title: 'Design is epistemology',
    body: "HASH's refractive glass, griotwave's refraction/bloom/beacon language, Synaptiq's visual node graph. The aesthetic carries the information structure. Glass is not decoration — it's the diagram.",
  },
  {
    n: 5,
    title: 'Local-first + agent-native + graph-aware',
    body: 'Every production tool surfaces all three: local data, agent-native APIs, graph models. Atomic, Valence, codebase-memory-mcp, HASH — independent, same invariant.',
  },
];

export const RESEARCH_STREAMS = [
  {
    id: 'karpathy',
    label: 'Karpathy LLM Wiki',
    summary: 'Three-layer architecture: Rules (CLAUDE.md) → Wiki (flat markdown) → Ideas (task files) + Lint Cycle for self-improvement.',
    ember: EMBERS.neural,
    source: 'llm-knowledbase/.prism/shared/research/karpathy-llm-wiki-ecosystem-mapping.md',
  },
  {
    id: 'code-intel',
    label: 'Code-Intelligence Research',
    summary: '7 videos + 8 tools: index-once / query-cheap (~70x), selective retrieval, graph-derived skills, hybrid BM25+vector+RRF.',
    ember: EMBERS.neuralIce,
    source: 'prism-plugin/.prism/shared/docs/code-intel/2026-04-11-memory-and-context-research.md',
  },
  {
    id: 'hash',
    label: 'HASH.ai Refractive',
    summary: 'Block Protocol + self-building knowledge graph. Design is epistemology. Refractive design system literally encodes layered information.',
    ember: EMBERS.anomaly,
    source: 'SkillsForge/griotwave/.prism/shared/research/2026-04-10-refractive-design-system.md',
  },
  {
    id: 'synaptiq',
    label: 'Synaptiq',
    summary: 'Agentic note-taking with visual nodes, typed relationships. Nodes as participatory actors, not passive storage.',
    ember: EMBERS.bio,
    source: 'Developer/Milanote-AI/synaptiq-ai-electron/',
  },
  {
    id: 'atomic',
    label: 'Atomic Reference',
    summary: "Rust core + SQLite + sqlite-vec + FTS5 + hybrid BM25+vector+RRF + embedded MCP server. Synaptiq's reference implementation.",
    ember: EMBERS.bioHot,
    source: 'github.com/kenforthewin/atomic',
  },
  {
    id: 'prism-code',
    label: 'Prism Code Intelligence Spec',
    summary: 'codebase-memory-mcp as the knowledge graph layer for Prism\'s research → plan → implement → validate workflow.',
    ember: EMBERS.mint,
    source: 'prism-plugin/.prism/shared/docs/code-intel/prism-code-intelligence-integration.md',
  },
];
