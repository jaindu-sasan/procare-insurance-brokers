import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'ProCare Insurance Brokers | Protecting What Matters Most',
  description: 'ProCare Insurance Brokers - Your trusted partner for Life, Health, Vehicle, Business, and Travel Insurance in Sri Lanka. Get expert advice and personalized coverage today.',
  keywords: 'insurance, life insurance, health insurance, vehicle insurance, business insurance, travel insurance, Sri Lanka, insurance brokers',
  icons: {
    icon: '/favicon.ico',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#c62828',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
