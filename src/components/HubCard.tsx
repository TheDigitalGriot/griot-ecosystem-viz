import { useRef, useEffect, useCallback } from 'react';
import s from './HubCard.module.css';

export interface HubCardProps {
  ember: string; // rgb values: "59, 130, 246"
  glyph: string; // single char or short symbol
  badge: string; // top-right badge text (e.g., stage name)
  hasUpdate?: boolean;
  name: string;
  desc: string;
  version: string;
  status: string;
  stack?: string;
  onClick?: () => void;
  selected?: boolean;
}

const REST_X_FRAC = 0.3;
const REST_Y_FRAC = 0.65;
const EASE = 0.08;

export default function HubCard({
  ember,
  glyph,
  badge,
  hasUpdate,
  name,
  desc,
  version,
  status,
  stack,
  onClick,
  selected,
}: HubCardProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    rafId: 0,
    active: false,
  });

  const tick = useCallback(() => {
    const st = state.current;
    st.currentX += (st.targetX - st.currentX) * EASE;
    st.currentY += (st.targetY - st.currentY) * EASE;

    const tx = `translate(${st.currentX}px, ${st.currentY}px)`;
    if (coreRef.current) coreRef.current.style.transform = tx;
    if (rippleRef.current) rippleRef.current.style.transform = tx;

    if (st.active) {
      st.rafId = requestAnimationFrame(tick);
    }
  }, []);

  const startLoop = useCallback(() => {
    const st = state.current;
    if (!st.active) {
      st.active = true;
      st.rafId = requestAnimationFrame(tick);
    }
  }, [tick]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const rect = body.getBoundingClientRect();
    const st = state.current;
    st.targetX = rect.width * REST_X_FRAC;
    st.targetY = rect.height * REST_Y_FRAC;
    st.currentX = st.targetX;
    st.currentY = st.targetY;
    const tx = `translate(${st.currentX}px, ${st.currentY}px)`;
    if (coreRef.current) coreRef.current.style.transform = tx;
    if (rippleRef.current) rippleRef.current.style.transform = tx;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const body = bodyRef.current;
      if (!body) return;
      const rect = body.getBoundingClientRect();
      state.current.targetX = e.clientX - rect.left;
      state.current.targetY = e.clientY - rect.top;
      startLoop();
    },
    [startLoop],
  );

  const handleMouseLeave = useCallback(() => {
    const body = bodyRef.current;
    if (!body) return;
    const rect = body.getBoundingClientRect();
    state.current.targetX = rect.width * REST_X_FRAC;
    state.current.targetY = rect.height * REST_Y_FRAC;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const body = bodyRef.current;
      const ripple = rippleRef.current;
      if (!body || !ripple) return;
      const rect = body.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.transform = `translate(${x}px, ${y}px)`;
      ripple.classList.remove(s.bloomRippleFiring);
      void ripple.offsetWidth;
      ripple.classList.add(s.bloomRippleFiring);

      onClick?.();
    },
    [onClick],
  );

  useEffect(() => {
    return () => {
      cancelAnimationFrame(state.current.rafId);
    };
  }, []);

  const classes = [s.hubCard];
  if (hasUpdate) classes.push(s.hasUpdate);
  if (selected) classes.push(s.selected);

  return (
    <div
      className={classes.join(' ')}
      style={{ '--ember': ember } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={s.thumb}>
        <div className={s.gridBg} />
        <div className={s.glyph}>{glyph}</div>
        <div className={s.badge}>{badge}</div>
      </div>
      <div className={s.body} ref={bodyRef}>
        <div className={s.bloom}>
          <div className={s.bloomCore} ref={coreRef} />
          <div className={s.bloomRipple} ref={rippleRef} />
        </div>
        <div className={s.name}>{name}</div>
        <div className={s.desc}>{desc}</div>
        {stack && <div className={s.stack}>{stack}</div>}
        <div className={s.cardFooter}>
          <span className={s.ver}>{version}</span>
          <span className={s.status}>{status}</span>
        </div>
      </div>
    </div>
  );
}
