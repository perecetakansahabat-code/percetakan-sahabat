import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Percetakan Sahabat — Katalog Undangan Cetak Eksklusif',
  description:
    'Undangan cetak premium dengan desain eksklusif dan harga terjangkau. Kualitas terbaik. Area Kalimantan Selatan',
  generator: 'Percetakan Sahabat',
 icons: {
  icon: [
    { url: "/logo.png", sizes: "32x32", type: "image/png" },
    { url: "/logo.png", sizes: "192x192", type: "image/png" },
  ],
  apple: "/logo.png",
  shortcut: "/logo.png",
},
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`bg-background ${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
