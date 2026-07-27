interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function ProductSort({

    value,

    onChange,

}: Props) {

    return (

        <select

            value={value}

            onChange={(e) => onChange(e.target.value)}

            className="rounded-xl border border-stone-200 bg-white p-3 outline-none transition focus:border-[#B08A45]"

        >

            <option value="default">

                Ordenar

            </option>

            <option value="price-asc">

                Precio ↑

            </option>

            <option value="price-desc">

                Precio ↓

            </option>

        </select>

    );

}
