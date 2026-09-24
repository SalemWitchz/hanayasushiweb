import { useId } from "react";

export function WaveTexture({ className }: { className?: string }) {
  const rawId = useId().replace(/:/g, "");
  const patternId = `hanaya-waves-${rawId}`;

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern id={patternId} width="46" height="23" patternUnits="userSpaceOnUse">
          <path d="M0 23c5.75-11.5 17.25-11.5 23 0s17.25 11.5 23 0" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 16c5.75-8 17.25-8 23 0s17.25 8 23 0" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 9c5.75-4.5 17.25-4.5 23 0s17.25 4.5 23 0" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
