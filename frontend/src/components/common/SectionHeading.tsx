interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-6xl font-bold tracking-tight leading-tight">
        {title}
      </h1>

      <p className="mt-6 text-lg text-zinc-400 leading-8">
        {subtitle}
      </p>
    </div>
  );
}