"use server";

import { preBookingSchema } from "@/modules/booking/schemas/pre-booking-schema";

export async function submitPreBookingAction(
  data: unknown,
): Promise<{ success: boolean; message: string }> {
  const parsed = preBookingSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Verifique os campos destacados e tente novamente.",
    };
  }

  try {
    // Dia 13: persistir dados e avançar para seleção de horário no banco.
    void parsed.data;

    return {
      success: true,
      message:
        "Pré-agendamento recebido! Em breve você poderá escolher o horário da aula.",
    };
  } catch (error) {
    console.error("submitPreBookingAction", error);

    return {
      success: false,
      message: "Não foi possível enviar o formulário. Tente novamente.",
    };
  }
}
