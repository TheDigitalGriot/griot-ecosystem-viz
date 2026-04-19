import { TOOLS } from '../data/ecosystem';
import s from './GlyphOrbit.module.css';

/**
 * A concentric, rotating "record player" of Griot tool glyphs.
 * Three layers orbit at different radii, sizes, and directions.
 * Placed inside a perspective-tilted container, it creates a
 * "disc laid into the scene" effect.
 */

interface Ring {
  tools: typeof TOOLS;
  radius: number; // px — orbital radius from center
  glyphSize: number; // px — the rendered icon tile size
  duration: number; // seconds per full rotation
  direction: 'cw' | 'ccw';
  opacity: number;
  startAngle: number; // degrees — staggers the starting rotation
}

// Outer ring: every tool in the ecosystem (14 icons, largest radius)
const OUTER_TOOLS = TOOLS;

// Middle ring: one tool per pipeline stage representative
const MIDDLE_TOOLS = TOOLS.filter((t) =>
  ['delphi', 'kaleidoscope', 'synaptiq', 'prism', 'codebase-memory', 'valence', 'fragment'].includes(t.id),
);

// Inner ring: the "origin core" — the tools that define each stage's role
const INNER_TOOLS = TOOLS.filter((t) =>
  ['prism', 'synaptiq', 'valence', 'delphi', 'griotwave'].includes(t.id),
);

const RINGS: Ring[] = [
  {
    tools: OUTER_TOOLS,
    radius: 780,
    glyphSize: 96,
    duration: 120,
    direction: 'cw',
    opacity: 0.5,
    startAngle: 279,
  },
  {
    tools: MIDDLE_TOOLS,
    radius: 440,
    glyphSize: 128,
    duration: 90,
    direction: 'ccw',
    opacity: 0.7,
    startAngle: 305,
  },
  {
    tools: INNER_TOOLS,
    radius: 240,
    glyphSize: 156,
    duration: 60,
    direction: 'cw',
    opacity: 0.92,
    startAngle: 48,
  },
];

export default function GlyphOrbit() {
  return (
    <div className={s.stage}>
      {RINGS.map((ring, ringIndex) => (
        <div
          key={ringIndex}
          className={`${s.ring} ${ring.direction === 'cw' ? s.spinCw : s.spinCcw}`}
          style={
            {
              '--duration': `${ring.duration}s`,
              '--start': `${ring.startAngle}deg`,
              '--z': ringIndex,
              opacity: ring.opacity,
            } as React.CSSProperties
          }
        >
          {ring.tools.map((tool, i) => {
            const angle = (i / ring.tools.length) * 360;
            return (
              <div
                key={tool.id}
                className={s.glyphWrap}
                style={
                  {
                    '--angle': `${angle}deg`,
                    '--radius': `${ring.radius}px`,
                    '--size': `${ring.glyphSize}px`,
                    '--ember': tool.ember,
                  } as React.CSSProperties
                }
              >
                <div className={s.glyphTile}>
                  <div className={s.glyphGrid} />
                  <span className={s.glyphChar}>{tool.glyph}</span>
                  <div className={s.glyphCorner}>{tool.name[0]}</div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
