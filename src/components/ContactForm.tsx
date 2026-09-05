"use client";

import { useState, type FormEvent } from "react";

// Remplacez cette valeur par l'URL de formulaire fournie par Formspree
// (https://formspree.io) une fois votre compte créé — voir le README
// pour la marche à suivre pas à pas, sans ligne de commande.
const FORM_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t-2 border-brass pt-6">
        <p className="font-display text-2xl text-ink">Merci à vous !</p>
        <p className="mt-2 text-[15px] text-stone-70">
          Votre message est bien arrivé, nous revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Entreprise" name="company" />
      <div>
        <label
          htmlFor="message"
          className="text-[13px] font-medium text-stone-40"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border-b border-line bg-transparent py-2 text-[16px] text-ink outline-none transition-colors focus:border-brass"
        />
      </div>

      <div className="flex items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer"}
        </button>
        {status === "error" && (
          <p className="text-[14px] text-signal">
            Une erreur est survenue — écrivez-nous directement à{" "}
            <a href="mailto:contact@thestorycast.fr" className="underline">
              contact@thestorycast.fr
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[13px] font-medium text-stone-40"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-line bg-transparent py-2 text-[16px] text-ink outline-none transition-colors focus:border-brass"
      />
    </div>
  );
}
