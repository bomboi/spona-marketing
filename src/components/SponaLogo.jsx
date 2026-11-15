const ELLIPSE = { rx: 34.3, ry: 43.4, strokeWidth: 12.4 }
const CUT_WIDTH = 22.4

function Ring({ centerX, stroke, strokeWidth = ELLIPSE.strokeWidth }) {
  return (
    <ellipse
      cx={centerX}
      cy="50.3"
      rx={ELLIPSE.rx}
      ry={ELLIPSE.ry}
      transform={`rotate(45 ${centerX} 50.3)`}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  )
}

export default function SponaLogo({ className }) {
  return (
    <svg className={className} viewBox="-10 -10 170 120" aria-hidden="true">
      <defs>
        <clipPath id="logo-upper-crossing"><circle cx="81.96" cy="19.1" r="18" /></clipPath>
        <clipPath id="logo-lower-crossing"><circle cx="67.54" cy="81.51" r="18" /></clipPath>
      </defs>
      <Ring centerX={97.7} stroke="var(--spona-color-secondary)" />
      <g clipPath="url(#logo-upper-crossing)">
        <Ring centerX={51.8} stroke="var(--spona-surface-page)" strokeWidth={CUT_WIDTH} />
      </g>
      <Ring centerX={51.8} stroke="var(--spona-color-primary)" />
      <g clipPath="url(#logo-lower-crossing)">
        <Ring centerX={97.7} stroke="var(--spona-surface-page)" strokeWidth={CUT_WIDTH} />
        <Ring centerX={97.7} stroke="var(--spona-color-secondary)" />
      </g>
    </svg>
  )
}
