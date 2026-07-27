interface Props {
  material: string;
  color: string;
  edad: string;
}

export default function Specifications({
  material,
  color,
  edad,
}: Props) {

  return (

    <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50/50 p-6">

      <h2 className="mb-5 text-xl font-bold text-[#111111]">
        Especificaciones
      </h2>

      <ul className="space-y-3 text-gray-700">

        <li><strong className="text-black">Material:</strong> {material}</li>

        <li><strong className="text-black">Color:</strong> {color}</li>

        <li><strong className="text-black">Edad recomendada:</strong> {edad}</li>

      </ul>

    </div>

  );

}
