import { Meta, StoryObj } from '@storybook/react'

import { Popover, PopoverContent, PopoverTrigger } from '.'

export default {
  title: 'Components/Popover',
  component: Popover
} as Meta

type Story = StoryObj<typeof Popover>

export const Primary: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}
