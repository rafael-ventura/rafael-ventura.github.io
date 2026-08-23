interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-accent mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
