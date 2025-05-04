import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Windows 11 - Clone',
  description: 'Created with Anelka MD',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
