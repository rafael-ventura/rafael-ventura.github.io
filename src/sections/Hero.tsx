import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import BlurText from '@/components/ui/blur-text';
import { BlurFade } from '@/components/ui/blur-fade';
import { DotPattern } from '@/components/ui/dot-pattern';
import { profile, metrics } from '@/data';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-40">
      <DotPattern
        width={22}
        height={22}
        className="text-secondary/40 [mask-image:radial-gradient(600px_circle_at_30%_30%,white,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <BlurFade delay={0.1}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
            </BlurFade>

            <h1 className="sr-only">
              {profile.name}, {profile.role}
            </h1>
            <BlurText
              text={profile.name}
              delay={120}
              animateBy="letters"
              className="font-display text-5xl font-extrabold tracking-tight text-text md:text-7xl"
            />

            <BlurFade delay={0.6}>
              <p className="mt-4 text-xl font-semibold text-accent md:text-2xl">{profile.role}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">{profile.tagline}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                <FaLocationDot aria-hidden /> {profile.location} · Remote
              </p>
            </BlurFade>

            <BlurFade delay={0.8}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="rounded-lg bg-accent px-6 py-3 font-bold text-primary transition-opacity hover:opacity-90"
                >
                  See my work
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-6 py-3 font-bold text-text transition-colors hover:border-accent"
                >
                  Resume
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <IconLink href={`mailto:${profile.email}`} label="Email">
                    <FaEnvelope size={20} />
                  </IconLink>
                  <IconLink href={profile.linkedin} label="LinkedIn">
                    <FaLinkedin size={20} />
                  </IconLink>
                  <IconLink href={profile.github} label="GitHub">
                    <FaGithub size={20} />
                  </IconLink>
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3}>
            <img
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              className="h-36 w-36 rounded-full border-2 border-accent/60 object-cover shadow-2xl shadow-accent/10 md:h-56 md:w-56"
            />
          </BlurFade>
        </div>

        <ul aria-label="Selected results" className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <li key={m.source}>
              <BlurFade
                delay={1 + i * 0.1}
                className="h-full rounded-xl border border-white/10 bg-surface/60 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-extrabold text-text">{m.value}</p>
                <p className="mt-1 text-sm text-muted">{m.label}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-secondary">{m.source}</p>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="rounded-md p-2 text-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
