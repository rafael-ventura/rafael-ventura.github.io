import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const NAVBAR_HEIGHT = 80;

export function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - NAVBAR_HEIGHT, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-primary px-8 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" onClick={scrollTo('home')} className="text-2xl font-bold text-accent no-underline">
          RS
        </a>
        <nav>
          <ul className="flex list-none items-center gap-6">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={scrollTo(id)}
                  className={`rounded px-3 py-2 text-white no-underline transition-colors hover:text-secondary ${
                    active === id ? 'text-secondary' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
