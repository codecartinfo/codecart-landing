import { Separator } from "@/components/ui/separator";
import type { Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">Codecart</span>
            <Separator orientation="vertical" className="h-4 bg-border/40" />
            <span className="text-xs text-muted-foreground">
              Codecart Sp. z O.O.
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Codecart. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
