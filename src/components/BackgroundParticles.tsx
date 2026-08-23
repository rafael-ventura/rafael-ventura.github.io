/** Subtle animated line-particle backdrop, fixed behind all content. */
export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-primary" aria-hidden="true">
      <svg viewBox="0 0 1820 1080" className="h-full w-full animate-particle-drift" preserveAspectRatio="xMidYMid slice">
        <g stroke="#06a1c4" strokeWidth="2" opacity="0.15">
          <line x1="225.8" y1="1151" x2="534.9" y2="841.9" />
          <line x1="827.1" y1="1003.3" x2="518" y2="1312.3" />
          <line x1="661.9" y1="714.9" x2="971" y2="405.9" />
          <line x1="1163.3" y1="1166.7" x2="854.3" y2="1475.7" />
          <line x1="1391.5" y1="1116.2" x2="1082.5" y2="1425.2" />
          <line x1="1579.3" y1="837.5" x2="1270.3" y2="1146.5" />
          <line x1="1699.9" y1="471.7" x2="1390.9" y2="780.7" />
        </g>
        <g stroke="#ce1b5f" strokeWidth="2" opacity="0.15">
          <line x1="794.4" y1="883.4" x2="639.8" y2="1037.9" />
          <line x1="694.6" y1="834.8" x2="849.2" y2="680.3" />
          <line x1="1230.4" y1="447.3" x2="1075.9" y2="601.8" />
          <line x1="1458.6" y1="1060.8" x2="1304.1" y2="1215.3" />
          <line x1="1647.4" y1="1010.3" x2="1502.9" y2="1154.8" />
          <line x1="1785.1" y1="731.6" x2="1640.6" y2="876.1" />
        </g>
        <g stroke="#c48206" strokeWidth="2" opacity="0.1">
          <line x1="630.8" y1="894.3" x2="476.3" y2="1048.8" />
          <line x1="858.2" y1="823.9" x2="1012.7" y2="669.4" />
          <line x1="1066.9" y1="458.2" x2="912.4" y2="612.7" />
          <line x1="1344.6" y1="1061.8" x2="1190.1" y2="1216.3" />
          <line x1="1533.4" y1="1011.3" x2="1388.9" y2="1155.8" />
          <line x1="1671.1" y1="732.6" x2="1526.6" y2="877.1" />
          <line x1="1791.8" y1="366.8" x2="1647.3" y2="511.3" />
        </g>
      </svg>
    </div>
  );
}
