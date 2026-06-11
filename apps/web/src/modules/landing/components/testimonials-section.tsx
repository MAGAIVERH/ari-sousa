"use client";

import { useRef } from "react";
import gsap from "gsap";

import { Badge } from "@/components/ui/badge";
import { useGsapContext } from "@/hooks/use-gsap-context";
import { useMobile } from "@/hooks/use-mobile";
import { TESTIMONIALS } from "@/modules/landing/data/testimonials";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useGsapContext({
    scope: sectionRef,
    enabled: !isMobile,
    onReady: () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) {
        return;
      }

      const scrollDistance = track.scrollWidth - window.innerWidth;

      if (scrollDistance <= 0) {
        return;
      }

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
  });

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative z-10 border-t border-border bg-background"
    >
      <div className={`px-6 py-24 lg:px-12 ${isMobile ? "" : "h-screen"}`}>
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Prova social
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            O que dizem os alunos
          </h2>
        </div>

        {isMobile ? (
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 px-6 lg:px-12">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="mt-12 overflow-hidden">
            <div ref={trackRef} className="flex w-max gap-6 px-6 lg:px-12">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  className="w-[min(85vw,420px)] shrink-0"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

type TestimonialCardProps = {
  testimonial: (typeof TESTIMONIALS)[number];
  className?: string;
};

function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const modalityLabel =
    testimonial.modality === "jiu-jitsu" ? "Jiu-Jitsu" : "Defesa Pessoal";

  return (
    <article
      className={`rounded-2xl border border-border bg-card p-8 ${className ?? ""}`}
    >
      <Badge variant="outline" className="uppercase tracking-wide">
        {modalityLabel}
      </Badge>
      <blockquote className="mt-6 text-base leading-7 text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </footer>
    </article>
  );
}
