const modules = [
  'Conceptos generales y Álgebra de Boole',
  'Lenguaje en Plano de Funciones',
  'Lenguaje en Esquema de Contactos',
  'GRAFCET',
  'HMI',
  'Comunicaciones Industriales con PLC',
  'SCADA',
  'Trabajo Final Integrador',
]

export default function Modules() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Plan de Estudios
          </p>

          <h2 className="text-5xl font-black">
            Módulos de la Diplomatura
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 hover:scale-105 transition duration-300"
            >
              <div className="text-yellow-400 text-4xl font-black mb-6">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold">
                {module}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}