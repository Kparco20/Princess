import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royal Debut Invitation',
  description: 'An elegant 18th birthday debut invitation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
