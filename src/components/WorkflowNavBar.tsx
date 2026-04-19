import type { MockPhase } from './MockInterface';
import s from './WorkflowNavBar.module.css';

/**
 * Adapted from griotwave-vite-ts bottom-nav-bar.
 * The active phase expands to reveal its label; inactive phases
 * are icon-only. Zone embers (solar / neural / bio) color the
 * active pill per the Prism workflow's three-zone taxonomy.
 *
 * This is a display-only component — the active phase is driven
 * by the parent state machine, not user clicks.
 */

interface PhaseDef {
  id: MockPhase;
  glyph: string;
  label: string;
  ember: string; // rgb values
}

const PHASES: PhaseDef[] = [
  { id: 'ideate', glyph: '◌', label: 'Ideate', ember: '249, 115, 22' },
  { id: 'research', glyph: '◐', label: 'Research', ember: '59, 130, 246' },
  { id: 'plan', glyph: '◑', label: 'Plan', ember: '59, 130, 246' },
  { id: 'implement', glyph: '◒', label: 'Implement', ember: '59, 130, 246' },
  { id: 'validate', glyph: '◓', label: 'Validate', ember: '59, 130, 246' },
  { id: 'ship', glyph: '●', label: 'Ship', ember: '16, 185, 133' },
];

const ORDER: MockPhase[] = [
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

type ItemState = 'pending' | 'active' | 'complete';

function stateFor(current: MockPhase, target: MockPhase): ItemState {
  if (current === 'complete') return 'complete';
  const ci = ORDER.indexOf(current);
  const ti = ORDER.indexOf(target);
  if (ci < ti) return 'pending';
  if (ci === ti) return 'active';
  return 'complete';
}

interface WorkflowNavBarProps {
  phase: MockPhase;
}

export default function WorkflowNavBar({ phase }: WorkflowNavBarProps) {
  return (
    <nav
      className={s.navBar}
      aria-label="Prism workflow phases"
      role="navigation"
    >
      {PHASES.map((p) => {
        const state = stateFor(phase, p.id);
        return (
          <div
            key={p.id}
            className={`${s.item} ${s[`state-${state}`]}`}
            style={{ '--ember': p.ember } as React.CSSProperties}
            aria-current={state === 'active' ? 'step' : undefined}
            aria-label={p.label}
          >
            <span className={s.glyph} aria-hidden>
              {p.glyph}
            </span>
            <span className={s.labelWrap}>
              <span className={s.labelText}>{p.label}</span>
            </span>
          </div>
        );
      })}
    </nav>
  );
}
