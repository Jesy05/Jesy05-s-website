// app/layout.tsx
import "./globals.css"; // "llave" que activa Tailwind y colores personalizados

export const metadata = {
  title: 'Jesy González | Personal Site', // titulo de la pestaña
  description: 'Industrial & Systems Engineering Student Portfolio', //
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* El body ahora podrá usar tus clases de colores */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}