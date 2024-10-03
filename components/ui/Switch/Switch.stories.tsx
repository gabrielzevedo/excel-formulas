import { Meta, StoryObj } from '@storybook/react'

import { Switch } from '.'

export default {
  title: 'Components/Switch',
  component: Switch
} as Meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const CheckedAndDisabled: Story = {
  args: {
    disabled: true,
    checked: true
  }
}

export const WithText: Story = {
  args: {
    checked: true,
    text: 'Ativo'
  }
}
