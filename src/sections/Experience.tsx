import { SectionHeader } from '@/components/SectionHeader';
import { BlurFade } from '@/components/ui/blur-fade';
import { jobs } from '@/data';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Since 2019" title="Professional experience" />
      <ol className="relative space-y-12 border-l border-white/10 pl-6 md:pl-10">
        {jobs.map(job => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-primary md:-left-[2.85rem]"
            />
            <BlurFade inView>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-bold text-text">
                  {job.title} <span className="text-accent">· {job.company}</span>
                </h3>
                <p className="shrink-0 text-sm text-muted">
                  {job.period} · {job.location}
                </p>
              </div>
              <p className="mt-2 max-w-3xl italic text-muted">{job.context}</p>
              <ul className="mt-4 max-w-3xl space-y-2">
                {job.highlights.map(item => (
                  <li key={item} className="flex gap-3 leading-relaxed text-slate-300">
                    <span aria-hidden className="text-accent">
                      ▸
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                {job.stack.map(tech => (
                  <li key={tech} className="rounded-md bg-secondary/15 px-2 py-0.5 text-xs font-medium text-indigo-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </li>
        ))}
      </ol>
    </section>
  );
}
