export default function GoogleForm() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Consultas
          </p>

          <h2 className="text-5xl font-black">
            Solicita más información
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden border border-gray-800">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScGMTHV-gdP3ExlAynuj-rDSIX-GWhlFfQYbQmxrds98LBsZw/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="bg-white"
          >
            Cargando…
          </iframe>
        </div>

      </div>
    </section>
  )
}