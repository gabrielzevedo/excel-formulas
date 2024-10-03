import { Meta, StoryObj } from '@storybook/react'

import { Alert } from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  args: {
    variant: 'default',
    className: 'max-w-xs w-full',
    title: 'Title',
    icon: 'Announcement02',
    description: 'Description',
    showClose: true
  }
}

export const Error: StoryObj = {
  args: {
    variant: 'error',
    title: 'Title',
    className: 'max-w-xs w-full',
    description: 'Description',
    showClose: false
  }
}
