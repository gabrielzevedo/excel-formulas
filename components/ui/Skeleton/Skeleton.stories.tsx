import { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '.'

export default {
  title: 'Components/Skeleton',
  component: Skeleton
} as Meta

type Story = StoryObj<typeof Skeleton>

export const CustomClasses: Story = {
  args: {
    className: 'h-5 w-1/2'
  }
}
