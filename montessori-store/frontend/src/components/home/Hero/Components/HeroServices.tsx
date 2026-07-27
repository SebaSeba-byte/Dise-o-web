import {
    Home,
    School,
    Sofa
} from "lucide-react";

export default function HeroServices() {

    const services = [

        {
            icon: <Home />,
            title: "Arquitectura"
        },

        {
            icon: <School />,
            title: "Infraestructura"
        },

        {
            icon: <Sofa />,
            title: "Mobiliario"
        }

    ];

    return (

        <div className="mt-12 flex flex-wrap gap-4">

            {services.map((item) => (

                <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border bg-white px-6 py-4 shadow-md transition hover:-translate-y-1"
                >

                    {item.icon}

                    {item.title}

                </div>

            ))}

        </div>

    );

}
