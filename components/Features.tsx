'use client'

import { motion } from 'framer-motion'
import {
  Laptop,
  GraduationCap,
  Cpu,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Modalidad Virtual',
    description: 'Clases virtuales y sincrónicas',
  },
  {
    icon: Cpu,
    title: 'Prácticas Reales',
    description: 'Laboratorios y simulaciones industriales',
  },
  {
    icon: GraduationCap,
    title: 'Certificación UNRaf',
    description: 'Diplomatura avalada institucionalmente',
  },
  {
    icon: ShieldCheck,
    title: 'Industria 4.0',
    description: 'Tecnologías modernas de automatización',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0B1120] text-white overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Características
          </p>

          <h2 className="text-5xl font-black leading-tight">
            ¿Por qué estudiar esta diplomatura?
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Formación moderna orientada a automatización industrial,
            PLC, SCADA e Industria 4.0 con enfoque práctico.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-yellow-400/40 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)] transition duration-500"
              >

                <div className="w-20 h-20 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500">

                  <Icon className="w-10 h-10 text-yellow-400" />

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}