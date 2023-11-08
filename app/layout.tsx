import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
const inter = Inter({ subsets: ['latin'] })
import Document, { Html, Head, Main, NextScript } from 'next/document';


export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Find Pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <main>

            <Nav />
            {children}
    
          </main>
        
        </body>
      </html>
  )
}
