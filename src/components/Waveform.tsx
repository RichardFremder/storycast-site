"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Forme d'onde audio animée — le seul motif décoratif du site, utilisé
 * uniquement dans le hero, en écho direct au métier de Storycast (studio
 * d'enregistrement audio).
 */
export default function Waveform({ bars = 64 }: { bars?: number }) {
  const heights = useMemo(
    () =>
      Array.from({ length: bars }, (_, i) => {
        // Motif pseudo-aléatoire mais déterministe pour éviter les
        // mismatches d'hydratation serveur/client.
        const seed = Math.sin(i * 12.9898) * 43758.5453;
        return 0.15 + Math.abs(seed - Math.floor(seed)) * 0.85;
      }),
    [bars]
  );

  return (
    <div
      className="flex h-full w-full items-center gap-[3px]"
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="w-full rounded-full bg-brass/70"
          style={{ minWidth: 2 }}
          initial={{ height: `${h * 30}%` }}
          animate={{
            height: [`${h * 30}%`, `${h * 100}%`, `${h * 40}%`],
          }}
          transition={{
            duration: 2.2 + (i % 7) * 0.15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: (i % 12) * 0.06,
          }}
        />
      ))}
    </div>
  );
}
