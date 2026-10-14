import { BlurFade } from '@/components/ui/blur-fade';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <BlurFade inView className="mb-12">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-text md:text-4xl">{title}</h2>
    </BlurFade>
  );
}
