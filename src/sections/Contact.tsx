import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const EMAIL = 'raafadev@gmail.com';

const LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raf4ael-ventura/', icon: FaLinkedin },
  { name: 'GitHub', url: 'https://github.com/rafael-ventura', icon: FaGithub },
  { name: 'Download Resume', url: '/resume.pdf', icon: FaDownload },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 text-center">
      <h2 className="mb-2 text-3xl font-bold text-accent">Contact.</h2>
      <p className="mb-6 text-lg text-muted">
        Want to know more or work together? Feel free to reach out!
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-block rounded-lg bg-secondary px-6 py-3 font-semibold text-text no-underline transition-colors hover:bg-primary"
      >
        {EMAIL}
      </a>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {LINKS.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold text-secondary no-underline transition-colors hover:text-accent"
          >
            <Icon /> {name}
          </a>
        ))}
      </div>
    </section>
  );
}
