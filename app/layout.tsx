import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "J&T | Perforaciones",
  description:
    "Empresa peruana especializada en perforación de pozos tubulares, servicios eléctricos, hidráulicos y sistemas para piscinas. Soluciones integrales para empresas y particulares.",
  keywords:
    "pozos tubulares, servicios eléctricos, sistemas para piscinas, servicios hidráulicos, perforación de pozos, Perú",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/logoJYT.png"
          type="image/png"
          sizes="48x48"  // Establece el tamaño en 48x48 píxeles
        />
    </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <WhatsAppButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
