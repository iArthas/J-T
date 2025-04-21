import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Propietario de Hotel",
    content:
      "HERC realizó la instalación completa del sistema de piscina de nuestro hotel. El trabajo fue impecable y el equipo muy profesional. Recomendado al 100%.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "María Sánchez",
    role: "Gerente de Proyecto",
    content:
      "Contratamos a HERC para la perforación de un pozo tubular en nuestra planta industrial. El trabajo se realizó en el tiempo acordado y con excelentes resultados.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Juan Pérez",
    role: "Propietario de Casa",
    content:
      "Excelente servicio en la instalación eléctrica de mi casa. El equipo fue muy profesional y el trabajo quedó perfecto. Definitivamente los volveré a contratar.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Nos enorgullece el reconocimiento de nuestros clientes por la calidad de nuestro trabajo y servicio.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
