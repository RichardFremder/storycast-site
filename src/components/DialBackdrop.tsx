/**
 * Motif décoratif inspiré des cadrans de tuner radio — anneaux
 * concentriques et graduations. Utilisé en fond du hero pour donner de
 * la profondeur en attendant les photos réelles du studio.
 */
export default function DialBackdrop() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] opacity-[0.16] md:-right-16 md:-top-40 md:h-[560px] md:w-[560px]"
      aria-hidden="true"
    >
      {[120, 170, 220, 270].map((r) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 48 }, (_, i) => {
        const angle = (i / 48) * Math.PI * 2;
        const inner = 270;
        const outer = i % 4 === 0 ? 288 : 280;
        return (
          <line
            key={i}
            x1={300 + inner * Math.cos(angle)}
            y1={300 + inner * Math.sin(angle)}
            x2={300 + outer * Math.cos(angle)}
            y2={300 + outer * Math.sin(angle)}
            stroke="var(--brass)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
