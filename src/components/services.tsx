import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Globe,
  Server,
  Database,
  Cloud,
  Settings,
  ShoppingCart,
  LayoutDashboard,
  Headset,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

const iconMap: LucideIcon[][] = [
  [Globe, ShoppingCart, Code2, LayoutDashboard],
  [Settings, Database, Cloud],
  [Server, Headset],
];

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="border-b border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-md">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {dict.services.description}
          </p>
        </div>

        <div className="space-y-16">
          {dict.services.groups.map((group, gi) => (
            <div key={group.title}>
              <div className="mb-6 flex items-center gap-3">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <Badge variant="secondary" className="font-mono text-xs">
                  {group.badge}
                </Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, ii) => {
                  const Icon = iconMap[gi]?.[ii] ?? Code2;
                  return (
                    <Card
                      key={item.name}
                      className="group border-border/40 bg-card/50 transition-colors hover:border-border hover:bg-card"
                    >
                      <CardHeader className="pb-2">
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-muted/50 text-muted-foreground transition-colors group-hover:text-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base">{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
