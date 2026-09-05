import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, un devis, une idée d'émission ? Contactez le studio Storycast à Paris.",
};

export default function ContactPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="container-edit grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Parlons de votre projet
          </h1>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-stone-70">
            <p>
              Une question ? Un devis ? Envie de passer prendre un café ? Un
              besoin de réalisation audio ou audio filmé ? Vous vous
              interrogez sur la mise en place de votre propre radio numérique
              pour communiquer en interne ou en externe ?
            </p>
            <p>
              Une idée d&rsquo;émission autour de votre nom, de vos marques,
              pour animer vos réseaux, renforcer vos événements ou
              communiquer auprès de vos prospects et de vos clients ? Vous
              cherchez des professionnels du podcast et un studio au
              cœur de Paris pour vous accompagner ?
            </p>
            <p className="font-display text-xl italic text-ink">
              Nous revenons vers vous rapidement.
            </p>
          </div>
        </div>

        <div className="border-t border-line pt-10 md:border-t-0 md:pt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
