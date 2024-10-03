import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle'
  }
}
