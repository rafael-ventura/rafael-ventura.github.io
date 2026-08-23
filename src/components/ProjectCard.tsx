import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../data';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-surface p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-2 text-xl font-bold text-text">{project.title}</h3>
      <p className="mb-4 text-muted">{project.description}</p>
      <ul className="mb-4 flex flex-wrap justify-center gap-2">
        {project.techStack.map(tech => (
          <li key={tech} className="rounded bg-secondary px-3 py-1 text-xs font-semibold text-white">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {project.linkGithub && (
          <a
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-bold text-white no-underline transition-colors hover:bg-primary"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.linkOnline && (
          <a
            href={project.linkOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-bold text-white no-underline transition-colors hover:bg-primary"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
