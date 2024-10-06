import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alis Go',
  description: 'Alis-Go Solana NFTs',
  openGraph: {
    title: 'Alis Go',
    description: 'Discover the amazing world of Alis-Go Solana NFTs.',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'Alis-Go Solana NFTs',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
