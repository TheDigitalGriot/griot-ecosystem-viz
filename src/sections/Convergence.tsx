import Section from '../components/Section';
import { RESEARCH_STREAMS, INVARIANTS, EMBERS } from '../data/ecosystem';
import s from './Convergence.module.css';

export default function Convergence() {
  return (
    <Section
      id="convergence"
      eyebrow="04 · Convergence"
      title="Six streams, one thesis."
      subtitle="Across six independent research streams — Karpathy's LLM wiki pattern, the code-intelligence videos, HASH.ai's refractive design, Synaptiq, Atomic, and the Prism code-intel spec — a single thesis repeats. Each stream approaches it from a different angle. The underlying shape is identical."
      accent={EMBERS.anomaly}
    >
      <div className={s.streamsHeader}>
        <div className={s.streamsEyebrow}>Research Streams</div>
        <h3 className={s.streamsTitle}>Six angles of approach.</h3>
      </div>

      <div className={s.streams}>
        {RESEARCH_STREAMS.map((stream, i) => (
          <div
            key={stream.id}
            className={s.stream}
            style={{ '--ember': stream.ember } as React.CSSProperties}
          >
            <div className={s.streamNumber}>
              S<span>{i + 1}</span>
            </div>
            <div className={s.streamContent}>
              <div className={s.streamLabel}>{stream.label}</div>
              <p className={s.streamSummary}>{stream.summary}</p>
              <code className={s.streamSource}>{stream.source}</code>
            </div>
          </div>
        ))}
      </div>

      <div className={s.convergeBanner}>
        <div className={s.convergeArrows}>
          {RESEARCH_STREAMS.map((stream, i) => (
            <div
              key={stream.id}
              className={s.convergeArrow}
              style={
                {
                  '--ember': stream.ember,
                  '--delay': `${i * 0.15}s`,
                } as React.CSSProperties
              }
            >
              ▾
            </div>
          ))}
        </div>
        <div className={s.convergeCenter}>
          <div className={s.convergeLabel}>all converge on</div>
          <div className={s.convergeTitle}>
            agent-native, layered,
            <br />
            <span className={s.convergeAccent}>selective-retrieval knowledge</span>
          </div>
        </div>
      </div>

      <div className={s.invariantsHeader}>
        <div className={s.invariantsEyebrow}>The Five Invariants</div>
        <h3 className={s.invariantsTitle}>What every stream agrees on.</h3>
      </div>

      <div className={s.invariants}>
        {INVARIANTS.map((inv) => (
          <div key={inv.n} className={s.invariant}>
            <div className={s.invariantNum}>{String(inv.n).padStart(2, '0')}</div>
            <div className={s.invariantContent}>
              <div className={s.invariantTitleInner}>{inv.title}</div>
              <p className={s.invariantBody}>{inv.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={s.refractionNote}>
        <div className={s.refractionEyebrow}>A note on the visual metaphor</div>
        <div className={s.refractionTitle}>Glass is not decoration — it is the diagram.</div>
        <p className={s.refractionBody}>
          Griotwave's refraction/bloom/beacon visual language <em>literally</em> encodes the
          information architecture. Glass surfaces exist so you can see <em>through</em> layers —
          because the knowledge <em>is</em> layered. Ambient embers are the other tools'
          outputs you depend on. The bloom stack (three concentric shadows) maps to immediate
          dependency, transitive impact, and environmental resonance. The beacon channel is
          reserved for broadcast tools (Delphi, Sonar) — the only products that reach outward
          to capture.
        </p>
        <p className={s.refractionBody}>
          This is what HASH.ai means by <em>"design is epistemology, not aesthetics."</em>{' '}
          The griotwave design system is the information architecture of the ecosystem rendered as
          pixels. This visualization is built on it because the metaphor is the point.
        </p>
      </div>
    </Section>
  );
}
