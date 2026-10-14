import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Highlights the link of the section currently crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const { id } of LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    cn('rounded-md px-3 py-2 transition-colors hover:text-text', active === id ? 'text-text' : 'text-muted');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-display text-xl font-extrabold text-accent">
          RS
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-text md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/5 px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={cn(linkClass(id), 'block')} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
