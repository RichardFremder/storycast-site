import Link from "next/link";
import Waveform from "@/components/Waveform";
import StatsBand from "@/components/StatsBand";
import ShowRail from "@/components/ShowRail";
import { founder } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-edit pt-20 pb-16 md:pt-32 md:pb-24">
          <h1 className="max-w-4xl font-display text-[2.5rem] leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Chez Storycast,
            <br /> l&rsquo;audio, c&rsquo;est du sérieux…
            <br /> mais jamais ennuyeux !
          </h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-stone-70 md:text-lg">
            Studio de production audio basé à Paris. Nous concevons,
            enregistrons et diffusons des podcasts, des radios numériques et
            des émissions audio filmées pour les entreprises, ainsi que des
            émissions pour les passionnés d&rsquo;Histoire, de Culture et de
            Patrimoine.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/notre-offre"
              className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Découvrir notre offre
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:border-ink"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="h-28 w-full md:h-36" aria-hidden="true">
          <Waveform bars={96} />
        </div>
      </section>

      <StatsBand />

      {/* Positionnement */}
      <section className="py-24 md:py-32">
        <div className="container-edit grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Un studio parisien, une équipe pluridisciplinaire
          </h2>
          <div className="space-y-6 text-[16px] leading-relaxed text-stone-70">
            <p>
              Basé à Paris, notre studio d&rsquo;enregistrement et de
              production est spécialisé dans les créations audio pour les
              marques et les entreprises : conception de podcasts (audio ou
              filmés), mise en place de radios numériques, organisation
              d&rsquo;interviews, débats et conférences. Chaque format est
              pensé, écrit et réalisé pour vos auditeurs et votre cible, avec
              exigence et créativité.
            </p>
            <p>
              Notre équipe s&rsquo;appuie sur une solide expérience acquise en
              agence, en communication interne et externe — dans le privé
              comme dans le public — et en production audiovisuelle. Nous
              intervenons dans de nombreux secteurs : Santé, Silver économie,
              Banque-Assurance, Monde mutualiste, Édition, Nouvelles
              technologies.
            </p>
            <p className="font-display text-xl italic text-ink">
              Ensemble, révélons votre Histoire.
            </p>
          </div>
        </div>
      </section>

      <div className="rule container-edit" />

      <ShowRail />

      {/* Fondateur */}
      <section className="border-t border-line bg-ink py-24 text-paper md:py-32">
        <div className="container-edit grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-3 text-[15px] text-paper/60">{founder.role}</p>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-paper/75">
            <p>{founder.bio}</p>
            <p>
              Depuis 2021, nos podcasts ont été écoutés plus de 10 millions de
              fois. L&rsquo;émission vedette « Timeline, 5 000 ans
              d&rsquo;Histoire » a atteint 350 000 écoutes en juin 2025 et
              confirme sa place de 1ᵉʳ podcast natif d&rsquo;Histoire en
              France — 23ᵉ podcast le plus écouté du pays, tous formats
              confondus, selon l&rsquo;ACPM.
            </p>
            <p>
              Ses fidèles auditeurs sont situés en France et dans le monde,
              dans 86 pays au total : urbains, CSP++, très consommateurs de
              contenus culturels exigeants.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32">
        <div className="container-edit flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
            Une idée d&rsquo;émission pour votre marque ?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            Parlons-en
          </Link>
        </div>
      </section>
    </>
  );
}
