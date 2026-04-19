import s from './MockInterface.module.css';

export type MockPhase =
  | 'idle'
  | 'typing'
  | 'ideate'
  | 'research'
  | 'plan'
  | 'implement'
  | 'validate'
  | 'ship'
  | 'complete';

interface MockInterfaceProps {
  phase: MockPhase;
  typedText: string;
  prompt: string;
}

const SIDEBAR_NAV = [
  { icon: '≡', label: 'Feed' },
  { icon: '◖', label: 'Inbox', count: '53' },
  { icon: '✎', label: 'Drafts', count: '7' },
  { icon: '◫', label: 'Notes' },
  { icon: '∞', label: 'Flows' },
];

const EXISTING_TOOLS = [
  { glyph: '◆', name: 'Prism', ember: '59, 130, 246' },
  { glyph: '⚡', name: 'Valence', ember: '198, 249, 31' },
  { glyph: '✦', name: 'Synaptiq', ember: '16, 185, 133' },
  { glyph: '◇', name: 'Fragment', ember: '249, 115, 22' },
  { glyph: '✷', name: 'Lucid', ember: '251, 146, 60' },
  { glyph: '◉', name: 'Griotwave', ember: '0, 255, 102' },
  { glyph: '◌', name: 'Delphi', ember: '255, 0, 51' },
  { glyph: '≋', name: 'Sonar', ember: '255, 23, 68' },
];

// States ordered chronologically — each phase unlocks its mock action
const phaseReached = (current: MockPhase, target: MockPhase) => {
  const order: MockPhase[] = [
    'idle',
    'typing',
    'ideate',
    'research',
    'plan',
    'implement',
    'validate',
    'ship',
    'complete',
  ];
  return order.indexOf(current) >= order.indexOf(target);
};

