export interface Skill {
  name: string;
  color: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
}

export interface Project {
  title: string;
  linkGithub: string;
  linkOnline: string;
  description: string;
  techStack: string[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export const skillCategories: SkillCategory[] = [
  { id: 'all', name: 'Todas', color: '#6366f1' },
  { id: 'languages', name: 'Linguagens', color: '#0078D7' },
  { id: 'frameworks', name: 'Frameworks', color: '#DD1B16' },
  { id: 'database', name: 'Banco de Dados', color: '#47A248' },
  { id: 'cloud', name: 'Cloud & DevOps', color: '#FF9900' },
  { id: 'testing', name: 'Testes', color: '#800080' },
  { id: 'architecture', name: 'Arquitetura', color: '#F7DF1E' },
  { id: 'tools', name: 'Ferramentas & Conhecimentos', color: '#5C2D91' },
];

export const skills: Skill[] = [
  { name: 'C#', color: '#0078D7', category: 'languages' },
  { name: 'TypeScript', color: '#0078D7', category: 'languages' },
  { name: 'JavaScript', color: '#0078D7', category: 'languages' },
  { name: 'Python', color: '#0078D7', category: 'languages' },
  { name: 'Node.js', color: '#0078D7', category: 'languages' },

  { name: 'ASP.NET Core', color: '#DD1B16', category: 'frameworks' },
  { name: 'ASP.NET MVC', color: '#DD1B16', category: 'frameworks' },
  { name: 'ASP.NET Web API', color: '#DD1B16', category: 'frameworks' },
  { name: 'Entity Framework', color: '#DD1B16', category: 'frameworks' },
  { name: 'Blazor', color: '#DD1B16', category: 'frameworks' },
  { name: 'Razor', color: '#DD1B16', category: 'frameworks' },
  { name: 'EF Migrations', color: '#DD1B16', category: 'frameworks' },
  { name: 'Express.js', color: '#DD1B16', category: 'frameworks' },
  { name: 'Angular', color: '#DD1B16', category: 'frameworks' },
  { name: 'Vue.js', color: '#DD1B16', category: 'frameworks' },
  { name: 'React', color: '#DD1B16', category: 'frameworks' },

  { name: 'SQL Server', color: '#47A248', category: 'database' },
  { name: 'PostgreSQL', color: '#47A248', category: 'database' },
  { name: 'MySQL', color: '#47A248', category: 'database' },
  { name: 'SQLite', color: '#47A248', category: 'database' },
  { name: 'RDS', color: '#47A248', category: 'database' },
  { name: 'MongoDB', color: '#47A248', category: 'database' },
  { name: 'RavenDB', color: '#47A248', category: 'database' },
  { name: 'Redis', color: '#47A248', category: 'database' },
  { name: 'RabbitMQ', color: '#47A248', category: 'database' },
  { name: 'IBM MQ', color: '#47A248', category: 'database' },
  { name: 'MassTransit', color: '#47A248', category: 'database' },
  { name: 'Azure Service Bus', color: '#47A248', category: 'database' },

  { name: 'AWS', color: '#FF9900', category: 'cloud' },
  { name: 'Azure', color: '#FF9900', category: 'cloud' },
  { name: 'EC2', color: '#FF9900', category: 'cloud' },
  { name: 'ECS', color: '#FF9900', category: 'cloud' },
  { name: 'S3', color: '#FF9900', category: 'cloud' },
  { name: 'CloudFront', color: '#FF9900', category: 'cloud' },
  { name: 'CodeDeploy', color: '#FF9900', category: 'cloud' },
  { name: 'CloudWatch', color: '#FF9900', category: 'cloud' },
  { name: 'Load Balancing', color: '#FF9900', category: 'cloud' },
  { name: 'Docker', color: '#FF9900', category: 'cloud' },
  { name: 'Kubernetes', color: '#FF9900', category: 'cloud' },
  { name: 'Azure DevOps', color: '#FF9900', category: 'cloud' },
  { name: 'GitHub Actions', color: '#FF9900', category: 'cloud' },
  { name: 'CI/CD', color: '#FF9900', category: 'cloud' },

  { name: 'xUnit', color: '#800080', category: 'testing' },
  { name: 'NUnit', color: '#800080', category: 'testing' },
  { name: 'Jest', color: '#800080', category: 'testing' },
  { name: 'SpecFlow', color: '#800080', category: 'testing' },
  { name: 'Moq', color: '#800080', category: 'testing' },
  { name: 'Coverlet', color: '#800080', category: 'testing' },
  { name: 'TDD', color: '#800080', category: 'testing' },
  { name: 'BDD', color: '#800080', category: 'testing' },

  { name: 'Clean Architecture', color: '#F7DF1E', category: 'architecture' },
  { name: 'SOLID', color: '#F7DF1E', category: 'architecture' },
  { name: 'DRY', color: '#F7DF1E', category: 'architecture' },
  { name: 'KISS', color: '#F7DF1E', category: 'architecture' },
  { name: 'DDD', color: '#F7DF1E', category: 'architecture' },
  { name: 'CQRS', color: '#F7DF1E', category: 'architecture' },
  { name: 'Repository Pattern', color: '#F7DF1E', category: 'architecture' },
  { name: 'Unit of Work', color: '#F7DF1E', category: 'architecture' },
  { name: 'Factory Pattern', color: '#F7DF1E', category: 'architecture' },
  { name: 'Strategy Pattern', color: '#F7DF1E', category: 'architecture' },
  { name: 'Decorator Pattern', color: '#F7DF1E', category: 'architecture' },
  { name: 'Mediator Pattern', color: '#F7DF1E', category: 'architecture' },
  { name: 'Dependency Injection', color: '#F7DF1E', category: 'architecture' },
  { name: 'API Gateway', color: '#F7DF1E', category: 'architecture' },

  { name: 'Visual Studio', color: '#5C2D91', category: 'tools' },
  { name: 'Visual Studio Code', color: '#5C2D91', category: 'tools' },
  { name: 'JetBrains Tools', color: '#5C2D91', category: 'tools' },
  { name: 'Git', color: '#5C2D91', category: 'tools' },
  { name: 'SonarQube', color: '#5C2D91', category: 'tools' },
  { name: 'REST APIs', color: '#5C2D91', category: 'tools' },
  { name: 'Webhooks', color: '#5C2D91', category: 'tools' },
  { name: 'JWT', color: '#5C2D91', category: 'tools' },
  { name: 'OAuth2', color: '#5C2D91', category: 'tools' },
  { name: 'Power BI', color: '#5C2D91', category: 'tools' },
  { name: 'Agile', color: '#5C2D91', category: 'tools' },
  { name: 'Scrum', color: '#5C2D91', category: 'tools' },
  { name: 'Kanban', color: '#5C2D91', category: 'tools' },
];

export const projects: Project[] = [
  {
    title: 'Cumes Brasil',
    linkGithub: 'https://github.com/rafael-ventura/cumes-brasil',
    linkOnline: 'https://www.cumesbrasil.com.br',
    description:
      'PWA para escaladores do Rio de Janeiro, permitindo criar coleções, marcar escaladas e visualizar croquis.',
    techStack: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Node.js'],
  },
  {
    title: 'Spotify Timeline',
    linkGithub: 'https://github.com/rafael-ventura/spotify-timeline',
    linkOnline: 'https://spotify.rafael-ventura.dev.br',
    description: 'Visualize seu histórico do Spotify, crie playlists e gere imagens para compartilhar.',
    techStack: ['Vue.js', 'Spotify API', 'Node.js'],
  },
  {
    title: 'Vue Pokedex',
    linkGithub: 'https://github.com/rafael-ventura/vue-pokedex',
    linkOnline: 'https://pokedex.rafael-ventura.dev.br',
    description: 'Uma pokedex estilizada com a primeira geração de pokémons, feita com Vue.js.',
    techStack: ['Vue.js', 'PokéAPI', 'CSS'],
  },
  {
    title: 'Vai Bandeijar?',
    linkGithub: 'https://github.com/rafael-ventura/vai-bandeijar',
    linkOnline: 'https://vai-bandeijar.rafael-ventura.dev.br',
    description: 'App para disponibilizar o cardápio semanal da Unirio via web, Telegram e email.',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'Pipeline CI/CD'],
  },
];

export const jobs: Job[] = [
  {
    title: 'Desenvolvedor Full Stack',
    company: 'iUUL',
    period: 'Setembro 2024 - Presente',
    highlights: [
      'Mentoria e Liderança Técnica de 3 turmas (2 backend e 1 frontend) em .NET/C#, Angular e Node.js',
      'Gerenciamento de sprints, kanbans e backlog utilizando Azure DevOps como Product Owner e Scrum Master',
      'Configuração de pipelines CI/CD em AWS e Azure, otimizando fluxos de entrega contínua',
      'Suporte a aplicações em produção, otimizando infraestrutura AWS e migrando de Amplify para S3 + CloudFront',
      'Implementação de Clean Architecture garantindo manutenibilidade e eficiência das soluções',
      'Trabalho em equipes multidisciplinares aplicando metodologias ágeis (Scrum)',
    ],
  },
  {
    title: 'Desenvolvedor Full Stack Pleno',
    company: 'JJ4Tech',
    period: 'Janeiro 2023 - Março 2024',
    highlights: [
      'Desenvolvimento de microsserviços para sistemas de pagamentos instantâneos FED Now',
      'Implementação de mensageria avançada com RabbitMQ e IBM MQ',
      'Modelagem de sistemas conforme ISO 20022 para transações financeiras globais',
      'Projeto e implementação de sistemas orientados a eventos com Clean Architecture, SOLID e DDD',
      'Estruturação e manutenção do ambiente DevOps centralizando gestão de microsserviços',
      'Deploy e orquestração em AWS (ECS, EC2, S3, CloudFront) garantindo alta disponibilidade',
      'Implantação de testes unitários e integração, reduzindo falhas entre 62-68%',
    ],
  },
  {
    title: 'Desenvolvedor Full Stack',
    company: 'SINQIA',
    period: 'Fevereiro 2021 - Outubro 2022',
    highlights: [
      'Desenvolvimento fullstack em .NET e JavaScript (Angular e Vue) para sistemas bancários críticos',
      'Otimização do portal de gestão de carteiras de empréstimos',
      'Modelagem e administração de bancos de dados relacionais e não relacionais (SQL Server e MongoDB)',
      'Criação e manutenção de Stored Procedures complexas para transações financeiras',
      'Atuação como revisor de código (pull requests) promovendo boas práticas',
      'Suporte contínuo a sistemas críticos do banco, resolvendo incidentes com agilidade',
    ],
  },
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Itaú',
    period: 'Novembro 2018 - Janeiro 2021',
    highlights: [
      'Desenvolvimento de aplicações fullstack com .NET e Angular para sistemas bancários críticos',
      'Gerenciação e manutenção da estrutura de aplicações bancárias com compliance financeiro',
      'Otimização de procedures e índices SQL, melhorando desempenho em relatórios financeiros',
      'Colaboração em times ágeis (Scrum) com plannings, code reviews e entregas contínuas',
      'Refatoração do sistema de carteiras de investimentos para LGPD, resultando em 20% mais eficiência',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Backend',
    description:
      'Desenvolvimento de APIs robustas e sistemas escaláveis com arquiteturas limpas. Implementação de padrões SOLID, DDD e Clean Architecture para garantir manutenibilidade e testabilidade. Experiência em sistemas críticos do setor financeiro com alta disponibilidade e performance.',
  },
  {
    title: 'Frontend',
    description:
      'Criação de interfaces responsivas e otimizadas para sistemas críticos. Desenvolvimento de aplicações web com foco em experiência do usuário e performance. Implementação de componentes reutilizáveis e arquiteturas escaláveis para aplicações complexas do setor financeiro.',
  },
  {
    title: 'Banco de Dados & Mensageria',
    description:
      'Modelagem e administração de bancos de dados relacionais e não relacionais. Implementação de sistemas orientados a eventos com mensageria avançada. Otimização de consultas e procedures para sistemas de alta performance. Experiência em transações financeiras críticas e compliance.',
  },
  {
    title: 'DevOps & Cloud',
    description:
      'Configuração e manutenção de pipelines de CI/CD para entrega contínua. Deploy e orquestração de aplicações em ambientes cloud com alta disponibilidade. Implementação de infraestrutura como código e monitoramento de sistemas críticos. Otimização de custos e performance em ambientes de produção.',
  },
  {
    title: 'Automação & Análise de Dados',
    description:
      'Desenvolvimento de soluções de automação para processos de negócio utilizando plataformas de workflow. Construção de dashboards dinâmicos e análise de dados para tomada de decisões estratégicas. Implementação de crawlers e sistemas de extração de dados da web para coleta e processamento de informações.',
  },
];
