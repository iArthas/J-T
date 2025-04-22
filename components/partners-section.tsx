import Image from "next/image"

const partners = [
  "/aliados/ISM.png",
  "/aliados/lancaster.png",
  "/aliados/hpologo1.png",
  "/aliados/NUEVA-LIMA-LOGO.png",
  "/aliados/Cartopac.png",
  "/aliados/binariocontractorsac.png",
  "/aliados/megaplaza.png",
  "/aliados/mixercon.png",
  "/aliados/EXSA-Logo.png",
  "/aliados/logo-Caraveli.png",
  "/aliados/geohidrac.png",
  "/aliados/Nexa-Logo.png"
]

export default function PartnersSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Clientes</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
          A lo largo de nuestra trayectoria, hemos tenido el privilegio de colaborar con una amplia variedad de clientes en diferentes sectores. Desde emprendimientos emergentes hasta grandes corporaciones, cada proyecto ha sido una oportunidad para aportar valor, generar impacto y construir relaciones sólidas.
          Ellos son la razón de nuestro compromiso constante con la mejora continua.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-transform hover:scale-105"
            >
              <Image
                src={logo}
                alt={`Logo Aliado ${index + 1}`}
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
