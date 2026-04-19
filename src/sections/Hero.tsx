import GlyphOrbit from '../components/GlyphOrbit';
import s from './Hero.module.css';

interface HeroProps {
  onNav: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'prism-origin', label: 'The Seed' },
  { id: 'workflow-demo', label: 'Live Demo' },
  { id: 'ecosystem-map', label: 'Ecosystem Map' },
  { id: 'knowledge-pipeline', label: 'Pipeline' },
  { id: 'valence-boundary', label: 'Valence ↔ Kaleidoscope' },
  { id: 'convergence', label: 'Convergence' },
];

export default function Hero({ onNav }: HeroProps) {
  return (
    <section className={s.hero}>
      {/* Rotating orbit background — three concentric rings of Griot glyphs */}
      <div className={s.orbitLayer}>
        <GlyphOrbit />
      </div>

      {/* Gradient veil — fades the orbit into the content */}
      <div className={s.veil} />

      {/* Foreground */}
      <div className={s.foreground}>
        <div className={s.topbar}>
          <div className={s.brand}>
            <div className={s.brandMark}>◆</div>
            <div className={s.brandName}>Griot Creative Ecosystem</div>
          </div>
          <nav className={s.nav}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={s.navItem}
                onClick={() => onNav(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className={s.content}>
          <div className={s.centerMark}>◆</div>

          <div className={s.eyebrow}>
            2026-04-11 · Knowledge Architecture Research
          </div>

          <h1 className={s.title}>
            <span className={s.titleLine1}>An agent-native</span>
            <span className={s.titleLine2}>knowledge infrastructure.</span>
          </h1>

          <p className={s.lede}>
            Fourteen tools, five stages, one invariant — agents are first-class participants
            in a layered, selective-retrieval, graph-aware knowledge system. A visual reading
            of how Delphi, Sonar, Synaptiq, Prism, Valence, Fragment, Lucid, Griotwave, Brand
            Ecosystem Hub, and the rest compose into a single information architecture.
          </p>

          <div className={s.stats}>
            <div className={s.stat}>
              <div className={s.statValue}>14</div>
              <div className={s.statLabel}>Ecosystem tools</div>
            </div>
            <div className={s.stat}>
              <div className={s.statValue}>5</div>
              <div className={s.statLabel}>Pipeline stages</div>
            </div>
            <div className={s.stat}>
              <div className={s.statValue}>6</div>
              <div className={s.statLabel}>Research streams</div>
            </div>
            <div className={s.stat}>
              <div className={s.statValue}>5</div>
              <div className={s.statLabel}>Shared invariants</div>
            </div>
          </div>

          <div className={s.ctas}>
            <button className={s.ctaPrimary} onClick={() => onNav('prism-origin')}>
              Start with the seed →
            </button>
            <button className={s.ctaSecondary} onClick={() => onNav('ecosystem-map')}>
              Explore the map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
