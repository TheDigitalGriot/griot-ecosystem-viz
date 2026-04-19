import s from './Ambient.module.css';

interface AmbientProps {
  embers?: [string, string, string];
}

export default function Ambient({ embers }: AmbientProps) {
  const style = embers
    ? ({
        '--ember-a': embers[0],
        '--ember-b': embers[1],
        '--ember-c': embers[2],
      } as React.CSSProperties)
    : undefined;

  return (
    <div className={s.root} style={style}>
      <div className={`${s.ambient} ${s.a}`} />
      <div className={`${s.ambient} ${s.b}`} />
      <div className={`${s.ambient} ${s.c}`} />
    </div>
  );
}
