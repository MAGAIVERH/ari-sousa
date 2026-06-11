import { z } from "zod";

export const MODALITY_VALUES = ["jiu-jitsu", "defesa-pessoal"] as const;

export const preBookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(255, "E-mail muito longo."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um telefone ou WhatsApp válido.")
    .max(20, "Telefone muito longo.")
    .regex(
      /^[\d\s()+-]+$/,
      "Use apenas números e caracteres de telefone.",
    ),
  modality: z.enum(MODALITY_VALUES, {
    message: "Selecione uma modalidade.",
  }),
});

export type PreBookingInput = z.infer<typeof preBookingSchema>;
