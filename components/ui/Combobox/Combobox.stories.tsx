import { Meta, StoryObj } from '@storybook/react'

import { Combobox } from '.'

export default {
  title: 'Components/Combobox',
  component: Combobox
} as Meta

type Story = StoryObj<typeof Combobox>

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js'
  },
  {
    value: 'remix',
    label: 'Remix'
  },
  {
    value: 'astro',
    label: 'Astro'
  }
]

export const Default: Story = {
  args: {
    options: frameworks,
    defaultValue: 'remix',
    onValueChange: alert
  }
}
