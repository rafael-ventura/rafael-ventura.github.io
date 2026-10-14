import { profile } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-muted">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
