import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MobilizaBR - Ética, Cidadania e Sustentabilidade',
  description: 'Projeto de Extensão Universitária - MobilizaBR',
  generator: 'MobilizaBR',
  icons: {
    icon: '/mobilizabr-logo.svg',
    shortcut: '/mobilizabr-logo.svg',
    apple: '/mobilizabr-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
