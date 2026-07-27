interface Props {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mb-16 max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-[4px] text-[#B08A45]">
        {subtitle}
      </span>

      <h2 className="mt-4 text-5xl font-bold">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}
