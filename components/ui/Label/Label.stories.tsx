import { Meta, StoryObj } from '@storybook/react'

import { Label } from '.'

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Example'
  }
}
