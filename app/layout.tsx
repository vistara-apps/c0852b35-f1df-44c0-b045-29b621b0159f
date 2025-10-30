import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Conversational Forms',
  description: 'Dynamic, AI-driven forms for onboarding, surveys, and applications on Base',
  openGraph: {
    title: 'AI Conversational Forms',
    description: 'Transform static forms into engaging, conversational experiences',
    images: ['/og-image.png'],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
