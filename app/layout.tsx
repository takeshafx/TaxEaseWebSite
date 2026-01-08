import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://taxeaseadvisory.com'),
  title: {
    default: 'TaxEase Web Service',
    template: `%s | TaxEase Web Service`,
  },
  description: 'Professional tax services and solutions',
  keywords: ['bookkeeping canada', 'personal tax canada', 'coperate tax', 'GST filling canada',],
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
