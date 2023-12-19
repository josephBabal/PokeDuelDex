import './globals.scss'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
const inter = Inter({ subsets: ['latin'] })
import Document, { Html, Head, Main, NextScript } from 'next/document';

type Metadata = {
  title: string,
  description: string
}

export const metadata: Metadata = {
  title: 'PokeDuelDex',
  description: 'PokeDuelDex is where you can discover and find information about any Pokémon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head> 
          <title> {metadata.title} </title>
          <meta
            name="description"
            content={metadata.description} 
            key="desc"
          />
        </head>
        <body className={inter.className}>
          <main>

            <Nav />
            {children}
    
          </main>
        
        </body>
      </html>
  )
}
