import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Windows 11 for Web',
  description: 'Created with Anelka MD',
  icons: '/images/IconWindows.png'
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
