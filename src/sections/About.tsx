import { useState } from 'react';
import { FaGraduationCap, FaLanguage, FaCode } from 'react-icons/fa';
import { SectionHeader } from '../components/SectionHeader';
import { skills, skillCategories } from '../data';

const EDUCATION = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: 'UNIRIO (Universidade Federal do Estado do Rio de Janeiro)',
    period: 'Completed July 2025',
    description:
      'Solid foundation in computer science fundamentals, software development, and information systems management.',
  },
];

const CERTIFICATIONS = [
  {
    degree: 'Cambridge Assessment English, C1 Level Certificate',
    institution: 'Cambridge',
    period: 'January 2018',
    description: 'English proficiency certification, C1 (advanced) level.',
  },
];

const LANGUAGES = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Advanced' },
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
      <SectionHeader title="About Me" subtitle="Get to know my journey" />

      <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="mb-6 text-lg leading-relaxed text-muted">
            Software engineer with professional experience since 2019, mostly built on financial and logistics
            systems where reliability genuinely matters — from legacy .NET Framework monoliths to modern
            microservices, asynchronous processing, and event-driven messaging.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Currently a Fullstack Software Engineer at Nstech, working on MultiCTe, a multi-tenant TMS (Transport
            Management System) serving 100+ logistics clients — taking part in the transformation of a large legacy
            monolith into microservices, RabbitMQ-based messaging, and production incident investigation. Comfortable
            across the frontend too (Angular, React), and lately exploring AI-assisted development workflows with
            Claude Code day to day.
          </p>
        </div>
        <div className="rounded-xl border border-secondary/20 bg-secondary/10 p-6 text-center">
          <span className="block text-4xl font-bold text-accent">7+</span>
          <span className="text-sm text-muted">Years of Experience</span>
        </div>
      </div>

      <div className="mb-16">
        <Subtitle icon={<FaGraduationCap />}>Education</Subtitle>
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
        <Subtitle icon={<FaGraduationCap />}>Certifications</Subtitle>
        <div className="grid grid-cols-1 gap-8 rounded-xl border border-secondary/20 bg-surface p-8 sm:grid-cols-2">
          {CERTIFICATIONS.map(item => (
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
        <Subtitle icon={<FaLanguage />}>Languages</Subtitle>
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

      <div>
        <h3 className="mb-4 flex items-center justify-center gap-2 text-center text-2xl text-accent">
          <FaCode /> Skills
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
