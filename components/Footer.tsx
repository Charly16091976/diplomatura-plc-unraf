import Image from 'next/image'
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative bg-[#050816] text-white overflow-hidden border-t border-white/10"
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(250,204,21,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <Image
              src="/logo-unraf.png"
              alt="UNRaf"
              width={180}
              height={70}
              className="mb-6 object-contain"
            />

            <p className="text-gray-400 leading-relaxed">
              Diplomatura en Programación de PLC orientada
              a automatización industrial e Industria 4.0.
            </p>

          </div>

          {/* Navegación */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Navegación
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="#inicio"
                className="hover:text-yellow-400 transition"
              >
                Inicio
              </a>

              <a
                href="#programa"
                className="hover:text-yellow-400 transition"
              >
                Programa
              </a>

              <a
                href="#modalidad"
                className="hover:text-yellow-400 transition"
              >
                Modalidad
              </a>

              <a
                href="#contacto"
                className="hover:text-yellow-400 transition"
              >
                Contacto
              </a>

            </div>

          </div>

          {/* Contacto */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contacto
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-4">
                <Mail className="text-yellow-400 mt-1" />

                <p>
                  luciano.mulki@unraf.edu.ar
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-yellow-400 mt-1" />

                <p>
                  +54 3492 XXXXXXX
                </p>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-400 mt-1" />

                <p>
                  Rafaela, Santa Fe, Argentina
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}
          <div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-black mb-4">
                Inscripciones Abiertas
              </h3>

              <p className="text-gray-400 mb-8">
                Reserva tu lugar en la próxima cohorte.
              </p>

              <a
                href="mailto:luciano.mulki@unraf.edu.ar"
                className="block text-center bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 hover:-translate-y-1 transition duration-300"
              >
                Consultar por Mail
              </a>

            </div>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 UNRaf — Diplomatura en Programación de PLC
          </p>

          <p className="text-gray-500 text-sm">
            Desarrollado con Next.js + TailwindCSS
          </p>

        </div>

      </div>

    </footer>
  )
}