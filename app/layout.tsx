import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'DSHub Internship - Start Your Tech Career',
  description: 'Join DSHub Internship - a structured program where you work on real projects, collaborate with a team, receive guidance from mentors.',
  icons:"/Logo.png",
}

export const viewport: Viewport = {
  themeColor: '#63B4F5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ '--font-montserrat': montserrat.style.fontFamily } as React.CSSProperties}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
