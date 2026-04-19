import { useCallback } from 'react';
import Ambient from './components/Ambient';
import Hero from './sections/Hero';
import PrismOrigin from './sections/PrismOrigin';
import WorkflowDemo from './sections/WorkflowDemo';
import EcosystemMap from './sections/EcosystemMap';
import KnowledgePipeline from './sections/KnowledgePipeline';
import ValenceBoundary from './sections/ValenceBoundary';
import Convergence from './sections/Convergence';
import styles from './App.module.css';

export default function App() {
  const handleNav = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className={styles.app}>
      <Ambient />
      <Hero onNav={handleNav} />
      <PrismOrigin />
      <WorkflowDemo />
      <EcosystemMap />
      <KnowledgePipeline />
      <ValenceBoundary />
      <Convergence />

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLine}>
            <span className={styles.footerMark}>◆</span>
            <span className={styles.footerBrand}>Griot Creative Ecosystem</span>
          </div>
          <div className={styles.footerMeta}>
            Companion to{' '}
            <code>
              .prism/shared/research/2026-04-11-griot-ecosystem-knowledge-architecture.md
            </code>
          </div>
          <div className={styles.footerDate}>2026-04-11 · Built on griotwave v0.3</div>
        </div>
      </footer>
    </div>
  );
}
