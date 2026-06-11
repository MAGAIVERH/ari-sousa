import type { PreBookingInput } from "@/modules/booking/schemas/pre-booking-schema";

type ModalityOption = {
  value: PreBookingInput["modality"];
  label: string;
};

export const MODALITY_OPTIONS: ModalityOption[] = [
  { value: "jiu-jitsu", label: "Jiu-Jitsu Private" },
  { value: "defesa-pessoal", label: "Defesa Pessoal" },
];
