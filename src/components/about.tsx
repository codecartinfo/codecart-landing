import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, User } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="border-b border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.about.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {dict.about.p1}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {dict.about.p2}
            </p>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">Kostiantyn Kostenko</p>
                <p className="text-sm text-muted-foreground">
                  {dict.about.founder}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">{dict.about.legal}</h3>
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.about.fullName}
                </dt>
                <dd className="mt-1 font-medium">Codecart Sp. z O.O.</dd>
              </div>
              <Separator className="bg-border/40" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    KRS
                  </dt>
                  <dd className="mt-1 font-mono text-sm">0001201924</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    NIP
                  </dt>
                  <dd className="mt-1 font-mono text-sm">5223351756</dd>
                </div>
              </div>
              <Separator className="bg-border/40" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Regon
                </dt>
                <dd className="mt-1 font-mono text-sm">543072648</dd>
              </div>
              <Separator className="bg-border/40" />
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {dict.about.address}
                  </dt>
                  <dd className="mt-1 text-sm">
                    ul. Drzeworytników 69A/2
                    <br />
                    01-341 Warszawa, Mazowieckie
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
