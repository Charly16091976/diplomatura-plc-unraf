import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gray-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Image
            src="/logo-unraf.jpg"
            alt="UNRaf"
            width={220}
            height={80}
          />
        </div>

        <div className="text-center md:text-right text-gray-400">
          <p>Diplomatura en Programación de PLC</p>
          <p>Universidad Nacional de Rafaela</p>
        </div>
      </div>
    </footer>
  )
}