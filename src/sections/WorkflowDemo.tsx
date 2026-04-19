import { useEffect, useState, useRef, useCallback } from 'react';
import Section from '../components/Section';
import MockInterface, { type MockPhase } from '../components/MockInterface';
import WorkflowGraph from '../components/WorkflowGraph';
import WorkflowNavBar from '../components/WorkflowNavBar';
import { EMBERS } from '../data/ecosystem';
import s from './WorkflowDemo.module.css';

const PROMPT = "Build 'Cairn' — cross-project memory connecting Prism sessions across repos";

interface Step {
  kind: MockPhase;
  duration: number; // ms
}

const STEPS: Step[] = [
  { kind: 'idle', duration: 1200 },
  { kind: 'typing', duration: 3200 }, // ~40ms per char
  { kind: 'ideate', duration: 2800 },
  { kind: 'research', duration: 2600 },
  { kind: 'plan', duration: 2800 },
  { kind: 'implement', duration: 3400 },
  { kind: 'validate', duration: 2600 },
  { kind: 'ship', duration: 2800 },
  { kind: 'complete', duration: 4000 },
];

const TYPING_INTERVAL_MS = 38;

export default function WorkflowDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentStep = STEPS[stepIndex];
  const phase = currentStep.kind;

  // Clear any pending timers
  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (typingRef.current) clearInterval(typingRef.current);
    timerRef.current = null;
    typingRef.current = null;
  }, []);

  // Step advancement
  useEffect(() => {
    if (isPaused) return;

    // Handle typing animation in a dedicated effect when we enter typing phase
    if (phase === 'typing') {
      setTypedText('');
      let i = 0;
      typingRef.current = setInterval(() => {
        i++;
        setTypedText(PROMPT.slice(0, i));
        if (i >= PROMPT.length && typingRef.current) {
          clearInterval(typingRef.current);
          typingRef.current = null;
        }
      }, TYPING_INTERVAL_MS);
    }

    if (phase === 'idle') {
      setTypedText('');
    }

    // Schedule advance to next step
    timerRef.current = setTimeout(() => {
      setStepIndex((prev) => (prev + 1) % STEPS.length);
    }, currentStep.duration);

    return () => {
      clearTimers();
    };
  }, [stepIndex, phase, currentStep.duration, isPaused, clearTimers]);

  // Pause when off-screen to save CPU
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPaused(!entry.isIntersecting);
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleRestart = () => {
    clearTimers();
    setStepIndex(0);
    setTypedText('');
  };

  const phaseLabel: Record<MockPhase, string> = {
    idle: 'Ready',
    typing: 'Typing prompt',
    ideate: '01 · Ideate',
    research: '02 · Research',
    plan: '03 · Plan',
    implement: '04 · Implement',
    validate: '05 · Validate',
    ship: '06 · Ship',
    complete: 'Complete',
  };

  return (
    <Section
      id="workflow-demo"
      eyebrow="Live demo · v3.2.0"
      title="Watch the workflow run."
      subtitle="A user types a prompt. Prism's six-phase workflow orchestrates the tools in real time while the interface reflects each step. Left: a Griot Hub mock UI. Right: the live phase graph. Nothing is hardcoded — the same state drives both panels."
      accent={EMBERS.neural}
    >
      <div className={s.demoContainer} ref={containerRef}>
        {/* ───── Status bar ───── */}
        <div className={s.statusBar}>
          <div className={s.statusGroup}>
            <div className={s.statusDot} data-phase={phase} />
            <div className={s.statusLabel}>{phaseLabel[phase]}</div>
          </div>

          <WorkflowNavBar phase={phase} />

          <button className={s.restartBtn} onClick={handleRestart}>
            ↻ Restart
          </button>
        </div>

        {/* ───── Split layout ───── */}
        <div className={s.splitLayout}>
          <div className={s.leftPane}>
            <div className={s.paneLabel}>
              <span className={s.paneDot} />
              Griot Hub · mock workspace
            </div>
            <div className={s.paneFrame}>
              <MockInterface phase={phase} typedText={typedText} prompt={PROMPT} />
            </div>
          </div>

          <div className={s.rightPane}>
            <div className={s.paneLabel}>
              <span className={`${s.paneDot} ${s.paneDotCyan}`} />
              Prism workflow · live tool calls
            </div>
            <div className={s.paneFrame}>
              <WorkflowGraph phase={phase} />
            </div>
          </div>
        </div>

        {/* ───── Footer ───── */}
        <div className={s.footer}>
          <div className={s.footerNote}>
            Both panels share one state machine. The mock interface shows what the
            user would see; the workflow graph shows what Prism is doing to make that
            happen. They stay in sync frame-by-frame.
          </div>
        </div>
      </div>
    </Section>
  );
}
