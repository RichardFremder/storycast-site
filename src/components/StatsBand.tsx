import { stats } from "@/lib/content";

export default function StatsBand() {
  return (
    <section className="border-y border-line bg-paper-dim/60">
      <div className="container-edit grid grid-cols-2 gap-x-8 gap-y-10 py-16 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-4xl text-ink md:text-5xl">
              {s.value}
            </p>
            <p className="mt-3 max-w-[20ch] text-[14px] leading-snug text-stone-70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
