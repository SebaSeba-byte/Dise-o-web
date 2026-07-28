import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="space-y-2 p-6 font-medium">
      <Link
        href="/admin"
        className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-700/60 hover:text-white"
      >
        Dashboard
      </Link>

      <Link
        href="/admin/products"
        className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-700/60 hover:text-white"
      >
        Productos
      </Link>

      <Link
        href="/admin/categories"
        className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-700/60 hover:text-white"
      >
        Categorías
      </Link>

      <Link
        href="/admin/orders"
        className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-700/60 hover:text-white"
      >
        Pedidos
      </Link>

      <Link
        href="/admin/customers"
        className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-700/60 hover:text-white"
      >
        Clientes
      </Link>
    </nav>
  );
}
