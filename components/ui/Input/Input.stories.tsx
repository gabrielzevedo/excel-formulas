import { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  args: {
    placeholder: 'Example'
  }
}

export const Disabled: StoryObj = {
  args: {
    placeholder: 'Example disabled',
    disabled: true
  }
}

export const CustomType: StoryObj = {
  args: {
    placeholder: 'Example with custom type',
    type: 'password'
  }
}

export const WithLabel: StoryObj = {
  args: {
    placeholder: 'Example with label',
    label: 'Label text',
    id: 'example'
  }
}

export const WithError: StoryObj = {
  args: {
    placeholder: 'Example with error',
    label: 'Label text',
    id: 'example',
    hasError: true
  }
}
