import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Defrente',
  description: 'Estudio de arquitectura y diseño - Creamos espacios que inspiran y transforman',
  generator: 'DT Marketing Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Kumbh+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
