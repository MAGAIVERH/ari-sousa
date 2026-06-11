import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";

import "./globals.css";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ari Sousa — Jiu-Jitsu & Defesa Pessoal",
  description:
    "Aulas particulares premium de Jiu-Jitsu e Defesa Pessoal. Faixa Preta 2º Grau, Gracie Barra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${bodyFont.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
