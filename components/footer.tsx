import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">J&T</h3>
            <p className="mb-4 text-sm">
              Empresa peruana especializada en perforación de pozos tubulares y servicios eléctricos, hidráulicos y de
              sistemas para piscinas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="Jyt.perforaciones@gmail.com" className="hover:text-white/80">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios#pozos" className="hover:text-white/80">
                  Perforación de pozos
                </Link>
              </li>
              <li>
                <Link href="/servicios#estudiodeaguas" className="hover:text-white/80">
                  Detección de aguas subterráneas
                </Link>
              </li>
              <li>
                <Link href="/servicios#hidraulico" className="hover:text-white/80">
                  Mantenimiento de pozos
                </Link>
              </li>
              <li>
                <Link href="/servicios#pozos" className="hover:text-white/80">
                  Servicios eléctricos y más.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white/80">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white/80">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-white/80">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white/80">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <Link href="tel:+51999479036" className="hover:text-white/80">
                +51 999 479 036
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <Link href="mailto:Jyt.perforaciones@gmail.com" className="hover:text-white/80">
                  Jyt.perforaciones@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} J&T. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
