import { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import s from './WorkflowGraph.module.css';
import type { MockPhase } from './MockInterface';

/* ───── Node data model ───── */

type PhaseNodeData = {
  n: string;
  name: string;
  glyph: string;
  ember: string;
  skills: string[];
  zone: 'start' | 'divergent' | 'core' | 'shipping' | 'end';
  state: 'pending' | 'active' | 'complete';
};

type StartNodeData = {
  label: string;
  state: 'pending' | 'active' | 'complete';
};

/* ───── Phase configuration ───── */

const PHASES: Array<{
  id: string;
  n: string;
  name: string;
  glyph: string;
  ember: string;
  zone: PhaseNodeData['zone'];
  skills: string[];
  matchPhase: MockPhase;
}> = [
  {
    id: 'ideate',
    n: '01',
    name: 'Ideate',
    glyph: '◌',
    ember: '249, 115, 22',
    zone: 'divergent',
    skills: ['brainstorm', 'design'],
    matchPhase: 'ideate',
  },
  {
    id: 'research',
    n: '02',
    name: 'Research',
    glyph: '◐',
    ember: '59, 130, 246',
    zone: 'core',
    skills: ['research', 'debug'],
    matchPhase: 'research',
  },
  {
    id: 'plan',
    n: '03',
    name: 'Plan',
    glyph: '◑',
    ember: '59, 130, 246',
    zone: 'core',
    skills: ['plan', 'iterate'],
    matchPhase: 'plan',
  },
  {
    id: 'implement',
    n: '04',
    name: 'Implement',
    glyph: '◒',
    ember: '59, 130, 246',
    zone: 'core',
    skills: ['implement', 'subagent'],
    matchPhase: 'implement',
  },
  {
    id: 'validate',
    n: '05',
    name: 'Validate',
    glyph: '◓',
    ember: '59, 130, 246',
    zone: 'core',
    skills: ['validate', 'verify'],
    matchPhase: 'validate',
  },
  {
    id: 'ship',
    n: '06',
    name: 'Ship',
    glyph: '●',
    ember: '16, 185, 133',
    zone: 'shipping',
    skills: ['finish', 'bookend'],
    matchPhase: 'ship',
  },
];

/* ───── Helpers to derive state from the demo phase ───── */

const PHASE_ORDER: MockPhase[] = [
  'idle',
  'typing',
  'ideate',
  'research',
  'plan',
  'implement',
  'validate',
  'ship',
  'complete',
];

function stateForPhase(
  current: MockPhase,
  target: MockPhase,
): 'pending' | 'active' | 'complete' {
  const ci = PHASE_ORDER.indexOf(current);
  const ti = PHASE_ORDER.indexOf(target);
  if (current === 'complete') return 'complete';
  if (ci < ti) return 'pending';
  if (ci === ti) return 'active';
  return 'complete';
}

/* ───── Custom node components ───── */

function StartNode({ data }: NodeProps<Node<StartNodeData>>) {
  return (
    <div className={`${s.startNode} ${s[`state-${data.state}`]}`}>
      <Handle type="source" position={Position.Right} className={s.handle} />
      <div className={s.startGlyph}>◆</div>
      <div className={s.startLabel}>{data.label}</div>
    </div>
  );
}

function PhaseNode({ data }: NodeProps<Node<PhaseNodeData>>) {
  return (
    <div
      className={`${s.phaseNode} ${s[`zone-${data.zone}`]} ${
        s[`state-${data.state}`]
      }`}
      style={{ '--ember': data.ember } as React.CSSProperties}
    >
      <Handle type="target" position={Position.Left} className={s.handle} />
      <Handle type="source" position={Position.Right} className={s.handle} />
      <div className={s.phaseHeader}>
        <div className={s.phaseNumber}>{data.n}</div>
        <div className={s.phaseGlyph}>{data.glyph}</div>
      </div>
      <div className={s.phaseName}>{data.name}</div>
      <div className={s.phaseSkills}>
        {data.skills.map((skill) => (
          <span key={skill} className={s.skillChip}>
            {skill}
          </span>
        ))}
      </div>
      {data.state === 'active' && (
        <div className={s.pulseRing} />
      )}
    </div>
  );
}

function EndNode({ data }: NodeProps<Node<StartNodeData>>) {
  return (
    <div className={`${s.endNode} ${s[`state-${data.state}`]}`}>
      <Handle type="target" position={Position.Left} className={s.handle} />
      <div className={s.endGlyph}>●</div>
      <div className={s.endLabel}>{data.label}</div>
    </div>
  );
}

const NODE_TYPES = {
  start: StartNode,
  phase: PhaseNode,
  end: EndNode,
};

/* ───── Graph component ───── */

interface WorkflowGraphProps {
  phase: MockPhase;
}

export default function WorkflowGraph({ phase }: WorkflowGraphProps) {
  const { nodes, edges } = useMemo(() => {
    const baseX = 20;
    const y = 160;
    const phaseW = 180;
    const gap = 20;

    const startState: 'pending' | 'active' | 'complete' =
      phase === 'idle' || phase === 'typing'
        ? phase === 'typing'
          ? 'active'
          : 'pending'
        : 'complete';

    const endState: 'pending' | 'active' | 'complete' =
      phase === 'complete' ? 'complete' : 'pending';

    const nodes: Node[] = [
      {
        id: 'start',
        type: 'start',
        position: { x: baseX, y },
        data: { label: 'User prompt', state: startState },
        draggable: false,
        selectable: false,
      },
      ...PHASES.map((ph, i) => ({
        id: ph.id,
        type: 'phase' as const,
        position: { x: baseX + 180 + gap + i * (phaseW + gap), y },
        data: {
          n: ph.n,
          name: ph.name,
          glyph: ph.glyph,
          ember: ph.ember,
          skills: ph.skills,
          zone: ph.zone,
          state: stateForPhase(phase, ph.matchPhase),
        },
        draggable: false,
        selectable: false,
      })),
      {
        id: 'end',
        type: 'end',
        position: {
          x: baseX + 180 + gap + PHASES.length * (phaseW + gap),
          y,
        },
        data: { label: 'Shipped', state: endState },
        draggable: false,
        selectable: false,
      },
    ];

    // Edges
    const ids = ['start', ...PHASES.map((p) => p.id), 'end'];
    const edges: Edge[] = [];
    for (let i = 0; i < ids.length - 1; i++) {
      const source = ids[i];
      const target = ids[i + 1];

      // Determine edge state based on phase progression
      let active = false;
      let complete = false;

      if (source === 'start') {
        active = phase === 'typing';
        complete = PHASE_ORDER.indexOf(phase) >= PHASE_ORDER.indexOf('ideate');
      } else if (target === 'end') {
        active = phase === 'ship';
        complete = phase === 'complete';
      } else {
        // Phase-to-phase edge: active when the target is the current phase
        const targetIdx = PHASE_ORDER.indexOf(target as MockPhase);
        const currentIdx = PHASE_ORDER.indexOf(phase);
        active = currentIdx === targetIdx;
        complete = currentIdx > targetIdx;
      }

      edges.push({
        id: `${source}-${target}`,
        source,
        target,
        type: 'smoothstep',
        animated: active,
        style: {
          stroke: complete
            ? 'rgba(16, 185, 133, 0.7)'
            : active
              ? 'rgba(34, 211, 238, 0.95)'
              : 'rgba(255, 255, 255, 0.15)',
          strokeWidth: active || complete ? 2 : 1,
        },
      });
    }

    return { nodes, edges };
  }, [phase]);

  return (
    <div className={s.graphWrap}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12, includeHiddenNodes: false }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        minZoom={0.3}
        maxZoom={1.4}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={18}
          size={1}
          color="rgba(255, 255, 255, 0.06)"
        />
      </ReactFlow>
    </div>
  );
}
