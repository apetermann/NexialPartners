/**
 * Conteúdo do site nas duas línguas.
 *
 * Diferente da versão anterior (onde o português vivia no HTML e o inglês num
 * dicionário à parte), aqui as duas línguas são dados. O Astro gera páginas
 * estáticas separadas para cada uma — /sobre e /en/about — então cada idioma
 * tem sua própria URL indexável, sem depender de JavaScript para traduzir.
 *
 * Para editar um texto: encontre a chave e altere o valor da língua desejada.
 */

export const LANGS = ['pt', 'en'];
export const DEFAULT_LANG = 'pt';

/** Rotas equivalentes entre línguas, para o seletor de idioma e o hreflang. */
export const ROUTES = {
  home:      { pt: '',           en: '' },
  modelo:    { pt: 'modelo',     en: 'model' },
  servicos:  { pt: 'servicos',   en: 'services' },
  mineracao: { pt: 'mineracao',  en: 'mining' },
  partners:  { pt: 'partners',   en: 'partners' },
  contato:   { pt: 'contato',    en: 'contact' },
};

export const t = {
  /* ═══════════════════════════════════════════════════ marca e navegação */
  brand: { pt: 'Nexial Partners', en: 'Nexial Partners' },

  nav: {
    modelo:    { pt: 'O Modelo',   en: 'The Model' },
    servicos:  { pt: 'Serviços',   en: 'Services' },
    mineracao: { pt: 'Mineração',  en: 'Mining' },
    partners:  { pt: 'Partners',   en: 'Partners' },
    contato:   { pt: 'Contato',    en: 'Contact' },
    cta:       { pt: 'Fale conosco', en: 'Get in touch' },
  },

  a11y: {
    skip:     { pt: 'Ir para o conteúdo',   en: 'Skip to content' },
    nav:      { pt: 'Navegação principal',  en: 'Main navigation' },
    lang:     { pt: 'Idioma',               en: 'Language' },
    menu:     { pt: 'Abrir menu',           en: 'Open menu' },
    heroArt:  {
      pt: 'Animação abstrata de uma malha de pontos conectados, referência ao traçado de circuito da marca.',
      en: 'Abstract animation of a connected point mesh, referencing the circuit motif in the brand mark.',
    },
  },

  /* ═════════════════════════════════════════════════════════════ home */
  home: {
    metaTitle: {
      pt: 'Nexial Partners — Engenharia de alta performance potencializada por IA',
      en: 'Nexial Partners — High-performance engineering powered by AI',
    },
    metaDesc: {
      pt: 'A Nexial Partners une especialistas seniores em engenharia e mineração a Inteligência Artificial proprietária para entregar projetos mais inteligentes, eficientes e valiosos.',
      en: 'Nexial Partners combines senior engineering and mining specialists with proprietary Artificial Intelligence to deliver smarter, more efficient and more valuable projects.',
    },
    eyebrow: {
      pt: 'Engenharia, mineração, infraestrutura, transformação digital e desenvolvimento de negócios',
      en: 'Engineering, mining, infrastructure, digital transformation and business development',
    },
    title: {
      pt: ['Engenharia de', 'alta performance,', 'potencializada por IA.'],
      en: ['High-performance', 'engineering,', 'powered by AI.'],
    },
    lead: {
      pt: 'A próxima geração da engenharia combina experiência, tecnologia e visão de negócios para entregar projetos mais inteligentes, eficientes e valiosos.',
      en: 'The next generation of engineering combines experience, technology and business vision to deliver smarter, more efficient and more valuable projects.',
    },
    ctaPrimary:   { pt: 'Vamos conversar',   en: "Let's talk" },
    ctaSecondary: { pt: 'Conheça o modelo',  en: 'See the model' },
    scroll:       { pt: 'Role para explorar', en: 'Scroll to explore' },
  },

  /* ═════════════════════════════════════════════════════════ contexto */
  context: {
    eyebrow: { pt: 'O contexto', en: 'The context' },
    title: {
      pt: 'A engenharia mudou — e a mineração sente primeiro.',
      en: 'Engineering has changed — and mining feels it first.',
    },
    lead: {
      pt: 'A complexidade dos projetos aumentou e os métodos tradicionais já não acompanham essa velocidade.',
      en: 'Project complexity has increased, and traditional methods no longer keep pace.',
    },
    items: [
      {
        title: { pt: 'Projetos mais complexos', en: 'More complex projects' },
        text:  { pt: 'Mais interfaces e disciplinas por projeto.', en: 'More interfaces and disciplines per project.' },
      },
      {
        title: { pt: 'Pressão sobre CAPEX e OPEX', en: 'Pressure on CAPEX and OPEX' },
        text:  { pt: 'Eficiência de capital e custo sem trégua.', en: 'Relentless pressure on capital and cost efficiency.' },
      },
      {
        title: { pt: 'Escassez de seniores', en: 'Scarcity of senior talent' },
        text:  { pt: 'Conhecimento crítico em poucas pessoas.', en: 'Critical knowledge held by very few people.' },
      },
      {
        title: { pt: 'Prazos cada vez menores', en: 'Ever shorter deadlines' },
        text:  { pt: 'Janelas de decisão mais curtas.', en: 'Narrower decision windows.' },
      },
      {
        title: { pt: 'Produtividade e ESG', en: 'Productivity and ESG' },
        text:  { pt: 'Mais entrega por hora, com rastreabilidade.', en: 'More output per hour, with full traceability.' },
      },
    ],
    note: {
      pt: 'Processos fragmentados, intensivos em horas-homem e com baixa automação.',
      en: 'Fragmented processes, man-hour intensive and with low automation.',
    },
    noteStrong: { pt: 'A engenharia precisa evoluir.', en: 'Engineering must evolve.' },
  },

  /* ═══════════════════════════════════════════════════════════ modelo */
  model: {
    metaTitle: { pt: 'O Modelo — Nexial Partners', en: 'The Model — Nexial Partners' },
    metaDesc: {
      pt: 'O Nexial Performance Framework™ integra especialistas seniores, Inteligência Artificial proprietária e visão de negócios num único fluxo de execução.',
      en: 'The Nexial Performance Framework™ integrates senior specialists, proprietary Artificial Intelligence and business vision into a single execution flow.',
    },
    eyebrow: { pt: 'O modelo Nexial', en: 'The Nexial model' },
    statementA: { pt: 'A experiência decide.', en: 'Experience decides.' },
    statementB: { pt: 'A Inteligência Artificial executa.', en: 'Artificial Intelligence executes.' },

    aboutEyebrow: { pt: 'Quem somos', en: 'Who we are' },
    aboutTitle:   { pt: 'Experiência potencializada por IA.', en: 'Experience amplified by AI.' },
    aboutP1: {
      pt: 'A Nexial reúne cinco especialistas com experiência internacional em engenharia, mineração, infraestrutura, transformação digital e desenvolvimento de negócios.',
      en: 'Nexial brings together five specialists with international experience in engineering, mining, infrastructure, digital transformation and business development.',
    },
    aboutP2: {
      pt: 'A Inteligência Artificial não substitui décadas de experiência. Ela potencializa a capacidade dos melhores especialistas.',
      en: 'Artificial Intelligence does not replace decades of experience. It amplifies the capability of the very best specialists.',
    },
    frameworkTag: {
      pt: 'o modelo que integra especialistas, IA, dados e negócios.',
      en: 'the model that integrates specialists, AI, data and business.',
    },

    equationLabel: { pt: 'Nosso modelo', en: 'Our model' },
    eq: [
      { pt: 'Experiência sênior',                 en: 'Senior experience' },
      { pt: 'Inteligência Artificial proprietária', en: 'Proprietary Artificial Intelligence' },
      { pt: 'Visão estratégica de negócios',      en: 'Strategic business vision' },
    ],
    eqResult: { pt: 'Engenharia de alta performance', en: 'High-performance engineering' },

    flowEyebrow: { pt: 'Como operamos', en: 'How we operate' },
    flowTitle: {
      pt: 'Do especialista ao projeto de alta performance.',
      en: 'From the specialist to the high-performance project.',
    },
    flowLead: {
      pt: 'Um único fluxo operacional integra curadoria técnica, arquitetura de IA e automação — o Nexial Performance Framework™.',
      en: 'A single operating flow integrates technical curation, AI architecture and automation — the Nexial Performance Framework™.',
    },
    flowSteps: [
      { pt: 'Especialistas',                  en: 'Specialists' },
      { pt: 'Curadoria técnica',              en: 'Technical curation' },
      { pt: 'Arquitetura de IA proprietária', en: 'Proprietary AI architecture' },
      { pt: 'Agentes inteligentes',           en: 'Intelligent agents' },
      { pt: 'Automação',                      en: 'Automation' },
      { pt: 'Projetos de alta performance',   en: 'High-performance projects' },
    ],
    flowNote: {
      pt: 'As decisões continuam com quem tem trinta anos de obra.',
      en: 'Decisions stay with those who have thirty years in the field.',
    },
    flowNoteStrong: {
      pt: 'A Inteligência Artificial acelera a execução.',
      en: 'Artificial Intelligence accelerates execution.',
    },
  },

  /* ═════════════════════════════════════════════════════════ serviços */
  services: {
    metaTitle: { pt: 'Serviços — Nexial Partners', en: 'Services — Nexial Partners' },
    metaDesc: {
      pt: 'Engenharia, Inteligência Artificial, Estratégia e Capital: quatro frentes integradas numa só arquitetura de execução.',
      en: 'Engineering, Artificial Intelligence, Strategy and Capital: four fronts integrated into a single execution architecture.',
    },
    eyebrow: { pt: 'O que entregamos', en: 'What we deliver' },
    title:   { pt: 'Quatro frentes, uma só arquitetura.', en: 'Four fronts, one single architecture.' },
    lead: {
      pt: 'As quatro frentes atendem estágios diferentes da vida de um ativo, com a mesma equipe e a mesma base técnica por trás.',
      en: 'The four fronts serve different stages in the life of an asset, backed by the same team and the same technical base.',
    },
    items: [
      {
        title: { pt: 'Engenharia', en: 'Engineering' },
        text:  { pt: 'FEL 1–3, viabilidade e engenharia conceitual e básica.', en: 'FEL 1–3, feasibility, and conceptual and basic engineering.' },
        tags: [
          { pt: 'Estudos FEL',          en: 'FEL studies' },
          { pt: 'PFS/FS/DFS',           en: 'PFS/FS/DFS' },
          { pt: 'Due diligence técnica', en: 'Technical due diligence' },
        ],
      },
      {
        title: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' },
        text:  { pt: 'Agentes especialistas e automação no ciclo de engenharia.', en: 'Specialist agents and automation across the engineering cycle.' },
        tags: [
          { pt: 'Agentes',              en: 'Agents' },
          { pt: 'Engenharia assistida', en: 'AI-assisted engineering' },
          { pt: 'Gestão do conhecimento', en: 'Knowledge management' },
        ],
      },
      {
        title: { pt: 'Estratégia', en: 'Strategy' },
        text:  { pt: 'Do portfólio de ativos ao roadmap de transformação digital.', en: 'From the asset portfolio to the digital transformation roadmap.' },
        tags: [
          { pt: 'Portfólio',             en: 'Portfolio' },
          { pt: 'Roadmaps',              en: 'Roadmaps' },
          { pt: 'Excelência operacional', en: 'Operational excellence' },
        ],
      },
      {
        title: { pt: 'Capital', en: 'Capital' },
        text:  { pt: 'Estruturação e valorização de ativos para acesso a investidores.', en: 'Asset structuring and value creation for investor access.' },
        tags: [
          { pt: 'Valuation',                   en: 'Valuation' },
          { pt: 'Estruturação',                en: 'Structuring' },
          { pt: 'Preparação para investimentos', en: 'Investment readiness' },
        ],
      },
    ],
  },

  /* ════════════════════════════════════════════════════════ mineração */
  mining: {
    metaTitle: { pt: 'Mineração — Nexial Partners', en: 'Mining — Nexial Partners' },
    metaDesc: {
      pt: 'Inteligência aplicada em todo o ciclo de vida do ativo mineral: da exploração e recursos à operação assistida por agentes.',
      en: 'Intelligence applied across the entire mineral asset lifecycle: from exploration and resources to agent-assisted operation.',
    },
    eyebrow: { pt: 'Aplicações na mineração', en: 'Applications in mining' },
    title:   { pt: 'Inteligência em todo o ciclo de vida do ativo.', en: 'Intelligence across the entire asset lifecycle.' },
    lead: {
      pt: 'Atuamos nas quatro fases do ciclo de vida do ativo. O que muda entre elas é o tipo de decisão em jogo e o dado que a sustenta.',
      en: 'We work across the four phases of the asset lifecycle. What changes between them is the kind of decision at stake and the data behind it.',
    },
    phases: [
      {
        title: { pt: 'Exploração e recursos', en: 'Exploration and resources' },
        items: [
          { pt: 'Avaliação de ativos minerais', en: 'Mineral asset valuation' },
          { pt: 'Modelagem geológica',          en: 'Geological modelling' },
          { pt: 'Due diligence técnica',        en: 'Technical due diligence' },
        ],
      },
      {
        title: { pt: 'Estudos e projeto', en: 'Studies and design' },
        items: [
          { pt: 'Estudos FEL',          en: 'FEL studies' },
          { pt: 'Planejamento mineiro', en: 'Mine planning' },
          { pt: 'Otimização de CAPEX',  en: 'CAPEX optimisation' },
        ],
      },
      {
        title: { pt: 'Implantação', en: 'Implementation' },
        items: [
          { pt: 'Engenharia digital',     en: 'Digital engineering' },
          { pt: 'Digital twins',          en: 'Digital twins' },
          { pt: 'Gestão do conhecimento', en: 'Knowledge management' },
        ],
      },
      {
        title: { pt: 'Operação', en: 'Operation' },
        items: [
          { pt: 'Otimização de OPEX',      en: 'OPEX optimisation' },
          { pt: 'Inteligência operacional', en: 'Operational intelligence' },
          { pt: 'Descarbonização e ESG',    en: 'Decarbonisation and ESG' },
        ],
      },
    ],
    note: {
      pt: 'Da avaliação do recurso à operação assistida por agentes.',
      en: 'From resource assessment to agent-assisted operation.',
    },
    noteStrong: {
      pt: 'Dados e experiência viram decisões de maior qualidade.',
      en: 'Data and experience become higher-quality decisions.',
    },
  },

  /* ══════════════════════════════════════════════════════ por que nós */
  why: {
    eyebrow: { pt: 'Por que a Nexial', en: 'Why Nexial' },
    title:   { pt: 'Muito além da engenharia tradicional.', en: 'Well beyond traditional engineering.' },
    colA:    { pt: 'Engenharia tradicional', en: 'Traditional engineering' },
    colB:    { pt: 'Nexial', en: 'Nexial' },
    caption: {
      pt: 'Comparação entre engenharia tradicional e o modelo Nexial',
      en: 'Comparison between traditional engineering and the Nexial model',
    },
    rows: [
      { a: { pt: 'Horas-homem',           en: 'Man-hours' },          b: { pt: 'Especialistas seniores', en: 'Senior specialists' } },
      { a: { pt: 'Conhecimento disperso', en: 'Dispersed knowledge' }, b: { pt: 'IA proprietária',        en: 'Proprietary AI' } },
      { a: { pt: 'Processos manuais',     en: 'Manual processes' },    b: { pt: 'Automação inteligente',  en: 'Intelligent automation' } },
      { a: { pt: 'Baixa automação',       en: 'Low automation' },      b: { pt: 'Curadoria técnica',      en: 'Technical curation' } },
      { a: { pt: 'Equipes maiores',       en: 'Larger teams' },        b: { pt: 'Alta performance',       en: 'High performance' } },
    ],
    statText: {
      pt: 'Até 10× mais produtividade nos ciclos de engenharia — em velocidade, custo e qualidade.',
      en: 'Up to 10× more productivity across engineering cycles — in speed, cost and quality.',
    },
    statFoot: {
      pt: '*Dependendo da natureza do projeto e do nível de automação · Nexial Performance Framework™',
      en: '*Depending on the nature of the project and the level of automation · Nexial Performance Framework™',
    },
  },

  /* ═════════════════════════════════════════════════════════ partners */
  partners: {
    metaTitle: { pt: 'Partners — Nexial Partners', en: 'Partners — Nexial Partners' },
    metaDesc: {
      pt: 'Cinco especialistas com experiência internacional em engenharia, mineração, transformação digital e mercado de capitais.',
      en: 'Five specialists with international experience in engineering, mining, digital transformation and capital markets.',
    },
    eyebrow: { pt: 'Os partners', en: 'The partners' },
    title:   { pt: 'Experiência com nome e sobrenome.', en: 'Experience with a name attached.' },
    lead: {
      pt: 'Cinco sócios, cada um com décadas de decisão tomada em obra. Quem conduz o projeto é quem assina.',
      en: 'Five partners, each with decades of decisions made on site. Whoever leads the project is the one who signs it.',
    },
    /* Ordem alfabética pelo nome como aparece na página. */
    people: [
      {
        name: 'Alex Petermann',
        photo: 'alex-petermann',
        bio: {
          pt: 'Engenheiro de minas, 20+ anos em quatro continentes. Planejamento de mina, PFS/FS/DFS, avaliação econômica e acesso a capital. Fundador da DeCarbonMine.',
          en: 'Mining engineer, 20+ years across four continents. Mine planning, PFS/FS/DFS, economic assessment and access to capital. Founder of DeCarbonMine.',
        },
      },
      {
        name: 'Antonio Neves Santana',
        photo: 'antonio-neves',
        bio: {
          pt: 'Engenheiro de minas, MSc, com MBA em gestão de negócios e passagem pelas principais mineradoras do país. Engenharia de processo, M&A e governança.',
          en: 'Mining engineer, MSc, with an MBA in business management and experience at the country’s leading mining companies. Process engineering, M&A and governance.',
        },
      },
      {
        name: 'Arley Costa',
        photo: 'arley-costa',
        bio: {
          pt: 'Ex-diretor global de transformação digital da AtkinsRéalis. BIM 3D/4D/5D, gêmeos digitais, LiDAR, LLMs e agentes autônomos. Fundador da Digitallis.',
          en: 'Former global director of digital transformation at AtkinsRéalis. BIM 3D/4D/5D, digital twins, LiDAR, LLMs and autonomous agents. Founder of Digitallis.',
        },
      },
      {
        name: 'Iran Zan',
        photo: 'iran-zan',
        bio: {
          pt: 'Geólogo (UNICAMP) e Competent Person AusIMM. Ouro, cobre pórfiro, minerais pesados e lítio desde 2011. Pioneiro na Sigma Lithium.',
          en: 'Geologist (UNICAMP) and AusIMM Competent Person. Gold, porphyry copper, heavy minerals and lithium since 2011. Pioneer at Sigma Lithium.',
        },
      },
      {
        name: 'Noeber Orsine',
        photo: 'noeber-orsine',
        bio: {
          pt: '30+ anos no Brasil, África e Austrália. Greenfield e brownfield com equipes de até 3.000 pessoas e CAPEX de US$ 2,1 bi. JORC, NI 43-101 e S-K 1300.',
          en: '30+ years across Brazil, Africa and Australia. Greenfield and brownfield with teams of up to 3,000 people and CAPEX of US$ 2.1bn. JORC, NI 43-101 and S-K 1300.',
        },
      },
    ],
    complementLabel: {
      pt: 'Como se complementam',
      en: 'How they complement each other',
    },
    complementText: {
      pt: 'Cobrimos a mesma cadeia de valor de ponta a ponta: recurso, estudo, execução, digitalização e capital. Como as cinco competências decidem juntas desde o primeiro estudo, risco técnico e custo de capital entram na conta ao mesmo tempo, em vez de aparecerem em revisões sucessivas.',
      en: 'We cover the same value chain end to end: resource, study, execution, digitalisation and capital. Because the five competencies decide together from the very first study, technical risk and cost of capital enter the equation at the same time, instead of surfacing in successive revisions.',
    },
  },

  /* ══════════════════════════════════════════════════════════ contato */
  contact: {
    metaTitle: { pt: 'Contato — Nexial Partners', en: 'Contact — Nexial Partners' },
    metaDesc: {
      pt: 'Fale com a Nexial Partners. Experiência sênior, IA proprietária e visão de negócios em um único modelo de execução.',
      en: 'Talk to Nexial Partners. Senior experience, proprietary AI and business vision in a single execution model.',
    },
    eyebrow: { pt: 'Contato', en: 'Contact' },
    title:   { pt: 'Vamos conversar.', en: "Let's talk." },
    lead: {
      pt: 'O futuro da sua engenharia começa com uma conversa. Experiência sênior, IA proprietária e visão de negócios em um único modelo de execução.',
      en: 'The future of your engineering starts with a conversation. Senior experience, proprietary AI and business vision in a single execution model.',
    },
    emailLabel:   { pt: 'E-mail',     en: 'Email' },
    addressLabel: { pt: 'Escritório', en: 'Office' },
  },

  /* ═══════════════════════════════════════════════════════════ rodapé */
  footer: {
    addressL1: {
      pt: 'Av. Augusto de Lima, 479 · Sala 614 · Centro',
      en: '479 Augusto de Lima Ave. · Suite 614 · Centro',
    },
    addressL2: {
      pt: 'Belo Horizonte · MG · CEP 30.190-005 · Brasil',
      en: 'Belo Horizonte · MG · 30190-005 · Brazil',
    },
    rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
    nav:    { pt: 'Navegação', en: 'Navigation' },
  },

  /* ═════════════════════════════════════════════════════════════ 404 */
  notFound: {
    title: { pt: 'Página não encontrada', en: 'Page not found' },
    text:  { pt: 'A página que você procura não existe ou foi movida.', en: 'The page you are looking for does not exist or has been moved.' },
    cta:   { pt: 'Voltar ao início', en: 'Back to home' },
  },
};

/** Dados de contato — não mudam entre línguas. */
export const CONTACT = {
  email: 'contato@nexialpartners.com',
  site: 'nexialpartners.com',   // sem www: e o canonical, o www redireciona
  legalName: 'Nexial Partners Ltda.',
};
