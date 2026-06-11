"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

import { cn } from "@/lib/utils";
import { useGsapContext } from "@/hooks/use-gsap-context";
import type { MediaAsset } from "@/modules/landing/data/media-assets";

type ParallaxMediaContainerProps = {
  asset: MediaAsset;
  priority?: boolean;
  parallaxOffset?: number;
  className?: string;
  imageClassName?: string;
};

export function ParallaxMediaContainer({
  asset,
  priority = false,
  parallaxOffset = 48,
  className,
  imageClassName,
}: ParallaxMediaContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGsapContext({
    scope: containerRef,
    onReady: () => {
      const container = containerRef.current;
      const imageWrapper = imageWrapperRef.current;

      if (!container || !imageWrapper) {
        return;
      }

      gsap.fromTo(
        imageWrapper,
        { y: parallaxOffset * 0.5 },
        {
          y: -parallaxOffset * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-card",
        className,
      )}
      style={{ aspectRatio: asset.aspectRatio }}
    >
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 will-change-transform"
        style={{
          height: `calc(100% + ${parallaxOffset}px)`,
          top: `-${parallaxOffset / 2}px`,
        }}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            "h-full w-full object-cover object-center",
            imageClassName,
          )}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
    </div>
  );
}
