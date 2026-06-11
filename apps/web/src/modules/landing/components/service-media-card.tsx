import { ParallaxMediaContainer } from "@/modules/landing/components/parallax-media-container";
import type { MediaAsset } from "@/modules/landing/data/media-assets";

type ServiceMediaCardProps = {
  title: string;
  description: string;
  asset: MediaAsset;
  accentClass: string;
};

export function ServiceMediaCard({
  title,
  description,
  asset,
  accentClass,
}: ServiceMediaCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border transition-colors hover:border-primary/40 ${accentClass}`}
    >
      <ParallaxMediaContainer
        asset={asset}
        parallaxOffset={40}
        className="rounded-none border-0 border-b border-border"
        imageClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="p-8">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Substituir por: {asset.finalFileName} ({asset.width}×{asset.height})
        </p>
      </div>
    </article>
  );
}
