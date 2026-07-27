import { COMPANY } from "@/constants/company";

export default function TopBar() {
  return (
    <div className="bg-[#111111] text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-8 text-sm">
        <div>
          📞 {COMPANY.phone}
        </div>
        <div>
          Diseño • Arquitectura • Infraestructura Montessori
        </div>
      </div>
    </div>
  );
}
