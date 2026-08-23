import { jobs } from '../data';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-accent">Experiência Profissional</h2>
      <div className="relative border-l-2 border-accent pl-8">
        {jobs.map(job => (
          <div key={`${job.company}-${job.period}`} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full bg-accent" />
            <div className="rounded-xl border border-secondary/20 bg-surface/50 p-6">
              <h4 className="mb-1 text-xl text-accent">{job.title}</h4>
              <p className="mb-4 font-medium text-secondary">
                {job.company} • {job.period}
              </p>
              <ul className="space-y-2">
                {job.highlights.map(item => (
                  <li key={item} className="relative pl-6 text-muted">
                    <span className="absolute left-0 text-accent">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
