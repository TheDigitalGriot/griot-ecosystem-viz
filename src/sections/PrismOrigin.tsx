import Section from '../components/Section';
import { EMBERS } from '../data/ecosystem';
import s from './PrismOrigin.module.css';

type PhaseZone = 'divergent' | 'core' | 'shipping';

interface Phase {
  n: string;
  name: string;
  glyph: string;
  desc: string;
  skills: string[];
  output: string;
  zone: PhaseZone;
  ember: string;
}

const PHASES: Phase[] = [
  {
    n: '01',
    name: 'Ideate',
    glyph: '◌',
    desc: 'Divergent exploration before commitment. Creative generation, design thinking, requirements capture.',
    skills: ['brainstorm', 'design', 'prd', 'visual-docs'],
    output: '.prism/shared/brainstorms/ + designs/',
    zone: 'divergent',
    ember: EMBERS.solar,
  },
  {
    n: '02',
    name: 'Research',
    glyph: '◐',
    desc: 'Parallel agents map the codebase. Documentarian stance — describe what exists, do not critique.',
    skills: ['research', 'debug'],
    output: '.prism/shared/research/',
    zone: 'core',
    ember: EMBERS.neural,
  },
  {
    n: '03',
    name: 'Plan',
    glyph: '◑',
    desc: 'Interactive planning with user approval at every step. Plans are contracts with two-category success criteria.',
    skills: ['plan', 'iterate'],
    output: '.prism/shared/plans/',
    zone: 'core',
    ember: EMBERS.neural,
  },
  {
    n: '04',
    name: 'Implement',
    glyph: '◒',
    desc: 'Phase-by-phase execution with verification checkpoints. Three execution models match three work scales.',
    skills: ['implement', 'subagent', 'spectrum'],
    output: 'source code + commits',
    zone: 'core',
    ember: EMBERS.neural,
  },
  {
    n: '05',
    name: 'Validate',
    glyph: '◓',
    desc: 'Verify implementation against the plan. Automated gates + manual testing items + browser verification.',
    skills: ['validate', 'verify'],
    output: '.prism/shared/validation/',
    zone: 'core',
    ember: EMBERS.neural,
  },
  {
    n: '06',
    name: 'Ship',
    glyph: '●',
    desc: 'Disciplined release. Branch cleanup, PR description, version bump, release orchestration, handoffs.',
    skills: ['finish', 'bookend', 'release'],
    output: 'PR + tag + GitHub release',
    zone: 'shipping',
    ember: EMBERS.bio,
  },
];

interface CrossCuttingTool {
  name: string;
  glyph: string;
  desc: string;
  invocation: string;
}

const CROSS_CUTTING: CrossCuttingTool[] = [
  {
    name: 'init',
    glyph: '⊹',
    desc: 'Bootstrap the .prism/ directory with every shared folder — brainstorms, research, plans, validation, handoffs.',
    invocation: '/prism-init',
  },
  {
    name: 'dispatch',
    glyph: '⋈',
    desc: 'General parallel fan-out pattern. Usable from any phase when 2+ independent problem domains can run concurrently.',
    invocation: '/prism-dispatch',
  },
  {
    name: 'docs-update',
    glyph: '⟲',
    desc: 'Sync the VitePress docs site from a versioned PRISM-DOCUMENTATION-[version].md snapshot.',
    invocation: '/prism-docs-update',
  },
  {
    name: 'eval',
    glyph: '⊙',
    desc: 'Run skill evaluations and version comparisons. Measure regressions across Prism releases.',
    invocation: '/prism-eval',
  },
];

const KEY_STATS = [
  { value: '21', label: 'Skills' },
  { value: '14', label: 'Agents' },
  { value: '25', label: 'Commands' },
  { value: '7', label: 'Hooks' },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Layer 1',
    karpathyName: 'Rules',
    prismName: 'CLAUDE.md',
    desc: 'Project-level instructions and conventions that every session inherits.',
  },
  {
    layer: 'Layer 2',
    karpathyName: 'Wiki',
    prismName: '.prism/shared/research/ + docs/',
    desc: 'Flat markdown knowledge base. YYYY-MM-DD-topic.md convention. Research is cross-session durable.',
  },
  {
    layer: 'Layer 3',
    karpathyName: 'Ideas',
    prismName: '.prism/shared/plans/ + stories/',
    desc: 'Task-level context. Plans and story decompositions for Spectrum execution.',
  },
  {
    layer: 'Layer 4',
    karpathyName: '— (not addressed)',
    prismName: '.prism/shared/handoffs/',
    desc: "Session-to-session continuity. Karpathy's pattern stops at Layer 3; Prism adds the compaction-survival layer.",
  },
];

