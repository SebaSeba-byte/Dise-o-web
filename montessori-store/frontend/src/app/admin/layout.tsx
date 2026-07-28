import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-72 bg-[#1E293B] text-white">
        <div className="p-8 border-b border-slate-700/50">
          <h2 className="text-2xl font-bold tracking-tight">
            GABLIAM STUDIO
          </h2>
        </div>
        <Sidebar />
      </aside>

      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
