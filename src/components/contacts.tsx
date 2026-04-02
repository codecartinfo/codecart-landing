"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const PHONE = "+48452119082";
const PHONE_DISPLAY = "+48 452 119 082";

export function Contacts({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacts" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-md">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.contacts.title}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {dict.contacts.description}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <Phone className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.contacts.phone}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-1 block font-medium transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.contacts.email}
                </p>
                <a
                  href="mailto:codecartinfo00@gmail.com"
                  className="mt-1 block font-medium transition-colors hover:text-foreground"
                >
                  codecartinfo00@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.contacts.whatsapp}
                </p>
                <a
                  href={`https://wa.me/${PHONE.replace(/\+/,"")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <Send className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.contacts.telegram}
                </p>
                <a
                  href={`https://t.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {dict.contacts.address}
                </p>
                <p className="mt-1 text-sm">
                  ul. Drzeworytników 69A/2
                  <br />
                  01-341 Warszawa, Mazowieckie
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-semibold">
              {dict.contacts.form.title}
            </h3>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
                <p className="font-semibold">
                  {dict.contacts.form.successTitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {dict.contacts.form.successDesc}
                </p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setStatus("idle")}
                >
                  {dict.contacts.form.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contacts.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={dict.contacts.form.namePlaceholder}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{dict.contacts.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={dict.contacts.form.emailPlaceholder}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{dict.contacts.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={dict.contacts.form.messagePlaceholder}
                    rows={4}
                    className="bg-background/50 resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    {dict.contacts.form.error}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {dict.contacts.form.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
