import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GaleriaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/galeria/MANTENIMIENTO/mantenimiento2.jpg?height=600&width=1920"
            alt="Galería J&T"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex min-h-[400px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Galería de Proyectos</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Conoce algunos de nuestros proyectos más destacados. 
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="todos" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="perforacion">Perforación</TabsTrigger>
                <TabsTrigger value="electrico">Sondaje Eléctrico</TabsTrigger>
                <TabsTrigger value="deteccion">Mantenimiento de Pozos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/galeria/PERFORACION TUBULAR/perforacion2.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion3.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion4.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion1.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion7.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion6.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion5.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion8.jpeg",
                  "/galeria/MANTENIMIENTO/mantenimiento2.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento3.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento1.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento4.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento5.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje2.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje3.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje5.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje6.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje7.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje8.png",
                  "/galeria/PERFORACION TUBULAR/perforacion9.jpeg",
                  "/galeria/PERFORACION TUBULAR/perforacion10.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje9.png",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje10.png",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje11.png"
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Proyecto ${index + 1}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="perforacion">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/galeria/PERFORACION TUBULAR/perforacion2.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion1.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion3.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion4.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion7.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion6.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion5.jpg",
                  "/galeria/PERFORACION TUBULAR/perforacion8.jpeg",
                  "/galeria/PERFORACION TUBULAR/perforacion9.jpeg",
                  "/galeria/PERFORACION TUBULAR/perforacion10.jpg",
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Proyecto Perforación ${index + 1}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electrico">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje1.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje2.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje3.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje4.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje5.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje6.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje7.jpg",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje8.png",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje9.png",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje10.png",
                  "/galeria/SONDAJE ELECTRICO VERTICCAL/sondaje11.png"
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Proyecto Eléctrico ${index + 1}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="deteccion">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "/galeria/MANTENIMIENTO/mantenimiento2.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento3.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento1.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento4.jpg",
                  "/galeria/MANTENIMIENTO/mantenimiento5.jpg"
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`Proyecto Detección ${index + 1}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Highlights
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Proyectos Destacados</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Estos son algunos de nuestros proyectos más destacados, donde hemos aplicado nuestra experiencia y
              conocimiento para ofrecer soluciones de alta calidad.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/galeria/destacado1.jpg",
                titulo: "Perforación de Pozo Industrial",
                ubicacion: "Lima, Perú | 2023",
                descripcion:
                  "Perforación de pozo tubular de 150 metros de profundidad para una planta industrial, incluyendo instalación de sistema de bombeo y conexiones eléctricas.",
              },
              {
                src: "/galeria/destacado2.jpg",
                titulo: "Sistema Eléctrico Comercial",
                ubicacion: "Arequipa, Perú | 2022",
                descripcion:
                  "Diseño e instalación completa del sistema eléctrico para un centro comercial, incluyendo tableros, iluminación y sistemas de emergencia.",
              },
              {
                src: "/galeria/destacado3.jpg",
                titulo: "Piscina Resort Turístico",
                ubicacion: "Cusco, Perú | 2024",
                descripcion:
                  "Construcción de piscina de lujo con sistema de recirculación automática, iluminación nocturna y revestimiento ecológico.",
              },
            ].map((proyecto, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={proyecto.src}
                    alt={proyecto.titulo}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{proyecto.titulo}</h3>
                <p className="mb-2 text-sm text-primary">{proyecto.ubicacion}</p>
                <p className="text-muted-foreground">{proyecto.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
