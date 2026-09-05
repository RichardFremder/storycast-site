import Image from "next/image";

/**
 * Médaillon de portrait, façon sceau/capsule de micro.
 *
 * Pour poser une vraie photo : déposez le fichier dans /public/images/
 * (ex. richard-fremder.jpg) puis passez son chemin dans la prop `src`,
 * par exemple src="/images/richard-fremder.jpg". Sans `src`, le
 * médaillon affiche un motif graphique de repli avec les initiales.
 */
export default function PortraitMedallion({
  src,
  alt,
  initials,
  tone = "dark",
}: {
  src?: string;
  alt: string;
  initials: string;
  tone?: "dark" | "light";
}) {
  const ring = tone === "dark" ? "border-paper/25" : "border-line";
  const bg = tone === "dark" ? "bg-ink-soft" : "bg-paper-dim";

  return (
    <div
      className={`relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full border ${ring} ${bg}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="280px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 280 280"
            className="absolute h-full w-full opacity-30"
            aria-hidden="true"
          >
            <circle
              cx="140"
              cy="140"
              r="110"
              fill="none"
              stroke="var(--brass)"
              strokeWidth="1"
            />
            <circle
              cx="140"
              cy="140"
              r="90"
              fill="none"
              stroke="var(--brass)"
              strokeWidth="1"
            />
          </svg>
          <span className="font-display text-4xl italic text-brass">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
