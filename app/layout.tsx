import type { Metadata } from 'next'
import { Cormorant_Garamond, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-script'
})

export const metadata: Metadata = {
  title: '4 Años Contigo | Our Story',
  description: 'Un libro digital romántico - Nuestra historia de amor',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dancingScript.variable}`}>
      <body className="font-serif antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
