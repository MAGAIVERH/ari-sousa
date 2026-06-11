export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  modality: "jiu-jitsu" | "defesa-pessoal";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rafael M.",
    role: "Empresário",
    quote:
      "Em três meses de aulas particulares minha confiança no tatame mudou completamente. A correção detalhada faz toda a diferença.",
    modality: "jiu-jitsu",
  },
  {
    id: "2",
    name: "Camila S.",
    role: "Advogada",
    quote:
      "Busquei defesa pessoal com foco real. Saio de cada aula com técnicas aplicáveis e sensação de segurança no dia a dia.",
    modality: "defesa-pessoal",
  },
  {
    id: "3",
    name: "Bruno T.",
    role: "Atleta amador",
    quote:
      "O nível técnico é de competição, mas o atendimento é humano. Evoluí mais em seis meses do que em dois anos em turma.",
    modality: "jiu-jitsu",
  },
  {
    id: "4",
    name: "Patrícia L.",
    role: "Executiva",
    quote:
      "Horários flexíveis e treino exclusivo. Finalmente consigo conciliar agenda executiva com evolução consistente no Jiu-Jitsu.",
    modality: "jiu-jitsu",
  },
];
