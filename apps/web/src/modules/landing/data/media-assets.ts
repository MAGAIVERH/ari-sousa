export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
  finalFileName: string;
};

export const HERO_PORTRAIT_DIMENSIONS = {
  width: 600,
  height: 900,
  aspectRatio: "2 / 3",
} as const;

export const SERVICE_MEDIA_DIMENSIONS = {
  width: 960,
  height: 600,
  aspectRatio: "16 / 10",
} as const;

export const HERO_MEDIA_ASSETS = {
  kimono: {
    id: "hero-kimono",
    src: "/images/professor-kimono.svg",
    alt: "Professor em kimono Gracie Barra com faixa preta 2º grau",
    width: HERO_PORTRAIT_DIMENSIONS.width,
    height: HERO_PORTRAIT_DIMENSIONS.height,
    aspectRatio: HERO_PORTRAIT_DIMENSIONS.aspectRatio,
    finalFileName: "professor-kimono.webp",
  },
  rashguard: {
    id: "hero-rashguard",
    src: "/images/professor-rashguard.svg",
    alt: "Professor em rashguard Gracie Barra Carlos Jr",
    width: HERO_PORTRAIT_DIMENSIONS.width,
    height: HERO_PORTRAIT_DIMENSIONS.height,
    aspectRatio: HERO_PORTRAIT_DIMENSIONS.aspectRatio,
    finalFileName: "professor-rashguard.webp",
  },
} as const satisfies Record<string, MediaAsset>;

export const SERVICE_MEDIA_ASSETS = {
  jiuJitsu: {
    id: "jiu-jitsu-action",
    src: "/images/jiu-jitsu-action.svg",
    alt: "Jiu-Jitsu em ação no tatame com alta intensidade técnica",
    width: SERVICE_MEDIA_DIMENSIONS.width,
    height: SERVICE_MEDIA_DIMENSIONS.height,
    aspectRatio: SERVICE_MEDIA_DIMENSIONS.aspectRatio,
    finalFileName: "jiu-jitsu-action.webp",
  },
  defesaPessoal: {
    id: "defesa-pessoal-urban",
    src: "/images/defesa-pessoal-urban.svg",
    alt: "Defesa pessoal em cenário urbano realista",
    width: SERVICE_MEDIA_DIMENSIONS.width,
    height: SERVICE_MEDIA_DIMENSIONS.height,
    aspectRatio: SERVICE_MEDIA_DIMENSIONS.aspectRatio,
    finalFileName: "defesa-pessoal-urban.webp",
  },
} as const satisfies Record<string, MediaAsset>;