export default function MockInterface({
  phase,
  typedText,
  prompt,
}: MockInterfaceProps) {
  const showBrainstorm = phaseReached(phase, 'ideate');
  const scanResearch = phase === 'research';
  const showPlan = phaseReached(phase, 'plan');
  const showCairn = phaseReached(phase, 'implement');
  const graphNewNode = phaseReached(phase, 'implement');
  const showValidation = phaseReached(phase, 'validate');
  const showPR = phaseReached(phase, 'ship');
  const isComplete = phase === 'complete';

  return (
    <div className={s.window}>
      {/* ───── Window chrome ───── */}
      <div className={s.chrome}>
        <div className={s.chromeLeft}>
          <div className={s.chromeMark}>◆</div>
          <div className={s.searchBar}>
            <span className={s.searchIcon}>⌕</span>
            <span className={s.searchPlaceholder}>Search ecosystem…</span>
          </div>
        </div>
        <div className={s.chromeRight}>
          <div className={s.chromeBtn}>+</div>
          <div className={s.chromeBtn}>
            ◉ <span className={s.chromeCount}>30</span>
          </div>
          <div className={s.chromeBtn}>
            ✈ <span className={s.chromeCount}>23</span>
          </div>
          <div className={s.chromeBtn}>◉</div>
        </div>
      </div>

      {/* ───── Body: sidebar + main ───── */}
      <div className={s.body}>
        {/* ─── Sidebar ─── */}
        <aside className={s.sidebar}>
          <nav className={s.nav}>
            {SIDEBAR_NAV.map((item) => (
              <div key={item.label} className={s.navItem}>
                <span className={s.navIcon}>{item.icon}</span>
                <span className={s.navLabel}>{item.label}</span>
                {item.count && <span className={s.navCount}>{item.count}</span>}
              </div>
            ))}
          </nav>

          <div className={s.sidebarDivider}>
            <span>FAVORITES</span>
            <span className={s.dividerCaret}>›</span>
          </div>
          <div className={s.sidebarDivider}>
            <span>PAGES</span>
            <span className={s.dividerCaret}>›</span>
          </div>

          <div
            className={`${s.sidebarDivider} ${s.dividerActive} ${
              scanResearch ? s.dividerScanning : ''
            }`}
          >
            <span>TOOLS</span>
            <span className={s.dividerCaret}>⌄</span>
            {scanResearch && <div className={s.scanLine} />}
          </div>

          <div className={s.toolsList}>
            {EXISTING_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className={s.toolItem}
                style={{ '--ember': tool.ember } as React.CSSProperties}
              >
                <span className={s.toolGlyph}>{tool.glyph}</span>
                <span className={s.toolName}>{tool.name}</span>
              </div>
            ))}

            {/* New tool: Cairn — appears during implement */}
            <div
              className={`${s.toolItem} ${s.toolNew} ${
                showCairn ? s.toolNewVisible : ''
              }`}
              style={{ '--ember': '139, 215, 255' } as React.CSSProperties}
            >
              <span className={s.toolGlyph}>▸</span>
              <span className={s.toolName}>Cairn</span>
              <span className={s.toolNewBadge}>NEW</span>
            </div>
          </div>
        </aside>

        {/* ─── Main grid ─── */}
        <main className={s.main}>
          {/* Top-left — Recent research */}
          <div className={s.gridCard}>
            <div className={s.cardHeader}>
              <div className={s.cardHeaderBar} />
            </div>
            <div className={s.cardContent}>
              <div className={s.contentBars}>
                <div className={s.bar} style={{ width: '80%' }} />
                <div className={s.barRow}>
                  <div className={s.barSmall} />
                  <div className={s.barSmall} />
                  <div className={s.barSmall} />
                  <div className={s.barSmall} />
                  <div className={s.barSmall} />
                </div>
                <div className={s.bar} style={{ width: '60%' }} />
              </div>
            </div>
          </div>

          {/* Top-right — Graph viz */}
          <div className={s.gridCard}>
            <div className={s.cardHeader}>
              <div className={s.cardHeaderBar} style={{ width: '30%' }} />
            </div>
            <div className={s.graphViz}>
              <svg viewBox="0 0 200 140" className={s.graphSvg}>
                {/* edges */}
                <line x1="100" y1="30" x2="60" y2="70" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
                <line x1="100" y1="30" x2="140" y2="70" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
                <line x1="60" y1="70" x2="40" y2="110" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                <line x1="60" y1="70" x2="80" y2="110" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                <line x1="140" y1="70" x2="120" y2="110" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                <line x1="140" y1="70" x2="160" y2="110" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                {/* new edge to new node — only visible when implemented */}
                {graphNewNode && (
                  <line
                    x1="100"
                    y1="30"
                    x2="100"
                    y2="70"
                    stroke="rgba(139,215,255,0.9)"
                    strokeWidth="1.2"
                    className={s.graphNewEdge}
                  />
                )}

                {/* nodes */}
                <circle cx="100" cy="30" r="7" fill="rgba(139,92,246,0.8)" />
                <circle cx="60" cy="70" r="6" fill="rgba(139,92,246,0.7)" />
                <circle cx="140" cy="70" r="6" fill="rgba(139,92,246,0.7)" />
                <circle cx="40" cy="110" r="5" fill="rgba(139,92,246,0.6)" />
                <circle cx="80" cy="110" r="5" fill="rgba(139,92,246,0.6)" />
                <circle cx="120" cy="110" r="5" fill="rgba(139,92,246,0.6)" />
                <circle cx="160" cy="110" r="5" fill="rgba(139,92,246,0.6)" />

                {/* new node — Cairn */}
                {graphNewNode && (
                  <g className={s.graphNewNode}>
                    <circle
                      cx="100"
                      cy="70"
                      r="8"
                      fill="rgba(139,215,255,0.9)"
                    />
                    <circle
                      cx="100"
                      cy="70"
                      r="14"
                      fill="none"
                      stroke="rgba(139,215,255,0.6)"
                      strokeWidth="1"
                      className={s.graphNewRing}
                    />
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Bottom-left — Active plan (morphs from empty to filled) */}
          <div
            className={`${s.gridCard} ${showPlan ? s.cardFilled : ''}`}
          >
            <div className={s.cardHeader}>
              <div className={s.cardHeaderBar} style={{ width: '40%' }} />
              {showPlan && <div className={s.cardBadge}>plan</div>}
            </div>
            <div className={s.cardContent}>
              {showPlan ? (
                <div className={s.planBlocks}>
                  <div className={s.planRow}>
                    <div className={s.planTick} />
                    <div className={s.barSmall} style={{ width: '70%' }} />
                  </div>
                  <div className={s.planRow}>
                    <div className={s.planTick} />
                    <div className={s.barSmall} style={{ width: '55%' }} />
                  </div>
                  <div className={s.planRow}>
                    <div className={s.planTick} />
                    <div className={s.barSmall} style={{ width: '80%' }} />
                  </div>
                  <div className={s.planRow}>
                    <div className={s.planTick} />
                    <div className={s.barSmall} style={{ width: '45%' }} />
                  </div>
                </div>
              ) : (
                <div className={s.emptyBlock} />
              )}
            </div>
          </div>

          {/* Bottom-right — Activity (fills as phases run) */}
          <div className={s.gridCard}>
            <div className={s.cardHeader}>
              <div className={s.cardHeaderBar} style={{ width: '35%' }} />
            </div>
            <div className={s.cardContent}>
              <div className={s.activityList}>
                <ActivityLine
                  active={phaseReached(phase, 'ideate')}
                  label="brainstorm · design"
                />
                <ActivityLine
                  active={phaseReached(phase, 'research')}
                  label="research · debug"
                />
                <ActivityLine
                  active={phaseReached(phase, 'plan')}
                  label="plan created"
                />
                <ActivityLine
                  active={phaseReached(phase, 'implement')}
                  label="cairn scaffold committed"
                />
                <ActivityLine
                  active={phaseReached(phase, 'validate')}
                  label="typecheck + build passed"
                />
                <ActivityLine
                  active={phaseReached(phase, 'ship')}
                  label="pr opened"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ───── Brainstorm overlay ───── */}
      {showBrainstorm && !isComplete && phase !== 'ship' && (
        <div className={s.brainstormCard}>
          <div className={s.brainstormHeader}>
            <span className={s.brainstormDot} />
            brainstorm · exploring approaches
          </div>
          <div className={s.brainstormBody}>
            <div className={s.brainstormOption}>
              <span className={s.brainstormTick}>✓</span>
              shared sqlite with FTS5 across repos
            </div>
            <div className={s.brainstormOption}>
              <span className={s.brainstormTick}>✓</span>
              mcp server exposing memory ops
            </div>
            <div className={s.brainstormOption}>
              <span className={s.brainstormTick}>◦</span>
              optional vector layer (deferred)
            </div>
          </div>
        </div>
      )}

      {/* ───── Validation overlay ───── */}
      {showValidation && (
        <div className={s.validationBadge}>
          <span className={s.validationCheck}>✓</span>
          validated
        </div>
      )}

      {/* ───── PR toast ───── */}
      {showPR && (
        <div className={s.prToast}>
          <div className={s.prHeader}>
            <span className={s.prIcon}>⇧</span>
            <span className={s.prLabel}>PR #247 ready</span>
          </div>
          <div className={s.prBody}>
            feat: add cairn — cross-project memory service
          </div>
        </div>
      )}

      {/* ───── Typing prompt overlay ───── */}
      {(phase === 'idle' || phase === 'typing') && (
        <div className={s.promptOverlay}>
          <div className={s.promptCard}>
            <div className={s.promptHeader}>
              <div className={s.promptDot} />
              <span className={s.promptLabel}>prism · agent prompt</span>
            </div>
            <div className={s.promptText}>
              {typedText}
              {phase === 'typing' && <span className={s.caret}>▍</span>}
              {phase === 'idle' && (
                <span className={s.placeholder}>{prompt}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActivityLine({ active, label }: { active: boolean; label: string }) {
  return (
    <div className={`${s.activityLine} ${active ? s.activityLineActive : ''}`}>
      <span className={s.activityDot} />
      <span className={s.activityLabel}>{label}</span>
    </div>
  );
}
