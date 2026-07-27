interface Props {
  text: string;
}

export default function ProductBadge({ text }: Props) {
  return (
    <span className="rounded-full bg-[#B08A45]/10 px-3 py-2 text-xs font-semibold text-[#B08A45]">
      {text}
    </span>
  );
}
