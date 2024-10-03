import { Meta, StoryObj } from '@storybook/react'
import * as Icons from 'untitledui-js-base'

import { DialogIcon } from '.'

type Story = StoryObj<typeof DialogIcon>

export default {
  title: 'Components/Dialog/Icon',
  component: DialogIcon,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info']
    },
    icon: {
      control: 'select',
      options: Object.keys(Icons)
    }
  }
} as Meta

export const Info: Story = {
  args: {
    icon: 'InfoCircle',
    variant: 'info'
  }
}
