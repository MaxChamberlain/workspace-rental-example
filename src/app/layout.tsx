import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './ThemeProvider'
import MuiXLicense from '@/components/MuiXLicense'
import Footer from '@/components/Footer'
import { AppWrapper } from '@/components/AppWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
          <AppWrapper>
            {children}
          </AppWrapper>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
