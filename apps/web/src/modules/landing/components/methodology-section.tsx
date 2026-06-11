"use client";

import { useRef } from "react";
import gsap from "gsap";

import { useGsapContext } from "@/hooks/use-gsap-context";
import { DIFFERENTIALS } from "@/modules/landing/data/differentials";

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapContext({
    scope: sectionRef,
    onReady: () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const cards = section.querySelectorAll<HTMLElement>("[data-differential-card]");

      gsap.from(cards, {
        y: 48,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    },
  });

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative z-10 border-t border-border bg-background px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Metodologia
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Diferenciais de um instrutor particular premium
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                data-differential-card
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
