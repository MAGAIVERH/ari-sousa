# Especificação de Imagens — Ari Sousa

Referência visual: [landonorris.com](https://landonorris.com/) — fotos de alto contraste, recorte limpo, sensação premium.

Substitua os placeholders em `apps/web/public/images/` pelos arquivos finais **mantendo as mesmas dimensões e nomes de arquivo**.

---

## 1. Hero — Retrato do Professor (Kimono)

| Campo | Valor |
|-------|-------|
| **Arquivo** | `professor-kimono.webp` (ou `.png` com transparência) |
| **Placeholder atual** | `professor-kimono.svg` |
| **Dimensões** | 600 × 900 px (proporção 2:3) |
| **Formato** | WebP ou PNG com fundo transparente |
| **Direção** | Professor em estúdio, recorte limpo, kimono Gracie Barra, faixa preta 2º grau visível |
| **Uso** | Hero — camada base da transição de traje |

## 2. Hero — Retrato do Professor (Rashguard)

| Campo | Valor |
|-------|-------|
| **Arquivo** | `professor-rashguard.webp` |
| **Placeholder atual** | `professor-rashguard.svg` |
| **Dimensões** | 600 × 900 px (proporção 2:3) |
| **Formato** | WebP ou PNG com fundo transparente |
| **Direção** | Mesma pose do kimono — rashguard Gracie Barra Carlos Jr (azul + vermelho) |
| **Uso** | Hero — camada superior da transição de traje |

## 3. Seção Jiu-Jitsu — Ação no Tatame

| Campo | Valor |
|-------|-------|
| **Arquivo** | `jiu-jitsu-action.webp` |
| **Placeholder atual** | `jiu-jitsu-action.svg` |
| **Dimensões** | 960 × 600 px (proporção 16:10) |
| **Formato** | WebP |
| **Direção** | Alta intensidade, técnica perfeita no tatame, excelente contraste, kimono visível |
| **Uso** | Card modalidade Jiu-Jitsu Private — efeito parallax no scroll |

## 4. Seção Defesa Pessoal — Cenário Urbano

| Campo | Valor |
|-------|-------|
| **Arquivo** | `defesa-pessoal-urban.webp` |
| **Placeholder atual** | `defesa-pessoal-urban.svg` |
| **Dimensões** | 960 × 600 px (proporção 16:10) |
| **Formato** | WebP |
| **Direção** | Realismo urbano, sem kimono, postura de proteção/defesa em ambiente cotidiano |
| **Uso** | Card modalidade Defesa Pessoal — efeito parallax no scroll |

---

## Checklist de entrega das fotos finais

- [ ] Fundo do hero recortado (transparente ou estúdio escuro uniforme)
- [ ] Mesma pose entre kimono e rashguard para transição fluida
- [ ] Exportar em WebP com qualidade 80–90%
- [ ] Manter proporções exatas para evitar layout shift
- [ ] Patch GB visível no kimono/rashguard quando aplicável
