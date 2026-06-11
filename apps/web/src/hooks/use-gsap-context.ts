"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

function registerGsapPlugins() {
  if (isRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

type UseGsapContextOptions = {
  scope: React.RefObject<HTMLElement | null>;
  enabled?: boolean;
  onReady?: () => void;
};

export function useGsapContext({
  scope,
  enabled = true,
  onReady,
}: UseGsapContextOptions) {
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    if (!enabled || !scope.current) {
      return;
    }

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      onReadyRef.current?.();
    }, scope);

    return () => {
      ctx.revert();
    };
  }, [enabled, scope]);
}
