import type { ReactNode } from 'react';
import s from './Section.module.css';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: string; // rgb string e.g. "59, 130, 246"
  children?: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  accent,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={s.section}
      style={accent ? ({ '--accent': accent } as React.CSSProperties) : undefined}
    >
      <div className={s.header}>
        {eyebrow && <div className={s.eyebrow}>{eyebrow}</div>}
        <h2 className={s.title}>{title}</h2>
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      </div>
      {children && <div className={s.body}>{children}</div>}
    </section>
  );
}
