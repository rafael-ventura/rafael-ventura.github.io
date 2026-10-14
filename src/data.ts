// All site copy lives here. Source of truth: the portfolio brief (October 2026).
// Rules: English only, no em dashes, metrics keep their original attribution.

export const profile = {
  name: 'Rafael Siqueira',
  role: 'Senior Software Engineer, .NET',
  tagline: 'Backend .NET engineer. Messaging, integrations, critical systems.',
  location: 'Angra dos Reis, Brazil',
  availability: 'Open to remote roles with international teams',
  email: 'raf4ael@gmail.com',
  github: 'https://github.com/rafael-ventura',
  linkedin: 'https://www.linkedin.com/in/rafael-cantanhede-ventura-siqueira/',
  // BASE_URL comes from vite.config.ts: '/' unless the host serves the site from a subfolder.
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  photo: `${import.meta.env.BASE_URL}profile.jpeg`,
};

export const bio = [
  'Software engineer from Brazil with seven years building .NET systems, mostly backend and messaging.',
  'I started in banking on private pension systems, moved to an instant payments fintech integrated with the Federal Reserve, and today work on a multi-tenant logistics platform serving 100+ clients.',
  "Most of my work sits around asynchronous messaging, integrations and keeping critical systems reliable in production. I'm also comfortable on the frontend with Angular and React.",
];

export interface Metric {
  value: string;
  label: string;
  source: string;
}

export const metrics: Metric[] = [
  { value: '~70%', label: 'faster dev environment spin-up', source: 'multitms' },
  { value: '92%', label: 'test coverage on a recruitment platform', source: 'iUUL' },
  { value: '60%+', label: 'fewer bug-related tasks in the first month', source: 'JJ4Tech' },
  { value: '~23%', label: 'faster loading on a pension calculation screen', source: 'Sinqia' },
];

export interface Project {
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  github?: string;
  live?: string;
  status?: string;
  /** Renders the card with the Dracma tavern palette. */
  themed?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Dracma',
    status: 'In progress',
    themed: true,
    summary:
      "A fantasy marketplace where buying an item is a distributed transaction across services that don't share a database.",
    points: [
      'Orchestrated saga with compensation across Gateway, Wallet, Market, Orchestrator and Audit services',
      'Transactional outbox, inbox deduplication and idempotency keys with MassTransit',
      'Double-entry ledger and an audit trail with redaction at write time',
    ],
    stack: ['.NET 10', 'Aspire', 'MassTransit', 'RabbitMQ', 'SQL Server', 'YARP', 'SignalR', 'React 19'],
    github: 'https://github.com/rafael-ventura/dracma',
  },
  {
    title: 'Cumes Brasil',
    summary:
      'Open source PWA cataloging Brazilian climbing routes, built with and for the climbing community.',
    points: [
      'Routes with grade, length and technical data, topos and photos',
      'Search and filters, personal collections, climb log and offline support',
      'Lead developer, full stack, working with 4 other contributors',
    ],
    stack: ['Vue', 'Quasar', 'TypeScript', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL', 'Docker', 'AWS'],
    github: 'https://github.com/rafael-ventura/cumes-brasil',
    live: 'https://www.cumesbrasil.com.br',
  },
  {
    title: 'Guilda dos Mensageiros',
    summary: 'A study of messaging patterns in .NET microservices, with four services talking only through RabbitMQ.',
    points: [
      'Hexagonal architecture per service, CQRS with MediatR',
      'Fanout exchanges for events, direct queues for commands, dead letter queues with retry and backoff',
      'Local orchestration and tracing with .NET Aspire',
    ],
    stack: ['.NET', 'MassTransit', 'RabbitMQ', 'EF Core', 'SQL Server', 'Aspire'],
    github: 'https://github.com/rafael-ventura/guilda-mensageria-microservices',
  },
];

export interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  context: string;
  highlights: string[];
  stack: string[];
}

