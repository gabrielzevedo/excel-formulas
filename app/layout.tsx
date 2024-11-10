import './globals.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'

import { TooltipProvider } from '@/components/ui/Tooltip'
import { PAGE_TITLE } from '@/constants/common'
import { NEXT_PUBLIC_PROJECT_URL } from '@/constants/env'

export const metadata = {
  metadataBase: new URL(NEXT_PUBLIC_PROJECT_URL),
  title: PAGE_TITLE,
  description: ''
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="bg-brand-50/20 bg-[url('/img/header-bg.svg')] bg-top bg-no-repeat">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8311294041504798"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
