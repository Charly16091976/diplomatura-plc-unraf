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
    <section className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Características
          </p>

          <h2 className="text-5xl font-black">
            ¿Por qué estudiar esta diplomatura?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-yellow-400 transition"
              >
                <Icon className="w-14 h-14 text-yellow-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}