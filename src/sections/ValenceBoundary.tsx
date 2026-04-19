import Section from '../components/Section';
import { EMBERS } from '../data/ecosystem';
import s from './ValenceBoundary.module.css';

interface Row {
  dimension: string;
  valence: string;
  unifier: string;
}

const ROWS: Row[] = [
  {
    dimension: 'Primary direction',
    valence: 'Read-path dominant (observe → analyze)',
    unifier: 'Write-path dominant (extract → merge → distribute)',
  },
  {
    dimension: 'Temporal focus',
    valence: 'Backward: what did agents do?',
    unifier: 'Forward: what should agents know?',
  },
  {
    dimension: 'Output target',
    valence: 'PostgreSQL / Neo4j / ClickHouse / dashboards',
    unifier: 'Filesystem markdown + .cursorrules + Claude Project KB',
  },
  {
    dimension: 'Storage model',
    valence: 'Database-backed (Drizzle + Neo4j + ClickHouse)',
    unifier: 'Filesystem + events.jsonl append-only log',
  },
  {
    dimension: 'Parser stream',
    valence: '@valence/observability — heavyweight multi-phase',
    unifier: 'Simple glob + first-500-char extraction in FastMCP',
  },
  {
    dimension: 'Real-time layer',
    valence: 'tRPC subscriptions / WebSocket',
    unifier: 'claude/channel MCP capability + events.jsonl replay',
  },
  {
    dimension: 'Router surface',
    valence: '35+ tRPC routers',
    unifier: '5 MCP tools + 1 channel tool',
  },
  {
    dimension: 'Scale posture',
    valence: 'Platform — team observability',
    unifier: 'Personal — knowledge consolidation',
  },
];

const OVERLAPS = [
  'Session JSONL parsing — both ingest ~/.claude/projects/*/*.jsonl',
  'Adapter pattern — both define multi-AI environment ingestion interfaces',
  'Electron shell as flagship desktop experience',
  'Cross-project linking — Kaleidoscope\'s cross-project.md ↔ Valence\'s Neo4j cross-agent graph',
  'Inspector stream (unimplemented in Kaleidoscope) replicates a thin slice of Valence trace analytics',
];

export default function ValenceBoundary() {
  return (
    <Section
      id="valence-boundary"
      eyebrow="03 · Boundary"
      title="Valence ↔ Kaleidoscope."
      subtitle="Both tools touch agent context, but in opposite temporal directions. Valence is the mirror — it records what happened. Kaleidoscope is the memo pad — it prepares what should happen next. The cleanest boundary is time, not feature."
      accent={EMBERS.voltage}
    >
      <div className={s.comparisonWrap}>
        <div className={s.comparison}>
          <div className={s.colHeader}>
            <div className={s.headerBar} style={{ '--col-ember': EMBERS.voltage } as React.CSSProperties} />
            <div className={s.headerContent}>
              <div className={s.headerLabel}>Valence</div>
              <div className={s.headerTagline}>The mirror</div>
              <div className={s.headerSub}>AI Agent Observability &amp; Orchestration</div>
            </div>
          </div>
          <div className={s.colHeader}>
            <div className={s.headerBar} style={{ '--col-ember': EMBERS.anomaly } as React.CSSProperties} />
            <div className={s.headerContent}>
              <div className={s.headerLabel}>Kaleidoscope</div>
              <div className={s.headerTagline}>The memo pad</div>
              <div className={s.headerSub}>Multi-surface Knowledge Consolidation</div>
            </div>
          </div>
        </div>

        <div className={s.rows}>
          {ROWS.map((row) => (
            <div key={row.dimension} className={s.row}>
              <div className={s.rowDimension}>{row.dimension}</div>
              <div className={s.rowCells}>
                <div className={s.cell} style={{ '--col-ember': EMBERS.voltage } as React.CSSProperties}>
                  {row.valence}
                </div>
                <div className={s.cell} style={{ '--col-ember': EMBERS.anomaly } as React.CSSProperties}>
                  {row.unifier}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.overlapSection}>
        <div className={s.overlapHeader}>
          <div className={s.overlapEyebrow}>Where they overlap</div>
          <h3 className={s.overlapTitle}>Six shared surface areas.</h3>
          <p className={s.overlapBody}>
            The overlap is concentrated in Kaleidoscope's <em>Inspector</em> stream, which is
            planned but unimplemented. Everything else is distinct enough that the two projects can
            coexist without scope collision — provided Inspector's read-path stays narrow.
          </p>
        </div>
        <ul className={s.overlapList}>
          {OVERLAPS.map((item, i) => (
            <li key={i} className={s.overlapItem}>
              <span className={s.overlapBullet}>◆</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={s.verdict}>
        <div className={s.verdictEyebrow}>The cleanest boundary</div>
        <div className={s.verdictQuote}>
          "If a developer wants to answer <em>what did my agents spend last week</em>, that's Valence.
          <br />
          If they want to answer <em>what are my conventions for error handling in this codebase</em>,
          that's Kaleidoscope."
        </div>
      </div>
    </Section>
  );
}
