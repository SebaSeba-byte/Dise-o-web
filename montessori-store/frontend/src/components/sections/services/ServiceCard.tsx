import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  Icon,
}: Props) {
  return (
    <article className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B08A45]/10">
        <Icon className="text-[#B08A45]" />
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </article>
  );
}
