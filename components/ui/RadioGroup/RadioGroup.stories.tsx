import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupItem } from '.'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup
} as Meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem
        value="option-one"
        id="option-one"
        title="Title One"
        subtitle="Example"
      />
      <RadioGroupItem
        value="option-two"
        id="option-two"
        title="Title Two"
        subtitle="Example"
      >
        <p className="text-sm">Content</p>
      </RadioGroupItem>
    </RadioGroup>
  )
}
