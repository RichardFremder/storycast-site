import { shows } from "@/lib/content";

export default function ShowRail() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-edit">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Des émissions écoutées, de la France aux quatre coins du monde
          </h2>
          <p className="max-w-sm text-[15px] text-stone-70">
            Grand public ou BtoB, chaque programme est écrit, enregistré et
            diffusé par nos équipes.
          </p>
        </div>
      </div>

      <div className="mt-12 flex gap-5 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="shrink-0 md:w-[calc((100vw-1180px)/2-1.5rem)]" />
        {shows.map((show) => (
          <a
            key={show.title}
            href={show.href}
            target="_blank"
            rel="noreferrer"
            className="group flex w-[280px] shrink-0 flex-col justify-between border-t-2 border-ink pt-5 pb-2 transition-colors hover:border-brass sm:w-[320px]"
          >
            <div>
              <span className="font-mono text-[12px] text-brass">
                {show.tag}
              </span>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                {show.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-stone-70">
                {show.description}
              </p>
            </div>
            <span className="mt-6 text-[14px] font-medium text-ink underline decoration-line underline-offset-4 group-hover:decoration-brass">
              Écouter l&rsquo;émission
            </span>
          </a>
        ))}
        <div className="shrink-0 w-6" />
      </div>
    </section>
  );
}
