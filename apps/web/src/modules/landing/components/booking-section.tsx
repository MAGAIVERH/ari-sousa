import { PreBookingForm } from "@/modules/booking/components/pre-booking-form";

export function BookingSection() {
  return (
    <section
      id="agendar"
      className="relative z-10 border-t border-border bg-background px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Agendamento
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Reserve sua aula particular
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Preencha seus dados para iniciar o pré-agendamento. Campos obrigatórios
          são validados em tempo real.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <PreBookingForm />
        </div>
      </div>
    </section>
  );
}
