import type { LucideIcon } from "lucide-react";
import { Clock, Crosshair, User } from "lucide-react";

export type Differential = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const DIFFERENTIALS: Differential[] = [
  {
    id: "attention",
    title: "Atenção 100% individualizada",
    description:
      "Cada aula é desenhada para o seu nível, objetivo e ritmo de evolução — do iniciante ao competidor.",
    icon: User,
  },
  {
    id: "precision",
    title: "Correção milimétrica de postura",
    description:
      "Ajustes técnicos em tempo real para construir bases sólidas e eliminar vícios antes que virem limitações.",
    icon: Crosshair,
  },
  {
    id: "schedule",
    title: "Flexibilidade total de horários",
    description:
      "Agenda particular adaptada à sua rotina profissional — treinos antes do trabalho, após expediente ou fins de semana.",
    icon: Clock,
  },
];
