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
  { id: 'all', name: 'All', color: '#6366f1' },
  { id: 'core', name: 'Core', color: '#0078D7' },
  { id: 'messaging', name: 'Messaging', color: '#DD1B16' },
  { id: 'architecture', name: 'Architecture', color: '#F7DF1E' },
  { id: 'frontend', name: 'Frontend', color: '#47A248' },
  { id: 'cloud', name: 'Cloud & DevOps', color: '#FF9900' },
  { id: 'observability', name: 'Observability', color: '#00BCD4' },
  { id: 'testing', name: 'Testing', color: '#800080' },
  { id: 'ai', name: 'AI-Assisted Dev', color: '#5C2D91' },
];

export const skills: Skill[] = [
  { name: 'C#', color: '#0078D7', category: 'core' },
  { name: '.NET Core', color: '#0078D7', category: 'core' },
  { name: '.NET Framework', color: '#0078D7', category: 'core' },
  { name: 'ASP.NET Core', color: '#0078D7', category: 'core' },
  { name: 'RESTful APIs', color: '#0078D7', category: 'core' },
  { name: 'SOAP', color: '#0078D7', category: 'core' },
  { name: 'Entity Framework', color: '#0078D7', category: 'core' },
  { name: 'NHibernate', color: '#0078D7', category: 'core' },
  { name: 'SQL Server', color: '#0078D7', category: 'core' },
  { name: 'MongoDB', color: '#0078D7', category: 'core' },
  { name: 'Redis', color: '#0078D7', category: 'core' },

  { name: 'RabbitMQ', color: '#DD1B16', category: 'messaging' },
  { name: 'MassTransit', color: '#DD1B16', category: 'messaging' },
  { name: 'Pub/Sub', color: '#DD1B16', category: 'messaging' },
  { name: 'MediatR', color: '#DD1B16', category: 'messaging' },
  { name: 'IBM MQ', color: '#DD1B16', category: 'messaging' },
  { name: 'CQRS', color: '#DD1B16', category: 'messaging' },
  { name: 'Background Workers', color: '#DD1B16', category: 'messaging' },
  { name: 'Idempotency', color: '#DD1B16', category: 'messaging' },

  { name: 'Microservices', color: '#F7DF1E', category: 'architecture' },
  { name: 'Event-Driven Architecture', color: '#F7DF1E', category: 'architecture' },
  { name: 'Clean Architecture', color: '#F7DF1E', category: 'architecture' },
  { name: 'Domain-Driven Design', color: '#F7DF1E', category: 'architecture' },
  { name: 'SOLID', color: '#F7DF1E', category: 'architecture' },
  { name: 'MVC', color: '#F7DF1E', category: 'architecture' },
  { name: 'MVVM', color: '#F7DF1E', category: 'architecture' },
  { name: 'Multi-Tenant Systems', color: '#F7DF1E', category: 'architecture' },

  { name: 'Angular', color: '#47A248', category: 'frontend' },
  { name: 'React', color: '#47A248', category: 'frontend' },
  { name: 'Blazor', color: '#47A248', category: 'frontend' },
  { name: 'Knockout.js', color: '#47A248', category: 'frontend' },

  { name: 'AWS', color: '#FF9900', category: 'cloud' },
  { name: 'Docker', color: '#FF9900', category: 'cloud' },
  { name: 'Azure', color: '#FF9900', category: 'cloud' },
  { name: 'CI/CD', color: '#FF9900', category: 'cloud' },
  { name: 'Kubernetes', color: '#FF9900', category: 'cloud' },
  { name: 'GitHub Actions', color: '#FF9900', category: 'cloud' },
  { name: 'Azure DevOps', color: '#FF9900', category: 'cloud' },

  { name: 'OpenTelemetry', color: '#00BCD4', category: 'observability' },
  { name: 'Prometheus', color: '#00BCD4', category: 'observability' },
  { name: 'Grafana', color: '#00BCD4', category: 'observability' },
  { name: 'Jaeger', color: '#00BCD4', category: 'observability' },

  { name: 'Unit Testing', color: '#800080', category: 'testing' },
  { name: 'Integration Testing', color: '#800080', category: 'testing' },
  { name: 'xUnit', color: '#800080', category: 'testing' },
  { name: 'SpecFlow', color: '#800080', category: 'testing' },
  { name: 'BDD', color: '#800080', category: 'testing' },
  { name: 'Moq', color: '#800080', category: 'testing' },
  { name: 'Jest', color: '#800080', category: 'testing' },
  { name: 'TDD', color: '#800080', category: 'testing' },
  { name: 'SonarQube', color: '#800080', category: 'testing' },

  { name: 'Claude Code', color: '#5C2D91', category: 'ai' },
  { name: 'MCPs', color: '#5C2D91', category: 'ai' },
  { name: 'Prompt Engineering', color: '#5C2D91', category: 'ai' },
  { name: 'Context Management', color: '#5C2D91', category: 'ai' },
  { name: 'Spec-Driven Development', color: '#5C2D91', category: 'ai' },
  { name: 'Custom Skills & Agents', color: '#5C2D91', category: 'ai' },
];

