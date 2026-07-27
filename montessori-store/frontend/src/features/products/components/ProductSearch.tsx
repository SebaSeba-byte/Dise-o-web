interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function ProductSearch({

    value,

    onChange,

}: Props) {

    return (

        <input

            type="text"

            placeholder="Buscar productos..."

            value={value}

            onChange={(e) => onChange(e.target.value)}

            className="w-full rounded-xl border border-stone-200 bg-white p-4 outline-none transition focus:border-[#B08A45] focus:ring-1 focus:ring-[#B08A45]"

        />

    );

}
