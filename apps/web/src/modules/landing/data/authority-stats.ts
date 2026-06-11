export type AuthorityStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const AUTHORITY_STATS: AuthorityStat[] = [
  {
    id: "experience",
    value: 15,
    suffix: "+",
    label: "Anos de experiência",
  },
  {
    id: "degree",
    value: 2,
    suffix: "º",
    label: "Grau faixa preta",
  },
  {
    id: "modalities",
    value: 2,
    suffix: "",
    label: "Modalidades premium",
  },
];

export const AUTHORITY_BIO = {
  headline: "Mais que técnica. Legado no tatame.",
  paragraphs: [
    "Faixa Preta 2º Grau Gracie Barra com trajetória construída em competição, ensino e aplicação real de defesa pessoal.",
    "A metodologia particular garante evolução acelerada: cada detalhe de base, transição e finalização é corrigido com precisão milimétrica — sem fila, sem distração, sem atalhos.",
  ],
} as const;
