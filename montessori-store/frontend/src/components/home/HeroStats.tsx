export default function HeroStats() {
  const stats = [
    { value: "+500", label: "Clientes Satisfechos" },
    { value: "+250", label: "Proyectos Montessori" },
    { value: "10+", label: "Años de Experiencia" },
  ];

  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1"
        >
          <h3 className="text-3xl font-bold text-green-700">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
