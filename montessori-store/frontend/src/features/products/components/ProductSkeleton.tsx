export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="h-64 rounded-2xl bg-stone-200"></div>
      <div className="mt-4 h-6 w-3/4 rounded bg-stone-200"></div>
      <div className="mt-2 h-4 w-1/2 rounded bg-stone-200"></div>
      <div className="mt-6 h-12 rounded-xl bg-stone-200"></div>
    </div>
  );
}
