import { Meta, StoryObj } from '@storybook/react'

import { Badge } from '.'

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    children: 'Default',
    variant: 'primary'
  }
}
