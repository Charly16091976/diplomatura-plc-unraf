export default function CTA() {
  return (
    <section className="py-32 bg-black text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-yellow-400 uppercase tracking-widest mb-4">
          Inscripciones Abiertas
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-8">
          Comienza tu camino en la Automatización Industrial
        </h2>

        <p className="text-2xl text-gray-300 mb-12">
          Capacitación profesional orientada a PLC, HMI, SCADA y tecnologías de Industria 4.0
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
  href="mailto:luciano.mulki@unraf.edu.ar?subject=Consulta%20Diplomatura%20PLC"
  className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
>
  Consultar por Mail
</a>

          <a
            href="/programa.pdf"
            target="_blank"
            className="border border-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition"
          >
            Descargar Programa
          </a>
        </div>
      </div>
    </section>
  )
}