export const projects: Project[] = [
  {
    title: 'Cumes Brasil',
    linkGithub: 'https://github.com/rafael-ventura/cumes-brasil',
    linkOnline: 'https://www.cumesbrasil.com.br',
    description:
      'PWA for climbers in Rio de Janeiro — create collections, log climbs, and view route topos.',
    techStack: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Node.js'],
  },
  {
    title: 'Spotify Timeline',
    linkGithub: 'https://github.com/rafael-ventura/spotify-timeline',
    linkOnline: 'https://spotify.rafael-ventura.dev.br',
    description: 'Visualize your Spotify history, build playlists, and generate shareable images.',
    techStack: ['Vue.js', 'Spotify API', 'Node.js'],
  },
  {
    title: 'Vue Pokedex',
    linkGithub: 'https://github.com/rafael-ventura/vue-pokedex',
    linkOnline: 'https://pokedex.rafael-ventura.dev.br',
    description: 'A styled Pokedex covering the first generation of Pokémon, built with Vue.js.',
    techStack: ['Vue.js', 'PokéAPI', 'CSS'],
  },
  {
    title: 'Vai Bandeijar?',
    linkGithub: 'https://github.com/rafael-ventura/vai-bandeijar',
    linkOnline: 'https://vai-bandeijar.rafael-ventura.dev.br',
    description: "Publishes UNIRIO's weekly school-restaurant menu via web, Telegram, and email.",
    techStack: ['Angular', 'TypeScript', 'Node.js', 'CI/CD Pipeline'],
  },
];

export const jobs: Job[] = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Nstech',
    period: 'September 2025 - Current',
    highlights: [
      'MultiCTe is a white-label, multi-tenant TMS (Transport Management System) serving 100+ logistics clients, covering control tower features and real-time monitoring of fleets, cargo, vehicles, and GPS positions',
      'Take direct part in the transformation of a large legacy monolith into 5 macro services, working hands-on with RabbitMQ, applying Pub/Sub for event publishing and routing',
      'Develop and maintain features on a codebase with .NET Framework 4.7 and .NET 6-10 coexisting, on a Domain-Driven Design foundation applying SOLID, Repository, Unit of Work, and dependency injection',
      'First hands-on experience with AI-assisted development, using Claude Code and the Serena MCP server for semantic C# navigation on top of Roslyn; use it daily for refactors, code reviews, and test generation',
      'Cut development environment spin-up time from ~18-20 minutes to 5-6 minutes by enabling selective building of only the changed services',
      'Delivered tax reform adjustments under a hard regulatory deadline, and take part in war rooms investigating critical production incidents down to root cause using logs, timestamps, GPS data, and SQL analysis',
      'Manage fixes across 4+ major release lines running simultaneously across the client base, on a white-label, multi-tenant platform',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'iUUL',
    period: 'September 2024 - September 2025',
    highlights: [
      'Resolved technical blockers and production bugs, providing technical mentoring in backend (C#) and frontend (Angular), with code reviews focused on quality and clarity',
      "Implemented the automated test layer of the recruitment platform, reaching 92% test coverage, while defining its architecture with Clean Architecture, DDD, and modularization together with the project's tech lead",
      'Maintained CI/CD and multiple concurrent versions of a second client application (.NET and Angular) hosted on Azure, debugging deployment and performance bottlenecks',
      'Rebuilt unreliable CI/CD pipelines across all applications into a complete flow with staging and production environments, version tags, and artifact management',
      'Provided migration from the backend and MongoDB to containers on ECS, and the frontend to static assets on S3 and CloudFront, monitored through CloudWatch',
    ],
  },
  {
    title: 'Mid Fullstack Engineer',
    company: 'JJ4Tech',
    period: 'September 2022 - February 2024',
    highlights: [
      'Developed and maintained .NET 7 microservices with Clean Architecture and Domain-Driven Design, including Value Objects, aggregates, and domain events published and consumed through Pub/Sub across services',
      'Built asynchronous messaging with MassTransit over RabbitMQ for internal communication, and IBM MQ on the Federal Reserve integration channel: publishing, consumption, routing, failure handling, and reprocessing',
      'Implemented resilient message consumption with idempotency to prevent duplicate payment processing and retry policies; orchestrated payment flow steps with the saga pattern and applied CQRS with MediatR',
      'Proposed and implemented the unit test suite after noticing the homologation environment kept breaking on preventable bugs, cutting bug-related tasks by 60%+ in the first month; evolved the pipeline with BDD using SpecFlow',
      'Monitored microservices with Grafana dashboards over Prometheus and OpenTelemetry, with distributed tracing in Jaeger',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Sinqia',
    period: 'January 2021 - September 2022',
    highlights: [
      'Rebuilt a dynamic pension calculation screen whose logic was concentrated in the database into a RESTful API with clear separation between UI, business rules, and data access, cutting loading time by ~23%',
      'Worked across multiple .NET versions, taking part in a runtime migration from .NET 5 to .NET 6 while maintaining legacy .NET Framework 4.7 modules',
      'Adapted the solution to LGPD, the Brazilian data protection law, reviewing data models, information flows, and data access/processing behaviors',
      'Provided production support for critical incidents, resolving SQL Server query performance issues by refactoring stored procedures and adding unit tests',
    ],
  },
  {
    title: 'Systems Analyst (Internship)',
    company: 'Itaú Unibanco',
    period: 'January 2019 - December 2020',
    highlights: [
      'Developed and maintained private pension banking applications, with AngularJS and Knockout.js on the frontend and backend logic in C# / .NET Framework 4.x',
      'Implemented features and fixed bugs in legacy production systems',
      'Wrote and optimized SQL Server stored procedures, queries, and indexes supporting financial calculations, reporting, and core business processes',
    ],
  },
];
