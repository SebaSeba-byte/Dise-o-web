import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { COMPANY } from "@/constants/company";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=Hola%20${encodeURIComponent(COMPANY.name)},%20deseo%20solicitar%20una%20cotización.`;

  return (
    <MainLayout>
      <section className="bg-stone-50 py-24">
        <Container>
          <SectionTitle
            subtitle="CONTACTO"
            title="Hablemos de tu Proyecto"
            description="Estamos listos para hacer realidad el espacio ideal que tu familia o institución necesita."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Información de Contacto */}
            <div className="space-y-8 rounded-3xl bg-white p-10 shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold text-[#111111]">
                Información Corporativa
              </h3>

              <div className="space-y-6 text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B08A45]/10 text-[#B08A45]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Teléfono</p>
                    <p className="text-lg font-medium">{COMPANY.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B08A45]/10 text-[#B08A45]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Correo Electrónico</p>
                    <p className="text-lg font-medium">{COMPANY.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B08A45]/10 text-[#B08A45]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Ubicación</p>
                    <p className="text-lg font-medium">{COMPANY.address}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#20b557]"
                >
                  <MessageCircle size={22} />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>

            {/* Formulario de Mensaje */}
            <form className="space-y-6 rounded-3xl bg-white p-10 shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold text-[#111111]">
                Envíanos un Mensaje
              </h3>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none transition focus:border-[#B08A45]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Correo o WhatsApp</label>
                <input
                  type="text"
                  placeholder="Ej. +51 999 999 999"
                  className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none transition focus:border-[#B08A45]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Detalles del proyecto</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos qué espacio o mobiliario necesitas..."
                  className="mt-2 w-full rounded-xl border border-stone-200 p-4 outline-none transition focus:border-[#B08A45]"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#B08A45] py-4 font-semibold text-white shadow-lg transition hover:bg-[#98763a]"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