export const jobs: Job[] = [
  {
    title: 'Senior Fullstack Engineer',
    company: 'multitms by nstech',
    period: 'Sep 2025 to present',
    location: 'Remote',
    context:
      'MultiCTe is white-label, multi-tenant transport management software serving 100+ logistics clients, with control tower features and real-time monitoring of fleets, cargo, vehicles and GPS positions.',
    highlights: [
      'Take direct part in the transformation of a large legacy monolith into 5 macro services, working hands-on with RabbitMQ, applying Pub/Sub for event publishing and routing, and more complex queue-based messaging flows.',
      'Develop and maintain features in a product with .NET Framework 4.7 and .NET 6, 7, 8 and 10 coexisting, on a Domain-Driven Design foundation applying SOLID, Repository, Unit of Work and dependency injection.',
      'Took part in a broad dependency injection refactoring, my first hands-on experience with AI-assisted development using Claude Code and the Serena MCP server for semantic C# navigation over Roslyn.',
      'Cut development environment spin-up time from about 18 to 20 minutes down to 5 to 6 minutes, a 70% reduction, by enabling selective building of only the changed services.',
      'Delivered tax reform adjustments under a hard regulatory deadline, and take part in war rooms investigating critical production incidents down to root cause using logs, timestamps, GPS data and SQL Server analysis.',
      'Manage fixes across 4+ major release lines running simultaneously, supporting real-time GPS tracking for up to 5,000 simultaneous shipments per client.',
    ],
    stack: ['C#', '.NET Framework 4.7', '.NET 6/7/8', 'RabbitMQ', 'MassTransit', 'SQL Server', 'NHibernate', 'Redis', 'Claude Code'],
  },
  {
    title: 'Senior Fullstack Engineer',
    company: 'iUUL',
    period: 'Sep 2024 to Sep 2025',
    location: 'Remote',
    context:
      'Software residency program that trains new developers while delivering client projects across different stacks.',
    highlights: [
      'Developed complex tasks, resolved technical blockers and fixed production bugs, providing technical mentoring in backend with C# and frontend with Angular.',
      "Implemented the automated test layer of the recruitment platform, reaching 92% test coverage, while defining its architecture with Clean Architecture, DDD and modularization together with the project's tech lead.",
      'Maintained the CI/CD pipeline and multiple concurrent versions of a second client application, .NET and Angular, hosted on Azure.',
      'Rebuilt unreliable CI/CD pipelines across all applications into a complete flow with staging and production environments, version tags and artifact management.',
      'Provided occasional maintenance on production React and Next.js applications running on AWS ECS, S3 and CloudFront, monitored through CloudWatch.',
    ],
    stack: ['C#', '.NET 8', 'Angular', 'TypeScript', 'MongoDB', 'AWS', 'Azure DevOps'],
  },
  {
    title: 'Mid-Level Fullstack Engineer',
    company: 'JJ4Tech',
    period: 'Jun 2022 to Feb 2024',
    location: 'Remote',
    context:
      'Instant payments fintech integrated with FedNow, following ISO 20022, built on asynchronous messaging and event-driven architecture.',
    highlights: [
      'Developed and maintained .NET 6 and 7 microservices with Clean Architecture and Domain-Driven Design, including Value Objects, aggregates and domain events published and consumed through Pub/Sub.',
      'Built asynchronous messaging with MassTransit over RabbitMQ for internal communication and IBM MQ on the Federal Reserve integration channel: publishing, consumption, routing, failure handling and message reprocessing.',
      'Implemented resilient message consumption with idempotency to prevent duplicate payment processing, retry policies and error queues; orchestrated payment flow steps with the saga pattern and applied CQRS with MediatR.',
      'Proposed and implemented the unit test suite after noticing the homologation environment kept breaking on simple, preventable bugs, cutting bug-related tasks by more than 60% in the first month.',
      'Monitored microservices with Grafana dashboards over Prometheus and OpenTelemetry, tracking latency, failure rates and payment flows, with distributed tracing in Jaeger.',
    ],
    stack: ['C#', '.NET 6/7', 'RabbitMQ', 'MassTransit', 'IBM MQ', 'MediatR', 'SpecFlow', 'Grafana', 'AWS'],
  },
  {
    title: 'Junior Fullstack Engineer',
    company: 'Sinqia',
    period: 'Jan 2021 to May 2022',
    location: 'Remote',
    context: 'Technology for financial institutions: loan portfolios, pensions and integrated banking.',
    highlights: [
      'Rebuilt a dynamic pension calculation screen whose logic lived in the database, turning it into a RESTful API-driven CRUD with clear separation between UI, business rules and data access, cutting loading time by about 23%.',
      'Took part in a runtime migration from .NET 5 to .NET 6 while maintaining .NET Framework 4.7 modules.',
      'Adapted the solution to LGPD, the Brazilian data protection law, reviewing data models, information flows and data access behaviors.',
      'Provided production support in war rooms, resolving SQL Server query performance issues.',
    ],
    stack: ['C#', '.NET 5/6', '.NET Framework 4.7', 'SQL Server', 'EF Core', 'MongoDB', 'Angular'],
  },
  {
    title: 'Intern Fullstack Engineer',
    company: 'Itaú Unibanco',
    period: 'Jan 2019 to Dec 2020',
    location: 'Rio de Janeiro, on-site',
    context: 'Private pension banking applications at one of the largest banks in Latin America.',
    highlights: [
      'Developed and maintained private pension applications across legacy front ends in AngularJS and Knockout.js and backend logic in C# and .NET Framework.',
      'Wrote and optimized SQL Server stored procedures, queries and indexes for financial calculations and reporting.',
    ],
    stack: ['C#', '.NET Framework 4.x', 'ASP.NET', 'AngularJS', 'Knockout.js', 'SQL Server'],
  },
];

