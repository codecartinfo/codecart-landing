import type { Dictionary } from "@/lib/i18n";

export function HowWeWork({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="how-we-work"
      className="border-b border-border/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-md">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.howWeWork.title}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {dict.howWeWork.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dict.howWeWork.steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="mb-4 font-mono text-3xl font-bold text-muted-foreground/30 transition-colors group-hover:text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
