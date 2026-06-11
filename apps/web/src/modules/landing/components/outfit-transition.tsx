"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGsapContext } from "@/hooks/use-gsap-context";

const KIMONO_SRC = "/images/professor-kimono.svg";
const RASHGUARD_SRC = "/images/professor-rashguard.svg";

const TITLE_WORDS = [
  "AULAS",
  "PARTICULARES",
  "DE",
  "JIU-JITSU",
  "E",
  "DEFESA",
  "PESSOAL",
] as const;

type OutfitTransitionProps = {
  className?: string;
};

export function OutfitTransition({ className }: OutfitTransitionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const kimonoRef = useRef<HTMLDivElement>(null);
  const rashguardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const labelKimonoRef = useRef<HTMLSpanElement>(null);
  const labelRashRef = useRef<HTMLSpanElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [manualProgress, setManualProgress] = useState(0);

  const applyProgress = useCallback((value: number) => {
    const kimono = kimonoRef.current;
    const rashguard = rashguardRef.current;
    const progressBar = progressRef.current;
    const labelKimono = labelKimonoRef.current;
    const labelRash = labelRashRef.current;

    if (!kimono || !rashguard || !progressBar) {
      return;
    }

    const clamped = Math.min(1, Math.max(0, value));

    gsap.set(kimono, { opacity: 1 - clamped, scale: 1 + clamped * 0.02 });
    gsap.set(rashguard, { opacity: clamped, scale: 1.02 - clamped * 0.02 });
    gsap.set(progressBar, { scaleX: clamped, transformOrigin: "left center" });

    if (labelKimono && labelRash) {
      gsap.set(labelKimono, { opacity: 1 - clamped });
      gsap.set(labelRash, { opacity: clamped });
    }
  }, []);

  const setupScrollAnimation = useCallback(() => {
    const section = sectionRef.current;
    const kimono = kimonoRef.current;
    const rashguard = rashguardRef.current;

    if (!section || !kimono || !rashguard) {
      return;
    }

    gsap.set(rashguard, { opacity: 0 });
    gsap.set(kimono, { opacity: 1 });

    const words = section.querySelectorAll<HTMLElement>("[data-hero-word]");
    const subtitle = section.querySelector<HTMLElement>("[data-hero-subtitle]");
    const cta = section.querySelector<HTMLElement>("[data-hero-cta]");
    const badge = section.querySelector<HTMLElement>("[data-hero-badge]");

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(badge, { y: 16, opacity: 0, duration: 0.5 })
      .from(
        words,
        {
          y: 80,
          opacity: 0,
          rotateX: -28,
          stagger: 0.08,
          duration: 0.9,
        },
        "-=0.2",
      )
      .from(subtitle, { y: 24, opacity: 0, duration: 0.7 }, "-=0.45")
      .from(cta, { y: 20, opacity: 0, duration: 0.6 }, "-=0.35");

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        applyProgress(self.progress);
        setManualProgress(self.progress);
      },
    });
  }, [applyProgress]);

  useGsapContext({
    scope: sectionRef,
    enabled: !isLocked,
    onReady: setupScrollAnimation,
  });

  useEffect(() => {
    if (!isLocked) {
      return;
    }

    applyProgress(manualProgress);
  }, [applyProgress, isLocked, manualProgress]);

  const handleToggleLock = () => {
    setIsLocked((current) => !current);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value) / 100;
    setManualProgress(value);
    applyProgress(value);
  };

  return (
    <section
      ref={sectionRef}
      className={cn("relative h-[200vh]", className)}
      aria-label="Hero com transição de traje"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--brand-blue)/0.35),transparent_65%)]" />

        <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-10 pt-24 lg:grid-cols-[1fr_1fr] lg:px-12 lg:pt-28">
          <div className="flex flex-col justify-center gap-6 lg:gap-8">
            <p
              data-hero-badge
              className="text-sm font-medium uppercase tracking-[0.22em] text-primary"
            >
              Gracie Barra · Faixa Preta 2º Grau
            </p>

            <h1 className="font-display text-balance text-4xl font-bold uppercase leading-[0.92] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              {TITLE_WORDS.map((word) => (
                <span
                  key={word}
                  data-hero-word
                  className="mr-[0.22em] inline-block last:mr-0"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              data-hero-subtitle
              className="max-w-xl text-base leading-7 text-muted-foreground"
            >
              Mais de 15 anos de experiência. Treino individualizado com
              correção milimétrica — do tatame à proteção urbana real.
            </p>

            <div data-hero-cta className="pointer-events-auto flex flex-wrap gap-4">
              <Button size="lg">Agendar aula particular</Button>
              <Button size="lg" variant="outline">
                Conhecer modalidades
              </Button>
            </div>

            <div className="pointer-events-auto mt-2 flex flex-col gap-4">
              <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.22em]">
                <span
                  ref={labelKimonoRef}
                  className="text-brand-white transition-opacity"
                >
                  Kimono
                </span>
                <span className="text-muted-foreground">/</span>
                <span
                  ref={labelRashRef}
                  className="text-primary opacity-0 transition-opacity"
                >
                  Rashguard GB
                </span>
              </div>

              <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-border">
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 rounded-full bg-primary"
                />
              </div>

              <button
                type="button"
                onClick={handleToggleLock}
                className="w-fit rounded-full border border-border bg-card/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {isLocked ? "Voltar ao scroll" : "Toque para travar"}
              </button>

              {isLocked ? (
                <label className="flex w-full max-w-xs flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Ajustar transição
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={Math.round(manualProgress * 100)}
                    onChange={handleSliderChange}
                    className="accent-primary"
                    aria-label="Progresso da transição de traje"
                  />
                </label>
              ) : (
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Role para trocar o traje
                </p>
              )}
            </div>
          </div>

          <div className="relative flex h-[min(58vh,560px)] items-end justify-center lg:h-full lg:justify-end">
            <div
              ref={kimonoRef}
              className="absolute inset-x-0 bottom-0 flex justify-center will-change-[opacity,transform] lg:justify-end"
            >
              <Image
                src={KIMONO_SRC}
                alt="Professor em kimono Gracie Barra"
                width={600}
                height={900}
                priority
                className="h-[min(58vh,560px)] w-auto object-contain object-bottom drop-shadow-[0_24px_80px_hsl(var(--brand-blue-deep)/0.8)] lg:h-[min(72vh,720px)]"
              />
            </div>

            <div
              ref={rashguardRef}
              className="absolute inset-x-0 bottom-0 flex justify-center will-change-[opacity,transform] lg:justify-end"
            >
              <Image
                src={RASHGUARD_SRC}
                alt="Professor em rashguard Gracie Barra Carlos Jr"
                width={600}
                height={900}
                priority
                className="h-[min(58vh,560px)] w-auto object-contain object-bottom drop-shadow-[0_24px_80px_hsl(var(--primary)/0.35)] lg:h-[min(72vh,720px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