const EXECUTION_MODELS = [
  {
    name: 'Direct',
    scale: 'Quick fix or single-phase',
    invocation: '/prism-implement',
    speed: 'fast',
  },
  {
    name: 'Subagent-Driven',
    scale: 'Medium feature (3-10 tasks)',
    invocation: '/prism-subagent',
    speed: 'interactive',
  },
  {
    name: 'Spectrum',
    scale: 'Large feature (10+ stories)',
    invocation: './scripts/spectrum.sh',
    speed: 'overnight autonomous',
  },
];

export default function PrismOrigin() {
  return (
    <Section
      id="prism-origin"
      eyebrow="00 · The Seed"
      title="Prism is where this started."
      subtitle="Every other tool in the ecosystem was built using Prism's workflow. What began as four convergent phases — Research, Plan, Implement, Validate — has evolved into six: a divergent Ideation front, the historical RPIV core, and a disciplined Shipping back. RPIV lives on as the spine."
      accent={EMBERS.neural}
    >
      {/* ───── Origin card ───── */}
      <div className={s.originCard}>
        <div className={s.originGrid}>
          <div className={s.originMeta}>
            <div className={s.originBadge}>
              <span className={s.originGlyph}>◆</span>
              <span className={s.originName}>Prism</span>
              <span className={s.originVersion}>v3.2.0</span>
            </div>
            <h3 className={s.originHeadline}>
              The first tool. The one that builds the rest.
            </h3>
            <p className={s.originBody}>
              Prism is a Claude Code plugin that implements a structured development workflow
              for AI coding agents. It was built to solve the problem of agents jumping straight
              into code without understanding what they were changing. The phases force
              deliberation before action. The <code>.prism/shared/</code> directory persists
              that deliberation as durable, markdown-based knowledge.
            </p>
            <p className={s.originBody}>
              Named after optics — structured light decomposition — because each phase
              separates a different wavelength of thought. Ideation is the source light. Research
              is the orientation. Plans are the refracted intent. Implementation is the focused
              beam. Validation is the spectrum recombined. Shipping is the light leaving the room.
            </p>
            <div className={s.originTaglines}>
              <div className={s.tagline}>
                <span className={s.taglineLabel}>Origin</span>
                <span className={s.taglineValue}>Optics · structured decomposition</span>
              </div>
              <div className={s.tagline}>
                <span className={s.taglineLabel}>License</span>
                <span className={s.taglineValue}>Marketplace plugin</span>
              </div>
              <div className={s.tagline}>
                <span className={s.taglineLabel}>Location</span>
                <span className={s.taglineValue}>Developer/prism-plugin/</span>
              </div>
            </div>
          </div>

          <div className={s.originStats}>
            {KEY_STATS.map((stat) => (
              <div key={stat.label} className={s.statBlock}>
                <div className={s.statValue}>{stat.value}</div>
                <div className={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Six phases ───── */}
      <div className={s.phasesHeader}>
        <div className={s.phasesEyebrow}>The Workflow · v3.2.0</div>
        <h3 className={s.phasesTitle}>Six phases. Three zones.</h3>
        <p className={s.phasesSubtitle}>
          Ideate → Research → Plan → Implement → Validate → Ship. The middle four are the
          historical RPIV core — the convergent spine that Prism was built on. Phase 01 adds
          divergent creative exploration. Phase 06 adds disciplined release. Every other tool
          in the Griot ecosystem was built by running this loop against itself.
        </p>
      </div>

      <div className={s.phasesScroll}>
        <div className={s.phasesContainer}>
          {/* RPIV Core bracket — spans phases 02-05 */}
          <div className={s.rpivBracket}>
            <div className={s.rpivLine} />
            <div className={s.rpivLabel}>
              <span className={s.rpivTick}>◂</span>
              Historical RPIV Core
              <span className={s.rpivTick}>▸</span>
            </div>
          </div>

          <div className={s.phasesGrid}>
            {PHASES.map((phase) => (
              <div
                key={phase.n}
                className={`${s.phase} ${s[`zone-${phase.zone}`]}`}
                style={{ '--ember': phase.ember } as React.CSSProperties}
              >
                <div className={s.phaseNumber}>{phase.n}</div>
                <div className={s.phaseGlyph}>{phase.glyph}</div>
                <div className={s.phaseName}>{phase.name}</div>
                <p className={s.phaseDesc}>{phase.desc}</p>

                <div className={s.phaseSkills}>
                  {phase.skills.map((skill) => (
                    <span key={skill} className={s.skillChip}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className={s.phaseOutput}>
                  <span className={s.phaseOutputLabel}>Output</span>
                  <code>{phase.output}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={s.zoneLegend}>
        <div className={s.legendItem}>
          <div
            className={s.legendDot}
            style={{ '--ember': EMBERS.solar } as React.CSSProperties}
          />
          <span className={s.legendLabel}>Divergent</span>
          <span className={s.legendDesc}>Creative exploration before commitment</span>
        </div>
        <div className={s.legendItem}>
          <div
            className={s.legendDot}
            style={{ '--ember': EMBERS.neural } as React.CSSProperties}
          />
          <span className={s.legendLabel}>RPIV Core</span>
          <span className={s.legendDesc}>The historical convergent spine</span>
        </div>
        <div className={s.legendItem}>
          <div
            className={s.legendDot}
            style={{ '--ember': EMBERS.bio } as React.CSSProperties}
          />
          <span className={s.legendLabel}>Shipping</span>
          <span className={s.legendDesc}>Disciplined release discipline</span>
        </div>
      </div>

      {/* ───── Cross-cutting infrastructure ───── */}
      <div className={s.crossCuttingBlock}>
        <div className={s.crossHeader}>
          <div className={s.crossEyebrow}>Cross-cutting</div>
          <h3 className={s.crossTitle}>
            Infrastructure that sits outside the linear workflow.
          </h3>
          <p className={s.crossSubtitle}>
            Four utilities float across every phase. They aren't tied to a single step —
            they're the scaffolding that keeps the whole workflow honest.
          </p>
        </div>

        <div className={s.crossGrid}>
          {CROSS_CUTTING.map((tool) => (
            <div key={tool.name} className={s.crossCard}>
              <div className={s.crossCardGlyph}>{tool.glyph}</div>
              <div className={s.crossCardName}>{tool.name}</div>
              <p className={s.crossCardDesc}>{tool.desc}</p>
              <code className={s.crossCardInvocation}>{tool.invocation}</code>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Karpathy layers ───── */}
      <div className={s.karpathyGrid}>
        <div className={s.karpathyHeader}>
          <div className={s.karpathyEyebrow}>Architecture</div>
          <h3 className={s.karpathyTitle}>
            Prism already implements Karpathy's three-layer pattern — plus a fourth layer.
          </h3>
          <p className={s.karpathyBody}>
            Karpathy's LLM wiki architecture proposes three layers: rules, wiki, ideas. Prism
            implemented this before it was named, then added a fourth layer Karpathy doesn't
            address: <em>handoffs</em>, the session-to-session continuity that lets compacted
            agents recover their place.
          </p>
        </div>
        <div className={s.layerStack}>
          {ARCHITECTURE_LAYERS.map((layer) => (
            <div key={layer.layer} className={s.layerRow}>
              <div className={s.layerNum}>{layer.layer}</div>
              <div className={s.layerContent}>
                <div className={s.layerNames}>
                  <span className={s.karpathyName}>{layer.karpathyName}</span>
                  <span className={s.layerArrow}>→</span>
                  <span className={s.prismName}>{layer.prismName}</span>
                </div>
                <p className={s.layerDesc}>{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Execution models ───── */}
      <div className={s.executionSection}>
        <div className={s.executionEyebrow}>Three Execution Models</div>
        <h3 className={s.executionTitle}>Match the execution to the scale.</h3>
        <p className={s.executionBody}>
          Inside Phase 04 (Implement), three execution modes handle three work scales. Direct
          for single-phase fixes. Subagent-Driven for medium features in an interactive
          session. Spectrum for large features run autonomously overnight. Use the cross-cutting
          <code> /prism-dispatch </code> pattern when fanning work out in parallel from any
          phase.
        </p>
        <div className={s.executionTable}>
          {EXECUTION_MODELS.map((model) => (
            <div key={model.name} className={s.executionRow}>
              <div className={s.executionName}>
                <div className={s.executionDot} />
                {model.name}
              </div>
              <div className={s.executionScale}>{model.scale}</div>
              <code className={s.executionInvocation}>{model.invocation}</code>
              <div className={s.executionSpeed}>{model.speed}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── Seed quote ───── */}
      <div className={s.seedQuote}>
        <div className={s.seedEyebrow}>The seed statement</div>
        <div className={s.seedBody}>
          "Prism is the development workflow used to build the other tools."
        </div>
        <div className={s.seedAttribution}>
          — From the Griot Creative Ecosystem overview, 2026-04-05
        </div>
      </div>
    </Section>
  );
}
