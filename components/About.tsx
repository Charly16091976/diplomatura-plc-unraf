export default function About() {
  return (
    <section className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-yellow-400 uppercase tracking-widest mb-4">
          Sobre la Diplomatura
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Formación en Automatización Industrial
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            La Diplomatura en PLC de UNRaf brinda formación práctica y teórica
            en programación de controladores lógicos programables orientados a
            la automatización industrial.
          </p>

          <p>
            Los estudiantes aprenderán tecnologías utilizadas en entornos
            industriales reales incluyendo PLC, HMI, SCADA y redes industriales.
          </p>

          <p>
            La propuesta está orientada a la industria 4.0 y al desarrollo de
            soluciones automatizadas modernas.
          </p>
        </div>
      </div>
    </section>
  )
}