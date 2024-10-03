import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Tooltip, TooltipProvider } from '.'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'Add to library',
    children: <Button>Hover</Button>
  },
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip {...args} />
      </TooltipProvider>
    )
  }
}
