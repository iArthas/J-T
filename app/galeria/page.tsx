import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GaleriaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Galería HERC"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex min-h-[400px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Galería de Proyectos</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Conoce algunos de nuestros proyectos más destacados en servicios eléctricos, hidráulicos y sistemas para
            piscinas.
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
                <TabsTrigger value="electrico">Eléctrico</TabsTrigger>
                <TabsTrigger value="piscinas">Piscinas</TabsTrigger>
                <TabsTrigger value="hidraulico">Hidráulico</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                  <div key={item} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Proyecto ${item}`}
                      alt={`Proyecto ${item}`}
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
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Eléctrico ${item}`}
                      alt={`Proyecto Eléctrico ${item}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="piscinas">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Piscina ${item}`}
                      alt={`Proyecto Piscina ${item}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hidraulico">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Hidráulico ${item}`}
                      alt={`Proyecto Hidráulico ${item}`}
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

      {/* Project Highlights */}
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
            <div className="flex flex-col">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Proyecto Destacado 1"
                  alt="Proyecto Destacado 1"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Perforación de Pozo Industrial</h3>
              <p className="mb-2 text-sm text-primary">Lima, Perú | 2023</p>
              <p className="text-muted-foreground">
                Perforación de pozo tubular de 150 metros de profundidad para una planta industrial, incluyendo
                instalación de sistema de bombeo y conexiones eléctricas.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Proyecto Destacado 2"
                  alt="Proyecto Destacado 2"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Sistema Eléctrico Comercial</h3>
              <p className="mb-2 text-sm text-primary">Arequipa, Perú | 2022</p>
              <p className="text-muted-foreground">
                Diseño e instalación completa del sistema eléctrico para un centro comercial, incluyendo tableros,
                iluminación y sistemas de emergencia.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Proyecto Destacado 3"
                  alt="Proyecto Destacado 3"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Piscina Resort Turístico</h3>
              <p className="mb-2 text-sm text-primary">Cusco, Perú | 2023</p>
              <p className="text-muted-foreground">
                Diseño, construcción e instalación de sistemas para piscina de un resort turístico, incluyendo sistemas
                de filtración, calentamiento y tratamiento de agua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
