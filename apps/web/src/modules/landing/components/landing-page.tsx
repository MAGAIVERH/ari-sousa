import { AuthoritySection } from "@/modules/landing/components/authority-section";
import { BookingSection } from "@/modules/landing/components/booking-section";
import { LandingHeader } from "@/modules/landing/components/landing-header";
import { MethodologySection } from "@/modules/landing/components/methodology-section";
import { OutfitTransition } from "@/modules/landing/components/outfit-transition";
import { ServicesPreview } from "@/modules/landing/components/services-preview";
import { TestimonialsSection } from "@/modules/landing/components/testimonials-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function LandingPage() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--brand-blue)/0.22),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.08),transparent_45%)]" />

        <LandingHeader />

        <main>
          <OutfitTransition />
          <AuthoritySection />
          <ServicesPreview />
          <MethodologySection />
          <TestimonialsSection />
          <BookingSection />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
