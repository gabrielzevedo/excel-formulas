import React from 'react'
import { Preview } from '@storybook/react'
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <main className={`${inter.className}`}>
        <Story />
      </main>
    )
  ]
}

export default preview
