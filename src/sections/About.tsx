import { useState } from 'react';
import { FaGraduationCap, FaLanguage, FaCode } from 'react-icons/fa';
import { SectionHeader } from '../components/SectionHeader';
import { skills, skillCategories, skillGroups } from '../data';

const EDUCATION = [
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'UNIRIO',
    period: 'Abril 2025',
    description:
      'Formação sólida em fundamentos da computação, desenvolvimento de software e gestão de sistemas de informação.',
  },
];

const EXTRACURRICULAR = [
  {
    degree: 'Cambridge Assessment English Level 1 Certificate',
    institution: 'Cambridge',
    period: 'Janeiro 2018',
    description: 'Certificação de proficiência em inglês, demonstrando habilidades avançadas no idioma.',
  },
];

const LANGUAGES = [
  { name: 'Português', level: 'Fluente' },
  { name: 'Inglês', level: 'Avançado' },
  { name: 'Espanhol', level: 'Iniciante' },
];

function Subtitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h3 className="mb-8 flex items-center justify-center gap-2 text-center text-2xl text-accent">
      {icon} {children}
    </h3>
  );
}

export function About() {
  const [category, setCategory] = useState('all');
  const filtered = category === 'all' ? skills : skills.filter(s => s.category === category);

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader title="Sobre Mim" subtitle="Conheça minha jornada" />

      <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="mb-6 text-lg leading-relaxed text-muted">
            Desenvolvedor Full Stack com 7 anos de experiência no setor financeiro, especializado em .NET,
            JavaScript e arquitetura escalável. Atuei no desenvolvimento de sistemas críticos de previdência,
            investimentos e pagamentos, desde aplicações monolíticas até microsserviços e sistemas orientados a
            eventos.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Atualmente, sou Engenheiro de Software e mentor na iUUL, liderando equipes e desafios técnicos em um
            programa de residência. Possuo forte atuação na gestão de sprints, melhoria de processos e suporte
            estratégico ao desenvolvimento, sempre promovendo um ambiente colaborativo e de crescimento contínuo.
          </p>
        </div>
        <div className="rounded-xl border border-secondary/20 bg-secondary/10 p-6 text-center">
          <span className="block text-4xl font-bold text-accent">7+</span>
          <span className="text-sm text-muted">Anos de Experiência</span>
        </div>
      </div>

      <div className="mb-16">
        <Subtitle icon={<FaGraduationCap />}>Formação Acadêmica</Subtitle>
        <div className="grid grid-cols-1 gap-8 rounded-xl border border-secondary/20 bg-surface p-8 sm:grid-cols-2">
          {EDUCATION.map(item => (
            <div key={item.degree} className="text-center">
              <h4 className="mb-1 text-lg text-accent">{item.degree}</h4>
              <p className="mb-1 font-medium text-secondary">{item.institution}</p>
              <p className="mb-3 text-sm text-muted">{item.period}</p>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Subtitle icon={<FaGraduationCap />}>Formação Extracurricular</Subtitle>
        <div className="grid grid-cols-1 gap-8 rounded-xl border border-secondary/20 bg-surface p-8 sm:grid-cols-2">
          {EXTRACURRICULAR.map(item => (
            <div key={item.degree} className="text-center">
              <h4 className="mb-1 text-lg text-accent">{item.degree}</h4>
              <p className="mb-1 font-medium text-secondary">{item.institution}</p>
              <p className="mb-3 text-sm text-muted">{item.period}</p>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Subtitle icon={<FaLanguage />}>Idiomas</Subtitle>
        <div className="flex flex-wrap justify-center gap-6">
          {LANGUAGES.map(lang => (
            <div
              key={lang.name}
              className="flex min-w-[150px] flex-col items-center gap-2 rounded-xl border border-secondary/20 bg-surface p-6"
            >
              <span className="font-medium text-accent">{lang.name}</span>
              <span className="text-sm text-muted">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Subtitle icon={<FaCode />}>Habilidades Técnicas</Subtitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map(group => (
            <div key={group.title} className="flex min-h-[200px] flex-col rounded-xl border border-secondary/20 bg-surface p-5">
              <h4 className="mb-3 text-center text-lg text-accent">{group.title}</h4>
              <p className="flex-grow text-sm leading-relaxed text-muted">{group.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 flex items-center justify-center gap-2 text-center text-2xl text-accent">
          <FaCode /> Linguagens & Ferramentas
        </h3>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              style={{ borderColor: cat.color, color: category === cat.id ? '#fff' : cat.color, backgroundColor: category === cat.id ? cat.color : 'transparent' }}
              className="rounded-full border-2 px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map(skill => (
            <div
              key={skill.name}
              style={{ '--hover': skill.color } as React.CSSProperties}
              className="flex min-h-[40px] items-center justify-center rounded-lg border border-white/20 px-2 py-3 text-center text-sm font-medium transition-all hover:scale-105 hover:opacity-30 hover:[background-color:var(--hover)]"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
