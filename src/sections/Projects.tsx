import { FaGithub } from 'react-icons/fa6';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { BlurFade } from '@/components/ui/blur-fade';
import { profile, projects } from '@/data';

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Outside work" title="Personal projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <BlurFade key={project.title} inView delay={i * 0.1} className="h-full">
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-accent"
      >
        <FaGithub /> More on GitHub
      </a>
    </section>
  );
}
