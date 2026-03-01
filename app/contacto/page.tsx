"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    })

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Contáctanos</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Estamos aquí para ayudarte. Contáctanos para obtener más información sobre nuestros servicios o para
              solicitar una cotización.
            </p>
          </div>

          {/* Información de contacto (solo teléfono y correo) */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Teléfono</h3>
                <p className="mb-4 text-muted-foreground">Llámanos para una atención inmediata</p>
                <a href="tel:+51999479036" className="text-primary hover:underline">
                  +51 976 307 376
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Email</h3>
                <p className="mb-4 text-muted-foreground">Escríbenos para cualquier consulta</p>
                <a href="mailto:Jyt.perforaciones@gmail.com" className="text-primary hover:underline">
                  Jyt.perforaciones@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Envíanos un mensaje</h2>
              <p className="mb-8 text-muted-foreground">
                Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible. También puedes
                llamarnos directamente o escribirnos por correo electrónico.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      placeholder="Tu teléfono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      placeholder="Asunto de tu mensaje"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Preguntas Frecuentes</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Aquí encontrarás respuestas a algunas de las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-bold">¿Qué áreas geográficas cubren sus servicios?</h3>
              <p className="text-muted-foreground">
                Ofrecemos nuestros servicios en Lima y provincias. Para proyectos fuera de Lima, por favor contáctanos
                para verificar disponibilidad.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-bold">¿Cuánto tiempo toma la perforación de un pozo tubular?</h3>
              <p className="text-muted-foreground">
                El tiempo de perforación varía según la profundidad y las condiciones del terreno. En promedio, un
                pozo de 100 metros puede tomar entre 1 a 2 semanas para completarse.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-bold">¿Ofrecen garantía por sus servicios?</h3>
              <p className="text-muted-foreground">
                Sí, todos nuestros servicios cuentan con garantía. El período de garantía varía según el tipo de
                servicio realizado.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-bold">
                ¿Realizan mantenimiento de sistemas ya instalados por otras empresas?
              </h3>
              <p className="text-muted-foreground">
                Sí, ofrecemos servicios de mantenimiento para sistemas eléctricos, hidráulicos y de piscinas,
                independientemente de quién haya realizado la instalación original.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-3 text-lg font-bold">¿Cómo puedo solicitar una cotización?</h3>
              <p className="text-muted-foreground">
                Puedes solicitar una cotización a través de nuestro formulario de contacto, llamándonos directamente o
                enviándonos un email. Te responderemos a la brevedad posible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
