import { SectionHeader } from '@/components/SectionHeader';
import { BlurFade } from '@/components/ui/blur-fade';
import { familiarWith, skillGroups } from '@/data';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Toolbox" title="Technical skills" />
      <BlurFade inView>
        <dl className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-surface/40">
          {skillGroups.map(group => (
            <div key={group.name} className="grid gap-2 p-5 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="font-display font-bold text-text">{group.name}</dt>
              <dd className="text-muted">{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-muted">
          <span className="font-bold text-text">Familiar with:</span> {familiarWith.join(', ')}
        </p>
      </BlurFade>
    </section>
  );
}
