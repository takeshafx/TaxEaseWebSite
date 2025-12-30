import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxEase Web Service',
  description: 'Professional tax services and solutions',
   icons: {
    icon: '/favicon.png', // References public/favicon.svg
    apple: '/apple-touch-icon.png', // References public/apple-touch-icon.png
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
