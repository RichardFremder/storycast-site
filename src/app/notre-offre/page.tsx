import type { Metadata } from "next";
import Link from "next/link";
import { offerCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notre offre",
  description:
    "Assistance technique, émissions sur mesure, programmes réguliers : découvrez les prestations du studio Storycast pour vos podcasts et radios numériques.",
};

export default function OffrePage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-edit">
          <h1 className="max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            Nos prestations et programmes
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-stone-70">
            Notre studio parisien, dédié à la réalisation de vos
            enregistrements audio ou audio filmés, propose un équipement
            acoustique et vidéo de pointe pour enregistrer vos émissions
            jusqu&rsquo;à 4 voix face à notre animateur. Nous assurons le
            montage et la post-production pour vous livrer une émission
            prête à être diffusée sur toutes les plateformes.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="container-edit grid gap-x-10 gap-y-14 md:grid-cols-3">
          {offerCategories.map((cat) => (
            <div key={cat.title} className="flex flex-col">
              <h2 className="font-display text-2xl leading-snug text-ink">
                {cat.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-[13px] text-stone-70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-stone-70">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lieu d'Histoire */}
      <section className="border-t border-line bg-ink py-24 text-paper md:py-32">
        <div className="container-edit grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Lieu d&rsquo;Histoire
            </h2>
            <p className="mt-3 text-[15px] text-paper/60">
              Notre offre signature pour le mécénat culturel
            </p>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-paper/75">
            <p>
              Avec notre offre originale « Lieu d&rsquo;Histoire », nous
              aidons les entreprises à valoriser leurs actions de mécénat
              culturel et patrimonial en racontant, sous forme de podcasts,
              l&rsquo;histoire de lieux ou d&rsquo;œuvres — renforçant ainsi
              leur engagement auprès de leurs publics.
            </p>
            <p>
              Nous proposons également des services complémentaires tels que
              la co-animation, l&rsquo;invitation d&rsquo;experts et la
              gestion d&rsquo;entretiens, pour enrichir vos contenus.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edit">
          <h2 className="max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
            Animez vos réseaux avec votre propre émission audio ou audio
            filmée
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone-70">
            Le podcast est un puissant outil de communication pour informer,
            fédérer, valoriser et engager vos publics internes et externes.
            Storycast vous accompagne dans la conception et la production de
            programmes audio sur mesure, adaptés à vos objectifs et
            entièrement réalisés par nos équipes : rédaction, enregistrement,
            montage, sound design et diffusion.
          </p>
          <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-stone-40">
            Chiffres clés 2024 du podcast en France — étude complète
            disponible auprès de{" "}
            <a
              href="https://www.acpm.fr/Les-chiffres/Frequentation-Podcasts/Classements-Podcasts"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-line underline-offset-4 hover:decoration-brass"
            >
              l&rsquo;ACPM
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="container-edit flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
            Prêt à donner de la voix à vos idées ?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
