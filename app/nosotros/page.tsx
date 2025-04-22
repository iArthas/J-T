import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Target, Users } from "lucide-react"
import Image from "next/image"

export default function NosotrosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_1690.JPG?height=600&width=1920"
            alt="Equipo J&T"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex min-h-[400px] flex-col items-center justify-center py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Sobre Nosotros</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Conoce más sobre J&T, nuestra historia, misión, visión y valores que nos definen como empresa líder en el
            sector.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg sm:h-[500px]">
              <Image src="/IMG_1433.jpg?height=800&width=600" alt="Historia de HERC" fill className="object-cover" />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                Somos J&T perforaciones, especialistas en técnicas de perforación a percusión.
                </p>
                <p>
                Una empresa dedicada a la perforación, mantenimiento, rehabilitación de pozos destinados al aprovechamiento de agua subterránea, instalación de sistemas de bombeo y otros servicios técnico hidráulico.
                </p>
                <p>
                Con más de 10 años de experiencia en el rubro, disponemos de una gama de conocimientos empíricos que avalan nuestro trabajo.
                </p>
                <p>
                  Hoy en día, J&T se ha consolidado como una empresa líder en el sector, reconocida por su
                  profesionalismo, compromiso y excelencia en cada uno de los proyectos que realiza.
                </p>
                <p>
                  Nuestro crecimiento se ha basado en la satisfacción de nuestros clientes y en la búsqueda constante de
                  la excelencia en cada uno de nuestros servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Misión, Visión y Valores</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Estos son los pilares que guían nuestro trabajo diario y nos impulsan a ser mejores cada día.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Misión</h3>
                <p className="text-muted-foreground">
                Safisfacer las necesidades de nuestros clientes y resolver sus dudas con las mejores soluciones.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Visión</h3>
                <p className="text-muted-foreground">
                Ser la empresa lider en el rubro de la perforación, brindando las mejores soluciones, de manera eficiente y responsable
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Integridad y honestidad en todas nuestras acciones</li>
                  <li>• Compromiso con la excelencia y la calidad</li>
                  <li>• Responsabilidad social y ambiental</li>
                  <li>• Trabajo en equipo y respeto mutuo</li>
                  <li>• Innovación y mejora continua</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestro Equipo</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Contamos con un equipo de profesionales altamente capacitados y comprometidos con la excelencia en cada
              proyecto.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Miembro ${member}`}
                    alt={`Miembro del equipo ${member}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">Nombre Apellido</h3>
                <p className="mb-2 text-primary">Cargo / Especialidad</p>
                <p className="text-sm text-muted-foreground">
                  Profesional con amplia experiencia en el sector, especializado en soluciones innovadoras y eficientes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestra Experiencia</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A lo largo de los años, hemos completado con éxito numerosos proyectos en diversos sectores.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-4xl font-bold">+10</h3>
                <p className="text-muted-foreground">Años de experiencia</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-4xl font-bold">+100</h3>
                <p className="text-muted-foreground">Clientes satisfechos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-4xl font-bold">+500</h3>
                <p className="text-muted-foreground">Proyectos completados</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-4xl font-bold">+10</h3>
                <p className="text-muted-foreground">Profesionales en el equipo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
