'use client'
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './ThemeProvider'
import MuiXLicense from '@/components/MuiXLicense'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Workspace Rental',
  description: 'Workspace Rental example app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MuiXLicense />
      <body className={inter.className}>
        <Header />
        <ThemeProvider>
          <AnimatePresence mode='popLayout' onExitComplete={() => window.scrollTo(0, 0)}>
            {children}
          </AnimatePresence>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
