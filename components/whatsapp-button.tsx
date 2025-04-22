import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/51999479036?text=Hola%2C%20necesito%20información"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
