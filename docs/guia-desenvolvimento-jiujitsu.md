# Guia de Desenvolvimento — Jiu-Jitsu Private OS

**Para:** Desenvolvedor Executor  
**Papel deste documento:** Seu Tech Lead / Arquiteto de Software Sénior — Você executa rigidamente as tarefas descritas.  
**Stack Oficial:** Turborepo, pnpm, Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui, GSAP (GreenSock), Lenis Scroll, Fastify (ou Next.js Server Actions), Zod, PostgreSQL (Supabase/Neon), Drizzle ORM, Supabase Storage (ou Cloudflare R2), Resend (E-mails).

**Idioma do Produto:** Português (pt-BR) — Focado no mercado de alta performance e aulas particulares de Jiu-Jitsu e Defesa Pessoal Premium.

**Escopo deste guia:** Produto Completo = **Landing Page Premium de Alta Conversão** (Inspirada nos efeitos visuais e fluidez de [landonorris.com](https://landonorris.com/)) + **Fluxo de Agendamento do Aluno** + **Dashboard de Administração do Professor** (Agenda, Janelas de Disponibilidade, Gestão de Alunos e Módulo Financeiro).

**Calendário:** **30 Dias Úteis** de execução focada.

---

## Como usar este guia

1. Marque cada dia ao final do desenvolvimento com: `✅ Concluído` ou `⏸️ Pausado` (indicando o motivo técnico do impedimento).
2. Apenas avance para o próximo dia se os **Critérios de Conclusão** forem 100% atingidos.
3. Toda a interface pública deve refletir o posicionamento de luxo de um **Faixa Preta 2º Grau com mais de 15 anos de experiência**.

### Estrutura Final do Monorepo (Referência)
```
jiujitsu-private/
├── apps/
│   ├── web/              # Next.js 15 — Landing Page Premium + Sistema de Agendamento do Aluno
│   └── admin/            # Next.js 15 — Painel de Gestão do Professor (Agenda, Horários, Financeiro)
├── packages/
│   ├── db/               # Esquema do Drizzle, Migrações e Conexão com o Banco de Dados
│   ├── shared/           # Contratos do Zod (Validação), Enums de Status, Helpers Globais
│   └── ui/               # Componentes visuais compartilhados (shadcn customizado em Azul/Preto)
├── docs/
│   └── assets/           # Placeholders e especificações de imagens requeridas
└── README.md
```

---

## Regras do Tech Lead (Leia com atenção)

| Regra de Ouro | Razão Técnica / Comercial |
| :--- | :--- |
| **Validações via Zod Compartilhadas** | Os contratos de dados ficam em `packages/shared`. A mesma regra que valida o formulário do aluno valida a inserção no banco de dados. Sem inconsistências entre as pontas. |
| **Bloqueio de Conflito de Horário** | Regra rígida de negócio: uma janela de hora-aula reservada por um aluno torna-se instantaneamente indisponível. Prevenção absoluta de *double-booking*. |
| **GSAP & Lenis como Diferencial** | A estética deve imitar o site do Lando Norris. Anmações fluidas, transições limpas e scroll suave não são opcionais: são o motor de conversão de vendas do plano premium. |
| **Paleta de Cores Estrita** | Azul Escuro Profundo (Premium/Fundo), Branco Puro/Gelo (Contraste) e Preto (Sólido/Detalhes). Proibido o uso de cores genéricas ou primárias puras. |

---

## FASE 1 — Preparação, Banco de Dados e Identidade (Dias 1 a 6)

### Dia 1 — Escopo do Projeto e Inicialização do Repositório
* **O que fazer:** Configurar a estrutura base do projeto utilizando Turborepo para separar a aplicação do aluno e a aplicação administrativa do professor.
  - [ ] Inicializar o repositório Git local e criar a estrutura de pastas utilizando `pnpm` e Turborepo.
  - [ ] Configurar o arquivo `README.md` do projeto documentando os pré-requisitos e comandos de inicialização.
  - [ ] Criar o repositório no GitHub para controle de versionamento.
* **Critério de Conclusão:** Executar `pnpm install` e rodar as aplicações sem apresentar qualquer erro em ambiente de desenvolvimento.

### Dia 2 — Modelagem e Infraestrutura do Banco de Dados
* **O que fazer:** Criar e estruturar o modelo de dados utilizando PostgreSQL (Supabase ou Neon) gerenciado pelo Drizzle ORM.
  - [ ] Configurar o arquivo de conexão do Drizzle em `packages/db`.
  - [ ] Criar a tabela `professores` (ID, Nome, Graduação, Bio, ValorHora).
  - [ ] Criar a tabela `disponibilidades` (ID, DiaSemana, HoraInicio, HoraFim).
  - [ ] Criar a tabela `agendamentos` (ID, NomeAluno, Email, Telefone, DataHora, StatusEnum).
  - [ ] Criar a tabela `financeiro` (ID, Tipo, Valor, Descricao, DataLancamento).
* **Critério de Conclusão:** Gerar os arquivos de migração com `drizzle-kit generate` e aplicá-los ao banco de dados com sucesso (`drizzle-kit push` ou `migrate`).

### Dia 3 — Design System e Configuração Visual Premium
* **O que fazer:** Traduzir a identidade visual baseada no site de referência para as configurações globais do projeto.
  - [ ] Configurar os tokens de cores no `tailwind.config.js` utilizando as variáveis exatas (Azul Escuro Real, Branco e Preto Puro).
  - [ ] Adicionar a tipografia de impacto para os títulos (fontes robustas/esportivas modernas) e sans-serif limpa para leitura de textos.
  - [ ] Inicializar os componentes base do `shadcn/ui` adaptados para o novo esquema de cores.
* **Critério de Conclusão:** Criar uma página simples exibindo a paleta de cores correta e a hierarquia de fontes renderizada perfeitamente no navegador.

### Dia 4 — Configuração dos Motores de Efeito Visual (GSAP + Lenis)
* **O que fazer:** Implementar as ferramentas responsáveis pela experiência de navegação premium e fluida.
  - [ ] Instalar e configurar o `Lenis Scroll` na raiz da aplicação `apps/web` para suavização do scroll nativo.
  - [ ] Configurar o `GSAP` juntamente com o plugin `ScrollTrigger`.
  - [ ] Criar um hook customizado React para gerenciar e limpar as animações do GSAP evitando vazamentos de memória (*Memory Leak*).
* **Critério de Conclusão:** Uma página de testes onde blocos de conteúdo realizam transições de opacidade e movimento à medida que o scroll é executado.

### Dia 5 — Especificação e Placeholders de Mídia (Guia de Imagens)
* **O que fazer:** Criar a lista técnica de ativos de imagem necessários e estruturar os contêineres que receberão os efeitos do tipo paralaxe.
  > **Diretriz de Imagens (Estilo Lando Norris):** > 1. **Hero Box:** Imagem do professor em estúdio, com fundo cortado (transparente), alta definição, focado no Kimono e na Faixa Preta com os 2 graus visíveis.  
  > 2. **Seção Jiu-Jitsu:** Foto em ação de alta intensidade, excelente contraste, capturando técnica perfeita no tatame.  
  > 3. **Seção Defesa Pessoal:** Foto focada no realismo urbano, sem kimono, simulando cenário de proteção real.
  - [ ] Criar arquivos vazios ou placeholders correspondentes no diretório do projeto.
  - [ ] Configurar as dimensões corretas nas tags `<Image />` do Next.js para evitar quebras de layout na renderização (*Layout Shift*).
* **Critério de Conclusão:** Estrutura dos contêineres de mídia configurada com as proporções exatas prontas para receber os arquivos finais.

### Dia 6 — Ambiente de Homologação e Primeiro Deploy
* **O que fazer:** Disponibilizar a infraestrutura inicial em um ambiente web real na Vercel.
  - [ ] Vincular o repositório do GitHub à plataforma da Vercel.
  - [ ] Configurar as variáveis de ambiente necessárias (Strings de conexão com o banco de dados) nos painéis da Vercel.
* **Critério de Conclusão:** Deploy bem-sucedido gerando um link público acessível que exibe a landing page estrutural sem erros.

---

## FASE 2 — A Landing Page de Alto Impacto (Dias 7 a 15)

### Dia 7 — Desenvolvimento da Dobra Principal (Seção Hero)
* **O que fazer:** Construir a porta de entrada da plataforma com tipografia agressiva e animação de entrada impactante.
  - [ ] Desenvolver o layout com o título principal posicionado à esquerda ("AULAS PARTICULARES DE JIU-JITSU E DEFESA PESSOAL").
  - [ ] Posicionar a imagem transparente do atleta à direita utilizando CSS posicionado de forma absoluta para sobrepor elementos de fundo.
  - [ ] Aplicar animação GSAP de entrada dividindo o título palavra por palavra e aplicando um efeito de subida suave com opacidade.
* **Critério de Conclusão:** Ao recarregar a página, o título e a imagem principal entram de forma coordenada através de animações do GSAP.

### Dia 8 — Seção de Autoridade e Contador de Experiência
* **O que fazer:** Destacar visualmente a bagagem técnica do professor (Os 15 anos de estrada e os 2 graus na faixa preta).
  - [ ] Desenvolver o bloco descritivo focado na história, títulos e formação do atleta.
  - [ ] Implementar o efeito "Counter" com GSAP: os números de anos de experiência e graus iniciam em 0 e realizam uma contagem crescente rápida assim que o usuário realiza o scroll até a seção.
* **Critério de Conclusão:** Os contadores numéricos executam a animação progressiva perfeitamente disparada pelo ScrollTrigger.

### Dia 9 — Grade Interativa de Serviços (Jiu-Jitsu vs Defesa Pessoal)
* **O que fazer:** Criar dois blocos visuais de grande destaque para segmentar as modalidades oferecidas.
  - [ ] Criar dois contêineres lado a lado em telas grandes. Bloco A: Jiu-Jitsu Private (foco técnico, competição e saúde). Bloco B: Defesa Pessoal (foco em cenários reais de proteção urbana).
  - [ ] Adicionar efeito de micro-interação: ao passar o mouse sobre um bloco, o fundo realiza uma transição suave alterando o contraste e revelando sutilmente a imagem correspondente da modalidade em tons de azul escuro.
* **Critério de Conclusão:** Efeitos de hover e foco operando de forma suave e rápida via transições do Tailwind CSS.

### Dia 10 — Seção de Diferenciais e Metodologia Exclusiva
* **O que fazer:** Apresentar de forma clara os benefícios da contratação de um instrutor particular.
  - [ ] Criar a estrutura listando os diferenciais (Atenção 100% individualizada, correção milimétrica de postura, flexibilidade total de horários).
  - [ ] Aplicar o efeito GSAP "Stagger", fazendo com que cada item surja de baixo para cima com um pequeno atraso em relação ao anterior, criando uma leitura visual em cascata.
* **Critério de Conclusão:** Os cards de diferenciais entram de forma escalonada e fluida em conformidade com o movimento de scroll do usuário.

### Dia 11 — Seção de Depoimentos com Scroll Horizontal Controlado (Pin)
* **O que fazer:** Construir a área de prova social utilizando o travamento de tela para navegação lateral de depoimentos de alunos.
  - [ ] Desenvolver um bloco horizontal contendo os cards de depoimentos de alunos reais da plataforma.
  - [ ] Configurar o `ScrollTrigger` com a propriedade `pin: true`, fazendo com que a página trave o scroll vertical comum e mova a lista de depoimentos para o lado antes de liberar o restante do site.
* **Critério de Conclusão:** O travamento de tela e o deslizamento horizontal dos depoimentos funcionam sem trepidações visuais.

### Dia 12 — Interface Visual do Formulário de Pré-Agendamento
* **O que fazer:** Criar o formulário que captura as informações do interessado e inicia a jornada de agendamento de aulas.
  - [ ] Desenvolver os campos do formulário: Nome Completo, E-mail, Telefone/WhatsApp e Seleção da Modalidade desejada.
  - [ ] Criar os estados visuais de validação utilizando componentes nativos ou integrados ao React Hook Form.
* **Critério de Conclusão:** Formulário desenhado de forma responsiva, com validações visuais de campos obrigatórios ativas.

### Dia 13 — Calendário Interativo para Escolha de Horários
* **O que fazer:** Integrar o seletor de datas onde o aluno visualiza os dias da semana e os horários cadastrados como livres pelo professor.
  - [ ] Implementar um componente de calendário onde o usuário seleciona um dia específico do mês.
  - [ ] Desenvolver a lógica que dispara uma consulta ao banco de dados filtrando os horários cadastrados na tabela de disponibilidades e ocultando aqueles que já possuem agendamento confirmado.
* **Critério de Conclusão:** Clicar em um dia da semana exibe em tempo real apenas a lista de horários realmente disponíveis no banco de dados.

### Dia 14 — Rodapé e Elementos Informativos Obrigatórios
* **O que fazer:** Desenvolver o rodapé com informações de segurança, contato direto e direitos de propriedade intelectual.
  - [ ] Incluir links para as redes sociais com animações de hover nos ícones.
  - [ ] Adicionar nota informativa clara sobre as regras de cancelamento prévio de aulas e termos básicos.
* **Critério de Conclusão:** Rodapé finalizado, contendo links funcionais e alinhado com o design premium escuro da página.

### Dia 15 — Revisão da Landing Page e Ajustes de Otimização Mobile
* **O que fazer:** Ajustar o comportamento do site em dispositivos móveis, garantindo que os efeitos visuais fiquem leves e responsivos.
  - [ ] Adicionar condicionais para desativar ou simplificar os efeitos pesados de scroll do GSAP em telas menores do que 768px, priorizando a velocidade de carregamento em redes móveis (3G/4G).
  - [ ] Otimizar as imagens convertendo-as para o formato moderno `.webp`.
* **Critério de Conclusão:** Landing Page fluida e com carregamento ágil no celular, com botões de agendamento fáceis de tocar.

---

## FASE 3 — Painel Administrativo do Professor (Dias 16 a 24)

### Dia 16 — Sistema de Autenticação e Rota Segura Administrativa
* **O que fazer:** Implementar a barreira de segurança para garantir que apenas o professor tenha acesso ao painel de gerenciamento.
  - [ ] Criar a página restrita de login em `apps/admin`.
  - [ ] Implementar o middleware de autenticação que verifica os dados de sessão do professor antes de dar acesso às rotas internas do painel.
* **Critério de Conclusão:** Tentar acessar qualquer endereço de `/admin/dashboard` sem estar logado redireciona o usuário imediatamente para a tela de login.

### Dia 17 — Tela Geral de Controle (Dashboard Overview)
* **O que fazer:** Construir a central de controle do professor com as métricas mais importantes do dia a dia.
  - [ ] Desenvolver cards com os indicadores: Total de Aulas Agendadas no Mês, Faturamento Acumulado e Quantidade de Alunos Ativos.
  - [ ] Criar uma lista rápida exibindo as próximas aulas agendadas para o dia atual.
* **Critério de Conclusão:** Dashboard renderizado, exibindo os dados consolidados coletados diretamente do banco de dados.

### Dia 18 — Cronograma Semanal e Agenda do Professor
* **O que fazer:** Implementar uma interface no estilo de calendário semanal para organização visual das aulas particulares.
  - [ ] Criar a visualização de grade horária semanal integrada aos dados da tabela de agendamentos.
  - [ ] Adicionar cores diferenciadas para os cards de acordo com o status atual da aula (Ex: Verde para Confirmada, Amarelo para Pendente, Vermelho para Cancelada).
* **Critério de Conclusão:** Visualização semanal operando de forma correta, permitindo navegar entre as semanas anteriores e seguintes.

### Dia 19 — Gerenciador de Janelas de Disponibilidade de Horários
* **O que fazer:** Criar a interface onde o professor define as regras e os horários que estará livre para dar aulas em cada dia da semana.
  - [ ] Desenvolver uma tabela onde o professor pode selecionar o dia (ex: Segunda-feira) e adicionar intervalos de tempo (ex: das 08:00 às 11:00 e das 14:00 às 19:00).
  - [ ] Implementar la lógica de exclusão ou alteração rápida desses horários de trabalho.
* **Critério de Conclusão:** Salvar um novo intervalo de horários atualiza instantaneamente a agenda pública de marcação de aulas do site do aluno.

### Dia 20 — Módulo de Cadastro e Histórico de Alunos
* **O que fazer:** Centralizar o controle de contatos e informações detalhadas sobre os alunos frequentes.
  - [ ] Criar a listagem paginada contendo o nome, telefone, e-mail e quantidade total de aulas particulares já realizadas por cada aluno.
  - [ ] Adicionar um botão de atalho rápido que inicia uma conversa direta no WhatsApp utilizando o número cadastrado do aluno.
* **Critério de Conclusão:** Listagem operacional, permitindo pesquisar alunos pelo nome ou e-mail de forma ágil.

### Dia 21 — Controle Financeiro Avançado (O Módulo de Dinheiro)
* **O que fazer:** Desenvolver a área financeira para controle rigoroso de fluxo de caixa da atividade particular do professor.
  - [ ] Criar a lógica de lançamentos automáticos de entradas sempre que uma nova aula for marcada e confirmada pelo sistema.
  - [ ] Desenvolver um formulário simples para o professor registrar saídas/despesas manuais (Ex: Compra de novos kimonos, gastos com aluguel de espaço ou higienização de tatames).
  - [ ] Renderizar um gráfico de balanço financeiro mensal utilizando a biblioteca Recharts.
* **Critério de Conclusão:** Gráfico exibindo corretamente os lucros líquidos (Receitas menos as Despesas) baseados nos registros inseridos.

### Dia 22 — Painel Customizável de Conteúdo da Landing Page (CMS)
* **O que fazer:** Permitir que o professor altere textos institucionais e valores de cobrança sem a necessidade de modificar o código-fonte.
  - [ ] Desenvolver uma interface administrativa com campos editáveis para: Valor atual da hora-aula, descrição da biografia profissional e avisos gerais.
  - [ ] Salvar esses registros em uma tabela de configurações no banco de dados.
* **Critério de Conclusão:** Alterar o preço da hora-aula no painel administrativo reflete imediatamente nas novas simulações de agendamento feitas pelos alunos no site.

### Dia 23 — Upload Direto de Novas Fotos do Professor para a Nuvem
* **O que fazer:** Integrar o gerenciamento de arquivos de mídia com serviços na nuvem (Supabase Storage ou Cloudflare R2).
  - [ ] Configurar a rota ou Action responsável por receber arquivos de imagem vindos do painel administrativo.
  - [ ] Substituir o arquivo antigo na nuvem e atualizar a URL de referência salva nas configurações da landing page.
* **Critério de Conclusão:** Fazer o upload de uma foto no painel de controle altera de maneira automatizada a imagem principal que os alunos visualizam na landing page.

### Dia 24 — Validação Geral de Bloqueios e Regras Anti-Conflito
* **O que fazer:** Garantir a estabilidade lógica do sistema rodando testes manuais rigorosos nas agendas.
  - [ ] Validar através de concorrência: garantir que se o Aluno A confirmar a reserva para segunda-feira às 09:00, esse mesmo horário fique indisponível para seleção de qualquer outro usuário em frações de segundo.
* **Critério de Conclusão:** Sistema bloqueia com sucesso qualquer tentativa de marcação de horários duplicados.

---

## FASE 4 — Notificações, Polimento e Lançamento Oficial (Dias 25 a 30)

### Dia 25 — Automação de E-mails de Confirmação (Resend)
* **O que fazer:** Configurar disparos automáticos de e-mails informando sobre o andamento dos novos agendamentos.
  - [ ] Integrar o serviço Resend com a aplicação.
  - [ ] Desenvolver o template em HTML do e-mail do aluno confirmando os detalhes básicos da aula (Data, hora, endereço ou local).
  - [ ] Configurar o alerta de e-mail enviado ao professor contendo os dados de contato do novo aluno interessado.
* **Critério de Conclusão:** Concluir a simulação de agendamento e receber os e-mails formatados nas respectivas caixas de entrada de teste.

### Dia 26 — Integração com Links Automatizados de WhatsApp
* **O que fazer:** Criar facilitadores de comunicação externa utilizando a API de links do WhatsApp.
  - [ ] Criar um gerador de mensagens pré-formatadas no painel do administrador. Exemplo: `"Olá [Nome Aluno], aqui é o professor! Sua aula de [Modalidade] está confirmada para amanhã às [Horário]. Bons treinos!"`.
* **Critério de Conclusão:** Clicar no botão do WhatsApp abre a interface oficial do aplicativo com o texto de confirmação de aula pronto e preenchido.

### Dia 27 — Otimização Final de Performance e Carregamento Rápido
* **O que fazer:** Garantir notas altas de desempenho web em ferramentas de análise como o Google Lighthouse.
  - [ ] Remover códigos e bibliotecas não utilizadas no bundle final do projeto.
  - [ ] Aplicar técnicas de cacheamento nas listagens estáticas de serviços e biografias.
* **Critério de Conclusão:** Landing page com carregamento inicial completo inferior a 2 segundos em conexões padrão.

### Dia 28 — Teste Homologado de Ponta a Ponta do Sistema Integrado
* **O que fazer:** Validar o ecossistema completo simulando uma operação diária real.
  - [ ] Acessar a landing page pública, interagir com as animações de scroll e preencher o agendamento de uma aula particular.
  - [ ] Entrar na área do professor, checar se a notificação interna apareceu, se o valor financeiro foi atualizado no gráfico e se o horário foi devidamente bloqueado no calendário público.
* **Critério de Conclusão:** Todo o fluxo executado sem falhas, quebras de design ou inconsistências no banco de dados.

### Dia 29 — Importação de Dados Reais de Trabalho (Database Seeding)
* **O que fazer:** Limpar os registros e contas fictícias de teste e carregar a agenda com os dados reais de trabalho do instrutor.
  - [ ] Cadastrar a biografia real definitiva revisada e as imagens finais em alta definição de Kimono.
  - [ ] Preencher a grade de disponibilidades com os horários e locais verdadeiros de atendimento semanal do professor.
* **Critério de Conclusão:** Banco de dados limpo e populado apenas com os dados reais prontos para a estreia comercial do sistema.

### Dia 30 — Lançamento Oficial em Produção 🚀
* **O que fazer:** Apontar os domínios comerciais finais e liberar o acesso público ao ecossistema da plataforma.
  - [ ] Configurar o domínio definitivo contratado (Ex: `seunomejiujitsu.com.br`) apontando para os servidores da Vercel.
  - [ ] Mudar todos os ambientes e feature flags para o modo de produção definitivo.
* **Critério de Conclusão:** Site no ar, seguro (com protocolo HTTPS ativo), totalmente funcional e pronto para captar clientes de alto valor.

---

## 💬 Resposta para Entrevistas / Defesa de Portfólio Comercial

> *"Desenvolvi uma plataforma multi-aplicação (Monorepo) premium para agendamento e controle de aulas particulares de Jiu-Jitsu e Defesa Pessoal de alto padrão. O maior desafio técnico foi garantir a fidelidade visual de animações avançadas inspiradas em portfólios internacionais de alta performance (utilizando GSAP e Lenis Scroll), garantindo simultaneamente que a lógica crítica de negócios no backend bloqueasse de forma absoluta conflitos de horários em tempo real através de transações atómicas na base de dados. O painel administrativo entrega controlo financeiro completo de receitas e despesas operacionais, além de automações de avisos e gestão de CRM com histórico detalhado dos alunos."*
