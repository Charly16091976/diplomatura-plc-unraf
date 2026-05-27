'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#050816] text-white overflow-hidden flex items-center"
    >

      {/* Glow superior */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_40%)]" />

      {/* Grid tecnológico */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center relative z-10 pt-32">

        {/* CONTENIDO */}
           <motion.div
           className="relative z-20"
           initial={{ opacity: 0, x: -80 }}
           animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
>

          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 px-5 py-3 rounded-full mb-8">

            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />

            <span className="text-sm font-semibold tracking-wide">
              INSCRIPCIONES ABIERTAS
            </span>

          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">

            Diplomatura en

            <span className="block text-yellow-400">
              Programación de PLC
            </span>

          </h1>

          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Formación intensiva orientada a automatización industrial,
            PLC, SCADA e Industria 4.0 con enfoque práctico y tecnológico.
          </p>

          <div className="flex flex-wrap gap-6">

            <a
              href="/programa.pdf"
              download
              className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-[0_0_40px_rgba(250,204,21,0.25)]"
            >
              Descargar Programa
            </a>

            <a
              href="#contacto"
              className="border border-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Solicitar Información
            </a>

          </div>

          <div className="flex gap-12 mt-16 flex-wrap">

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                100%
              </h3>

              <p className="text-gray-400 mt-2">
                Virtual y Sincrónica
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                6
              </h3>

              <p className="text-gray-400 mt-2">
                Meses de duración
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-yellow-400">
                PLC
              </h3>

              <p className="text-gray-400 mt-2">
                Formación práctica
              </p>
            </div>

          </div>

        </motion.div>

        {/* IMAGEN */}
        <motion.div
         className="relative flex justify-center lg:justify-end overflow-hidden"
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.2 }}
>

          {/* Glow detrás */}
          <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />

          <Image
            src="/hero-plc.png"
            alt="PLC"
            width={1200}
            height={1200}
            priority
            className="relative z-10 w-[140%] sm:w-[120%] lg:w-[1100px] max-w-none lg:translate-x-24 opacity-95 drop-shadow-[0_0_80px_rgba(250,204,21,0.25)]"
          />

        </motion.div>

      </div>

    </section>
  )
}