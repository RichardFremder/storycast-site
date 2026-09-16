import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container-edit max-w-2xl">
        <h1 className="font-display text-4xl leading-tight text-ink">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-stone-70">
          <div>
            <h2 className="font-display text-xl text-ink">Éditeur du site</h2>
            <p className="mt-3">
              Storycast — SAS
              <br />
              Siège social : 10, rue Gros — 75016 Paris
              <br />
              SIRET : 883 545 212 00010
              <br />
              RCS : Paris
              <br />
              Directeur de la publication : Richard Fremder
              <br />
              Contact : richard.fremder@storycast.fr
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Hébergement</h2>
            <p className="mt-3">
              Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&rsquo;ensemble des contenus présents sur ce site (textes,
              images, émissions, logos) est la propriété de Storycast ou de
              ses partenaires, sauf mention contraire, et ne peut être
              reproduit sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">
              Données personnelles
            </h2>
            <p className="mt-3">
              Les informations recueillies via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande, sur la base
              de l&rsquo;intérêt légitime de Storycast à échanger avec ses
              prospects et partenaires professionnels. Conformément au RGPD,
              vous disposez d&rsquo;un droit d&rsquo;accès, de rectification
              et de suppression de vos données en écrivant à
              richard.fremder@storycast.fr.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
