import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 pt-6">

        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">

          <div className="flex items-center gap-4">
            <Image
              src="/logo-unraf.png"
              alt="UNRaf"
              width={140}
              height={50}
              className="object-contain"
            />

            <div className="hidden md:block w-px h-10 bg-gray-700" />

            <p className="hidden md:block text-sm text-gray-300 font-medium">
              Diplomatura en Programación de PLC
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

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

          </nav>

          <a
            href="#contacto"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Inscribirme
          </a>

        </div>

      </div>
    </header>
  )
}