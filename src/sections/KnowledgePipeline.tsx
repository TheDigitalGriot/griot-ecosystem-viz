import Section from '../components/Section';
import { STAGES, TOOLS, EMBERS, type Stage } from '../data/ecosystem';
import s from './KnowledgePipeline.module.css';

const STAGE_ORDER: Stage[] = ['capture', 'store', 'structure', 'use', 'observe'];

export default function KnowledgePipeline() {
  return (
    <Section
      id="knowledge-pipeline"
      eyebrow="02 · Pipeline"
      title="The five-stage knowledge flow."
      subtitle="Capture → Store → Structure → Use → Observe. Each stage has a different cadence, a different read/write pattern, and a different retrieval strategy. Every production tool in the research converges on this shape."
      accent={EMBERS.bio}
    >
      <div className={s.pipeline}>
        {STAGE_ORDER.map((stageId, i) => {
          const stage = STAGES[stageId];
          const stageTools = TOOLS.filter((t) => t.stage === stageId);
          return (
            <div
              key={stageId}
              className={s.stage}
              style={{ '--stage-ember': stage.accent } as React.CSSProperties}
            >
              <div className={s.stageNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={s.stageHeader}>
                <div className={s.stageLabel}>{stage.label}</div>
                <p className={s.stageDesc}>{stage.desc}</p>
              </div>
              <div className={s.stageTools}>
                {stageTools.map((tool) => (
                  <div
                    key={tool.id}
                    className={s.toolChip}
                    style={{ '--ember': tool.ember } as React.CSSProperties}
                  >
                    <span className={s.toolGlyph}>{tool.glyph}</span>
                    <span className={s.toolName}>{tool.name}</span>
                  </div>
                ))}
              </div>
              {i < STAGE_ORDER.length - 1 && (
                <div className={s.connector}>
                  <div className={s.connectorLine} />
                  <div className={s.connectorArrow}>▸</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={s.invariantBox}>
        <div className={s.invariantEyebrow}>Feedback loop</div>
        <div className={s.invariantTitle}>Observe feeds Store.</div>
        <p className={s.invariantBody}>
          Valence's trace data flows back into the knowledge store as a signal — which wiki pages
          are hot, which are cold, which are missed, which are contradicted by actual agent
          behavior. This is the Karpathy "lint cycle" made programmatic.
        </p>
        <div className={s.invariantFlow}>
          Observe <span className={s.arrow}>◂</span> Use <span className={s.arrow}>◂</span>{' '}
          Structure <span className={s.arrow}>◂</span> Store{' '}
          <span className={s.arrow}>◂</span> Capture
        </div>
      </div>
    </Section>
  );
}
