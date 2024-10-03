import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '.'

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    variant: 'default',
    icon: 'ArrowRight'
  }
}
