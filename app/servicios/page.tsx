import { Button } from "@/components/ui/button"
import { Check, Droplets, Lightbulb, Waves, Wrench, Camera, Database, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/nuestros-servicios.jpg?height=600&width=1920"
            alt="Servicios J&T"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex min-h-[400px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Nuestros Servicios</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Ofrecemos soluciones profesionales especializadas en perforación de pozos tubulares y servicios relacionados
            con la más alta calidad.
          </p>
        </div>
      </section>

      {/* Perforación de pozos tubulares */}
      <section id="perforacion" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Droplets className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Perforación de pozos tubulares</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground">
                Somos especialistas en la perforación de pozos tubulares para la extracción de aguas subterráneas.
                Contamos con equipos de última generación y un equipo de profesionales altamente capacitados para
                garantizar resultados óptimos.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Perforación Rotatoria</h3>
                    <p className="text-sm text-muted-foreground">
                      Perforación de pozos con profundidades de 0 a 200 metros utilizando tecnología rotatoria.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Perforación de Torre de Percusión</h3>
                    <p className="text-sm text-muted-foreground">
                      Perforación de pozos con profundidades de 0 a 100 metros mediante torre de percusión.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Perforación de winch con trípode</h3>
                    <p className="text-sm text-muted-foreground">
                      Perforación de pozos con profundidades de 0 a 30 metros utilizando winch con trípode.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/perforacion1.jpg?height=400&width=300"
                  alt="Perforación Rotatoria"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/perforacion2.jpg?height=400&width=300"
                  alt="Torre de Percusión"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/perforacion3.jpg?height=400&width=300"
                  alt="Winch con trípode"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/perforacion4.jpg?height=400&width=300"
                  alt="Pozo tubular terminado"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estudio de detección de aguas subterráneas */}
      <section id="estudio" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Estudio de detección de aguas subterráneas</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/deteccion-agua.png?height=800&width=600"
                  alt="Sondaje Eléctrico Vertical"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-6 text-muted-foreground">
                Realizamos estudios profesionales para la detección de aguas subterráneas mediante la técnica de Sondaje
                Eléctrico Vertical (SEV). Este estudio es fundamental para determinar la viabilidad y ubicación óptima
                para la perforación de pozos.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sondaje Eléctrico Vertical (SEV)</h3>
                    <p className="text-sm text-muted-foreground">
                      Técnica geofísica que permite determinar la presencia de agua subterránea y la profundidad de los
                      acuíferos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Análisis e interpretación de datos</h3>
                    <p className="text-sm text-muted-foreground">
                      Procesamiento profesional de los datos obtenidos para determinar las características del subsuelo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Informe técnico detallado</h3>
                    <p className="text-sm text-muted-foreground">
                      Entregamos un informe completo con los resultados del estudio y recomendaciones para la
                      perforación.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar estudio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perforación diamantina y Geotecnia */}
      <section id="diamantina" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Perforación diamantina y Geotecnia</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground">
                Ofrecemos servicios especializados de perforación diamantina y estudios geotécnicos para proyectos de
                construcción, minería e ingeniería civil. Nuestro equipo técnico cuenta con amplia experiencia en este
                campo.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Perforación diamantina</h3>
                    <p className="text-sm text-muted-foreground">
                      Perforación de precisión para la obtención de testigos de roca y suelo para su análisis.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Estudios geotécnicos</h3>
                    <p className="text-sm text-muted-foreground">
                      Análisis de las propiedades mecánicas del suelo para determinar su capacidad portante.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Informes técnicos</h3>
                    <p className="text-sm text-muted-foreground">
                      Elaboración de informes detallados con los resultados de los estudios realizados.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/servicios/diamantina.jpg?height=800&width=600"
                alt="Perforación diamantina"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimiento de pozos tubulares */}
      <section id="mantenimiento" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Wrench className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Mantenimiento de pozos tubulares</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 grid gap-6 sm:grid-cols-2">
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/mantenimiento1.JPG?height=400&width=300"
                  alt="Limpieza de pozo"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/mantenimiento2.JPG?height=400&width=300"
                  alt="Desarenado de pozo"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/mantenimiento3.JPG?height=400&width=300"
                  alt="Rehabilitación de pozo"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/mantenimiento4.JPG?height=400&width=300"
                  alt="Mantenimiento preventivo"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-6 text-muted-foreground">
                Ofrecemos servicios completos de mantenimiento para pozos tubulares, garantizando su óptimo
                funcionamiento y prolongando su vida útil. Nuestro equipo técnico cuenta con la experiencia y
                equipamiento necesario para realizar trabajos de calidad.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Limpieza y desarenado</h3>
                    <p className="text-sm text-muted-foreground">
                      Eliminación de sedimentos, arena y otros materiales que obstruyen el pozo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Rehabilitación de pozos</h3>
                    <p className="text-sm text-muted-foreground">
                      Recuperación de pozos con problemas de rendimiento o deterioro.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mantenimiento preventivo</h3>
                    <p className="text-sm text-muted-foreground">
                      Programas de mantenimiento regular para prevenir problemas y asegurar el funcionamiento óptimo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reemplazo de componentes</h3>
                    <p className="text-sm text-muted-foreground">
                      Sustitución de tuberías, filtros y otros componentes deteriorados.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar servicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba de aforo y rendimiento */}
      <section id="aforo" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Activity className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Prueba de aforo y rendimiento de pozos tubulares</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground">
                Realizamos pruebas de aforo y rendimiento para determinar la capacidad productiva de los pozos
                tubulares. Estas pruebas son fundamentales para establecer los parámetros óptimos de operación y
                dimensionar correctamente los equipos de bombeo.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Pruebas de bombeo</h3>
                    <p className="text-sm text-muted-foreground">
                      Determinación del caudal óptimo de extracción y comportamiento del nivel dinámico.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Análisis de recuperación</h3>
                    <p className="text-sm text-muted-foreground">
                      Estudio del tiempo de recuperación del nivel de agua después del bombeo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Informe técnico</h3>
                    <p className="text-sm text-muted-foreground">
                      Elaboración de informe detallado con los resultados y recomendaciones para la operación del pozo.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar prueba</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/servicios/prueba-aforo.jpg?height=800&width=600" alt="Prueba de aforo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Venta e instalación de tableros eléctricos */}
      <section id="tableros" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Venta e instalación de tableros eléctricos</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/tablero-electrico.jpg?height=800&width=600"
                  alt="Tableros eléctricos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-6 text-muted-foreground">
                Ofrecemos servicios de venta e instalación de tableros eléctricos para sistemas de bombeo y otras
                aplicaciones. Nuestros tableros son diseñados y fabricados con componentes de alta calidad para
                garantizar su durabilidad y eficiencia.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tableros de control y potencia</h3>
                    <p className="text-sm text-muted-foreground">
                      Diseño y fabricación de tableros para el control y protección de sistemas de bombeo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tableros con variadores de frecuencia</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistemas de control avanzado para optimizar el consumo energético y prolongar la vida útil de los
                      equipos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Instalación y puesta en marcha</h3>
                    <p className="text-sm text-muted-foreground">
                      Servicio completo de instalación, configuración y puesta en funcionamiento de los tableros
                      eléctricos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mantenimiento y reparación</h3>
                    <p className="text-sm text-muted-foreground">
                      Servicios de mantenimiento preventivo y correctivo para tableros eléctricos.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venta e instalación de electrobombas sumergibles */}
      <section id="electrobombas" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Waves className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Venta e instalación de electrobombas sumergibles</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-muted-foreground">
                Ofrecemos servicios de venta e instalación de electrobombas sumergibles de las mejores marcas del
                mercado. Nuestro equipo técnico selecciona e instala el equipo más adecuado según las características
                específicas de cada pozo.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Electrobombas sumergibles</h3>
                    <p className="text-sm text-muted-foreground">
                      Venta de bombas de diferentes potencias y capacidades para pozos tubulares.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Asesoría técnica</h3>
                    <p className="text-sm text-muted-foreground">
                      Selección del equipo más adecuado según las características del pozo y las necesidades de
                      extracción.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Instalación profesional</h3>
                    <p className="text-sm text-muted-foreground">
                      Montaje y puesta en marcha de los equipos con todas las garantías.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mantenimiento y reparación</h3>
                    <p className="text-sm text-muted-foreground">
                      Servicios de mantenimiento preventivo y correctivo para electrobombas sumergibles.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/bomba-sumergible.JPG?height=400&width=300"
                  alt="Electrobomba sumergible"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/bomba-sumergible2.JPG?height=400&width=300"
                  alt="Instalación de bomba"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/bomba-sumergible3.JPG?height=400&width=300"
                  alt="Mantenimiento de bomba"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/bomba-sumergible4.JPG?height=400&width=300"
                  alt="Bomba en funcionamiento"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspección con cámara acuática */}
      <section id="camara" className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Camera className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Inspección con cámara acuática para pozos profundos</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/servicios/inspeccion-camara.jpg?height=800&width=600"
                  alt="Inspección con cámara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="mb-6 text-muted-foreground">
                Realizamos inspecciones de pozos tubulares con cámara acuática especializada, permitiendo visualizar el
                estado interior del pozo para diagnosticar problemas y planificar trabajos de mantenimiento o
                rehabilitación.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Inspección visual del pozo</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualización del estado de las tuberías, filtros y otros componentes del pozo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Detección de problemas</h3>
                    <p className="text-sm text-muted-foreground">
                      Identificación de obstrucciones, incrustaciones, roturas o deformaciones en el pozo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Registro en video</h3>
                    <p className="text-sm text-muted-foreground">
                      Grabación de la inspección para su posterior análisis y como documentación del estado del pozo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Informe técnico</h3>
                    <p className="text-sm text-muted-foreground">
                      Elaboración de informe detallado con los hallazgos y recomendaciones para el mantenimiento o
                      rehabilitación.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contacto">Solicitar inspección</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Necesitas alguno de nuestros servicios?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Contáctanos hoy mismo para obtener una consulta gratuita y descubrir cómo podemos ayudarte con tus
            necesidades de perforación de pozos y servicios relacionados.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
