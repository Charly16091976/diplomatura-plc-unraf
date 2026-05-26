'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-plc.png"
          alt="PLC"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <Image
          src="/logo-unraf.png"
          alt="UNRaf"
          width={220}
          height={80}
          className="object-contain brightness-110"
          
        />

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          Diplomatura en PLC
        </h1>

        <p className="text-2xl text-gray-200 mb-10">
          Programación de Controladores Lógicos Programables
        </p>

        <a
          href="/programa.pdf"
          target="_blank"
          className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Descargar Programa
        </a>
      </div>
    </section>
  )
}