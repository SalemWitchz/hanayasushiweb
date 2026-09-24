export function SakuraBranch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <circle cx="90" cy="60" r="10" />
        <circle cx="120" cy="40" r="7" />
        <circle cx="150" cy="70" r="9" />
        <circle cx="60" cy="95" r="6" />
        <circle cx="180" cy="45" r="5" />
        <circle cx="130" cy="100" r="6" />
        <circle cx="200" cy="90" r="8" />
      </g>
      <path
        d="M20 200 C 90 150, 160 130, 230 60"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function SakuraPetals({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <circle cx="20" cy="20" r="7" />
        <circle cx="42" cy="10" r="5" />
        <circle cx="60" cy="30" r="6" />
        <circle cx="90" cy="55" r="8" />
        <circle cx="115" cy="35" r="5" />
        <circle cx="135" cy="65" r="6" />
        <circle cx="10" cy="55" r="4" />
      </g>
    </svg>
  );
}
