import Image from "next/image"

export default function PartnersSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Aliados</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabajamos con las mejores marcas y empresas del sector para garantizar soluciones de la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-transform hover:scale-105"
            >
              <Image
                src={`/placeholder.svg?height=80&width=160&text=Aliado ${index}`}
                alt={`Logo Aliado ${index}`}
                width={160}
                height={80}
                className="h-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
