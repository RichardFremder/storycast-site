import Image from "next/image";

/**
 * Emplacement photo rectangulaire (ex. vues du studio). Sans `src`,
 * affiche un motif graphique de repli plutôt qu'un cadre vide.
 *
 * Pour poser une photo : déposez le fichier dans /public/images/ puis
 * passez son chemin en `src`, ex. src="/images/studio-1.jpg".
 */
export default function PhotoSlot({
  src,
  alt,
  caption,
}: {
  src?: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-paper-dim">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full opacity-25"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="400" y2="300" stroke="var(--brass)" strokeWidth="1" />
            <line x1="400" y1="0" x2="0" y2="300" stroke="var(--brass)" strokeWidth="1" />
            <circle cx="200" cy="150" r="70" fill="none" stroke="var(--brass)" strokeWidth="1" />
          </svg>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] text-stone-40">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
