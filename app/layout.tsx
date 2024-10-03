import './globals.css'

import { Inter } from 'next/font/google'

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
      <body>
        <main>
          <TooltipProvider>{children}</TooltipProvider>
        </main>
      </body>
    </html>
  )
}
