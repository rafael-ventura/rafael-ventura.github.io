import { BlurFade } from '@/components/ui/blur-fade';
import { SectionHeader } from '@/components/SectionHeader';
import { bio, citizenship, education, languages } from '@/data';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="About" title="A bit more about me" />
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <BlurFade inView className="space-y-5 text-lg leading-relaxed text-slate-300">
          {bio.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </BlurFade>

        <BlurFade inView delay={0.1} className="space-y-8">
          <SideBlock title="Education">
            <ul className="space-y-4">
              {education.map(item => (
                <li key={item.title}>
                  <p className="font-bold text-text">{item.title}</p>
                  <p className="text-sm text-muted">{item.place}</p>
                  <p className="text-sm text-muted">{item.period}</p>
                </li>
              ))}
            </ul>
          </SideBlock>
          <SideBlock title="Languages">
            <ul className="space-y-1">
              {languages.map(lang => (
                <li key={lang.name} className="text-muted">
                  <span className="font-bold text-text">{lang.name}</span>, {lang.level}
                </li>
              ))}
            </ul>
          </SideBlock>
          <SideBlock title="Citizenship">
            <p className="text-muted">{citizenship}</p>
          </SideBlock>
        </BlurFade>
      </div>
    </section>
  );
}

function SideBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">{title}</h3>
      {children}
    </div>
  );
}