export interface SkillGroup {
  name: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { name: 'Languages and runtime', items: ['C#', '.NET 8', '.NET 7', '.NET 6', '.NET Framework', 'ASP.NET Core', 'SQL', 'TypeScript', 'Python'] },
  { name: 'Messaging', items: ['RabbitMQ', 'MassTransit', 'IBM MQ', 'Pub/Sub', 'MediatR', 'Saga', 'CQRS', 'Background workers', 'Retry and error queues', 'Idempotency'] },
  { name: 'Data', items: ['SQL Server', 'Entity Framework Core', 'NHibernate', 'MongoDB', 'Redis', 'PostgreSQL'] },
  { name: 'Architecture', items: ['Microservices', 'Event-driven architecture', 'Clean Architecture', 'Domain-Driven Design', 'SOLID', 'Multi-tenant systems', 'Modular monolith'] },
  { name: 'APIs', items: ['RESTful APIs', 'SOAP'] },
  { name: 'Cloud and DevOps', items: ['AWS ECS', 'EC2', 'S3', 'CloudFront', 'CloudWatch', 'Docker', 'GitHub Actions', 'Azure Pipelines', 'GitLab CI', 'Azure DevOps'] },
  { name: 'Observability', items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Jaeger'] },
  { name: 'Testing', items: ['xUnit', 'NUnit', 'SpecFlow', 'BDD', 'Moq', 'Jest', 'TDD', 'SonarQube'] },
  { name: 'Frontend', items: ['Angular', 'React', 'Vue.js', 'Blazor', 'Razor', 'Knockout.js'] },
  { name: 'AI-assisted development', items: ['Claude Code', 'MCP', 'Prompt engineering', 'Context management', 'Spec-driven development', 'Custom skills and agents'] },
];

export const familiarWith = ['.NET Aspire', 'YARP', 'Kubernetes', 'Helm', 'Azure Service Bus'];

export const education = [
  {
    title: "Bachelor's in Information Systems",
    place: 'UNIRIO, Federal University of the State of Rio de Janeiro',
    period: 'Completed Jul 2025',
  },
  {
    title: 'C1 Level Certificate',
    place: 'Cambridge Assessment English',
    period: 'Jan 2018',
  },
];

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Advanced, Cambridge C1' },
];

export const citizenship = 'Brazilian and Portuguese';
