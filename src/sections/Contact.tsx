import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { BlurFade } from '@/components/ui/blur-fade';
import { profile } from '@/data';

const LINKS = [
  { name: 'LinkedIn', url: profile.linkedin, icon: FaLinkedin },
  { name: 'GitHub', url: profile.github, icon: FaGithub },
  { name: 'Resume', url: profile.resume, icon: FaDownload },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <BlurFade inView className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mb-4 text-3xl font-bold text-text md:text-4xl">Let's talk</h2>
        <p className="mb-8 text-lg text-muted">
          I'm looking for remote roles with international teams. Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-lg bg-accent px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {LINKS.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-muted transition-colors hover:text-accent"
            >
              <Icon /> {name}
            </a>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
