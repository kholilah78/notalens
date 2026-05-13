import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOTALENS',
  description: 'Professional tool for high-speed documentation and lens-based analysis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
