"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: dict.nav.services },
    { href: "#about", label: dict.nav.about },
    { href: "#how-we-work", label: dict.nav.howWeWork },
    { href: "#contacts", label: dict.nav.contacts },
  ];

  const otherLocale = locale === "pl" ? "uk" : "pl";
  const otherLocaleLabel = locale === "pl" ? "UA" : "PL";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={`/${locale}`} className="text-2xl font-bold tracking-tight">
          Codecart
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-3.5 w-3.5" />
            {otherLocaleLabel}
          </a>
          <a href="#contacts" className={buttonVariants({ size: "sm" })}>
            {dict.nav.cta}
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`/${otherLocale}`}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-3.5 w-3.5" />
            {otherLocaleLabel}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacts"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: "mt-4" })}
                >
                  {dict.nav.cta}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
