import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MagicCard } from '@/components/ui/magic-card';
import { BorderBeam } from '@/components/ui/border-beam';
import { cn } from '@/lib/utils';
import type { Project } from '@/data';

export function ProjectCard({ project }: { project: Project }) {
  const { themed } = project;

  return (
    <div className="relative h-full rounded-2xl">
      <MagicCard
        className="h-full rounded-2xl"
        gradientColor={themed ? '#b8733322' : '#6366f122'}
        gradientFrom={themed ? '#b87333' : '#6366f1'}
        gradientTo={themed ? '#7a8b6f' : '#ff66cc'}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className={cn('text-2xl font-bold', themed ? 'font-serif text-3xl text-parchment' : 'text-text')}>
              {project.title}
            </h3>
            {project.status && (
              <span className="shrink-0 rounded-full border border-copper/50 bg-copper/15 px-2.5 py-0.5 text-xs font-medium text-copper">
                {project.status}
              </span>
            )}
          </div>

          <p className="mb-4 text-muted">{project.summary}</p>

          <ul className="mb-6 space-y-2 text-sm text-muted">
            {project.points.map(point => (
              <li key={point} className="flex gap-2">
                <span aria-hidden className={themed ? 'text-copper' : 'text-accent'}>
                  ▸
                </span>
                {point}
              </li>
            ))}
          </ul>

          <ul className="mb-6 mt-auto flex flex-wrap gap-1.5" aria-label="Stack">
            {project.stack.map(tech => (
              <li
                key={tech}
                className={cn(
                  'rounded-md px-2 py-0.5 text-xs font-medium',
                  themed ? 'bg-moss/20 text-parchment/90' : 'bg-secondary/15 text-indigo-200',
                )}
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 text-sm font-bold">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text transition-colors hover:text-accent"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text transition-colors hover:text-accent"
              >
                <FaArrowUpRightFromSquare /> Live site
              </a>
            )}
          </div>
        </div>
      </MagicCard>
      {themed && <BorderBeam size={120} duration={8} colorFrom="#b87333" colorTo="#f4ecd8" borderWidth={1.5} />}
    </div>
  );
}
