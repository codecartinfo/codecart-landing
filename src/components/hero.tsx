"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

function FloatingGrid() {
  return (
    <div className="relative h-full w-full">
      {/* Animated floating cards/blocks representing code/services */}
      <motion.div
        className="absolute right-8 top-8 h-40 w-56 rounded-xl border border-border/30 bg-gradient-to-br from-muted/40 to-muted/10 p-4 backdrop-blur-sm"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          <div className="h-2 w-16 rounded-full bg-muted-foreground/20" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-muted-foreground/15" />
          <div className="h-2 w-3/4 rounded-full bg-muted-foreground/10" />
          <div className="h-2 w-5/6 rounded-full bg-muted-foreground/15" />
          <div className="h-2 w-2/3 rounded-full bg-muted-foreground/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-4 top-32 h-28 w-44 rounded-xl border border-border/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-4 backdrop-blur-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500/60" />
          <div className="h-2 w-12 rounded-full bg-muted-foreground/20" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-8 rounded-md bg-muted-foreground/10" />
          <div className="h-8 rounded-md bg-muted-foreground/15" />
          <div className="h-8 rounded-md bg-muted-foreground/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-16 h-32 w-48 rounded-xl border border-border/25 bg-gradient-to-br from-muted/30 to-transparent p-4 backdrop-blur-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-purple-500/60" />
          <div className="h-2 w-14 rounded-full bg-muted-foreground/20" />
        </div>
        <div className="flex items-end gap-1.5">
          <div className="h-10 w-5 rounded-sm bg-muted-foreground/15" />
          <div className="h-14 w-5 rounded-sm bg-muted-foreground/20" />
          <div className="h-8 w-5 rounded-sm bg-muted-foreground/10" />
          <div className="h-16 w-5 rounded-sm bg-muted-foreground/25" />
          <div className="h-12 w-5 rounded-sm bg-muted-foreground/15" />
        </div>
      </motion.div>

      {/* Connecting dots */}
      <motion.div
        className="absolute left-32 top-20 h-2 w-2 rounded-full bg-blue-500/30"
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-40 h-1.5 w-1.5 rounded-full bg-purple-500/30"
        animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
      />
      <motion.div
        className="absolute right-32 top-48 h-2 w-2 rounded-full bg-green-500/20"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
      />
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/3%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/3%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(220_70%_50%/12%),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:py-40">
        {/* Left: text */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            {dict.hero.badge}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {dict.hero.title1}{" "}
            <span className="text-muted-foreground">{dict.hero.title2}</span>{" "}
            {dict.hero.title3}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            {dict.hero.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contacts"
              className={buttonVariants({ size: "lg", className: "gap-2" })}
            >
              {dict.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right: animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden h-[400px] lg:block"
        >
          <FloatingGrid />
        </motion.div>
      </div>
    </section>
  );
}
