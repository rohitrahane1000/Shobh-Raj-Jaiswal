import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'CA Shobh Raj Jaiswal - Chartered Accountants',
  description: 'Professional Chartered Accountancy Services by CA Shobh Raj Jaiswal. Expert financial consulting, tax planning, and business advisory services.',
  keywords: 'chartered accountant, CA, tax consultant, financial advisor, audit, accounting services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}