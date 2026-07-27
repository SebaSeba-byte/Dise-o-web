import Image from "next/image";

interface Props {
  title: string;
  location: string;
  image: string;
  category: string;
}

export default function ProjectCard({
  title,
  location,
  image,
  category,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3 p-6">
        <span className="inline-block rounded-full bg-[#B08A45]/10 px-4 py-2 text-sm font-semibold text-[#B08A45]">
          {category}
        </span>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500">
          {location}
        </p>
      </div>
    </div>
  );
}
