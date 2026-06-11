"use client";

import { useRef } from "react";
import gsap from "gsap";

import { useGsapContext } from "@/hooks/use-gsap-context";
import {
  AUTHORITY_BIO,
  AUTHORITY_STATS,
} from "@/modules/landing/data/authority-stats";

export function AuthoritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapContext({
    scope: sectionRef,
    onReady: () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const counters = section.querySelectorAll<HTMLElement>("[data-counter-value]");

      counters.forEach((counter) => {
        const target = Number(counter.dataset.counterValue ?? 0);
        const suffix = counter.dataset.counterSuffix ?? "";
        const proxy = { value: 0 };

        gsap.to(proxy, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            counter.textContent = `${Math.round(proxy.value)}${suffix}`;
          },
        });
      });

      const bioBlocks = section.querySelectorAll<HTMLElement>("[data-authority-fade]");

      gsap.from(bioBlocks, {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    },
  });

  return (
    <section
      id="autoridade"
      ref={sectionRef}
      className="relative z-10 border-t border-border bg-background px-6 py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p
            data-authority-fade
            className="text-sm font-medium uppercase tracking-[0.18em] text-primary"
          >
            Autoridade
          </p>
          <h2
            data-authority-fade
            className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl"
          >
            {AUTHORITY_BIO.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {AUTHORITY_BIO.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                data-authority-fade
                className="text-sm leading-7 text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {AUTHORITY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-border bg-card p-6 text-center lg:text-left xl:text-center"
            >
              <p className="font-display text-5xl font-bold text-primary">
                <span data-counter-value={stat.value} data-counter-suffix={stat.suffix}>
                  0{stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
