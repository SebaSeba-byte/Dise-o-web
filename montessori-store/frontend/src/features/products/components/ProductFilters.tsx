interface Props {

    value: string;

    onChange: (value: string) => void;

}

const categories = [

    "Todos",

    "Montessori",

    "Dormitorio",

    "Decoración",

    "Mobiliario",

];

export default function ProductFilters({

    value,

    onChange,

}: Props) {

    return (

        <div className="flex flex-wrap gap-3">

            {

                categories.map(category => (

                    <button

                        key={category}

                        onClick={() => onChange(category)}

                        className={`
                            rounded-full px-5 py-3 transition font-medium text-sm

                            ${

                                value === category

                                    ? "bg-[#B08A45] text-white shadow-md"

                                    : "border border-stone-200 bg-white text-gray-700 hover:border-[#B08A45] hover:text-[#B08A45]"

                            }

                        `}

                    >

                        {category}

                    </button>

                ))

            }

        </div>

    );

}
