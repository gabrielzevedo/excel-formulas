import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Default',
    variant: 'primary',
    disabled: false
  }
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Copy',
    icon: 'Clipboard'
  }
}

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Copy',
    icon: 'Clipboard',
    iconPosition: 'right'
  }
}

export const WithCustomElement: Story = {
  args: {
    variant: 'secondaryGray',
    disabled: false,
    children: 'Go to dashboard',
    icon: 'Link01',
    asType: 'a',
    asProps: {
      href: '/dashboard',
      target: '_blank'
    }
  }
}
