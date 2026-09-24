export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,72 480,0 720,24 C960,48 1200,16 1440,40 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );
}
