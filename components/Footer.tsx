import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gray-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        <div>
          <Image
            src="/logo-unraf.jpg"
            alt="UNRaf"
            width={220}
            height={80}
            className="object-contain brightness-110"
          />
        </div>

        <div className="text-center md:text-right text-gray-400">
          <p className="font-semibold text-white mb-2">
            Diplomatura en Programación de PLC
          </p>

          <p>
            Universidad Nacional de Rafaela
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Industria 4.0 · Automatización Industrial · PLC · SCADA
          </p>
        </div>

      </div>
    </footer>
  )
}