import { useState, useMemo } from 'react';
import Section from '../components/Section';
import HubCard from '../components/HubCard';
import { TOOLS, STAGES, EMBERS, type Stage } from '../data/ecosystem';
import s from './EcosystemMap.module.css';

type Filter = 'all' | Stage;

const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: 'all', label: 'All tools' },
  { id: 'capture', label: 'Capture' },
  { id: 'store', label: 'Store' },
  { id: 'structure', label: 'Structure' },
  { id: 'use', label: 'Use' },
  { id: 'observe', label: 'Observe' },
  { id: 'support', label: 'Support' },
];

export default function EcosystemMap() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (filter === 'all') return TOOLS;
    return TOOLS.filter((t) => t.stage === filter);
  }, [filter]);

  const selectedTool = useMemo(() => TOOLS.find((t) => t.id === selected) ?? null, [selected]);

  return (
    <Section
      id="ecosystem-map"
      eyebrow="01 · Map"
      title="Thirteen tools, five stages."
      subtitle="Every tool in the Griot ecosystem occupies a discrete role in the knowledge pipeline. Click a card to see its details. Filter by stage to see role coverage."
      accent={EMBERS.neural}
    >
      <div className={s.filters}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`${s.filter} ${filter === f.id ? s.filterActive : ''}`}
            onClick={() => setFilter(f.id)}
            style={
              f.id !== 'all' && filter === f.id
                ? ({ '--filter-ember': STAGES[f.id as Stage].accent } as React.CSSProperties)
                : undefined
            }
          >
            {f.label}
            {f.id !== 'all' && (
              <span className={s.filterCount}>
                {TOOLS.filter((t) => t.stage === f.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className={s.grid}>
        {visible.map((tool) => (
          <HubCard
            key={tool.id}
            ember={tool.ember}
            glyph={tool.glyph}
            badge={tool.stageLabel}
            hasUpdate={tool.status === 'mature' || tool.status === 'active'}
            name={tool.name}
            desc={tool.desc}
            stack={tool.stack}
            version={tool.version}
            status={tool.status}
            selected={selected === tool.id}
            onClick={() => setSelected(selected === tool.id ? null : tool.id)}
          />
        ))}
      </div>

      {selectedTool && (
        <div
          className={s.detailPanel}
          style={{ '--ember': selectedTool.ember } as React.CSSProperties}
        >
          <div className={s.detailHeader}>
            <div className={s.detailGlyph}>{selectedTool.glyph}</div>
            <div className={s.detailMeta}>
              <div className={s.detailStage}>
                {selectedTool.stageLabel} · {selectedTool.emberName}
              </div>
              <div className={s.detailName}>{selectedTool.name}</div>
            </div>
            <button className={s.closeBtn} onClick={() => setSelected(null)}>
              ×
            </button>
          </div>
          <p className={s.detailDesc}>{selectedTool.longDesc}</p>
          <div className={s.detailFooter}>
            <span className={s.detailLabel}>Location</span>
            <code className={s.detailLocation}>{selectedTool.location}</code>
          </div>
        </div>
      )}
    </Section>
  );
}
