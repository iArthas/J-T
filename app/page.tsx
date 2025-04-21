import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Droplets, Lightbulb, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PartnersSection from "@/components/partners-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[800px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/JYTportada.jpeg"
            alt="J&T Nuestros Servicios"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Soluciones integrales en servicios eléctricos e hidráulicos
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Especialistas en perforación de pozos tubulares, servicios eléctricos, hidráulicos y sistemas para piscinas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/servicios">
                Nuestros Servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Servicios</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Ofrecemos soluciones completas y profesionales para todas sus necesidades eléctricas, hidráulicas y de
              sistemas para piscinas.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Perforación de Pozos"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Perforación de Pozos</h3>
                <p className="mb-4 text-muted-foreground">
                  Perforación de pozos tubulares para la extracción de aguas subterráneas con diferentes métodos según
                  la profundidad requerida.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios#perforacion">Ver más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Servicios Eléctricos"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Servicios Eléctricos</h3>
                <p className="mb-4 text-muted-foreground">
                  Venta e instalación de tableros eléctricos y electrobombas sumergibles para sistemas de extracción de
                  agua.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios#tableros">Ver más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Estudios y Mantenimiento"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Estudios y Mantenimiento</h3>
                <p className="mb-4 text-muted-foreground">
                  Estudios de detección de aguas subterráneas, pruebas de aforo, mantenimiento de pozos e inspección con
                  cámara.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/servicios#estudio">Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué elegir J&T?</h2>
              <p className="mb-8 text-muted-foreground">
                Somos una empresa peruana con amplia experiencia en el sector, ofreciendo soluciones integrales con los
                más altos estándares de calidad y servicio.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Experiencia y profesionalismo</h3>
                    <p className="text-sm text-muted-foreground">
                      Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en el
                      sector.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Soluciones integrales</h3>
                    <p className="text-sm text-muted-foreground">
                      Ofrecemos servicios completos que abarcan desde el diseño hasta la implementación y mantenimiento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tecnología de punta</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos equipos y tecnología de última generación para garantizar resultados óptimos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Compromiso con la calidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Nos comprometemos a ofrecer servicios de la más alta calidad, cumpliendo con los estándares más
                      exigentes.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/nosotros">Conoce más sobre nosotros</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg sm:h-[500px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Equipo HERC trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para comenzar tu proyecto?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Contáctanos hoy mismo para obtener una consulta gratuita y descubrir cómo podemos ayudarte con tus
            necesidades eléctricas, hidráulicas o de sistemas para piscinas.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
