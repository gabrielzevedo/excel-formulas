import { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../Icon'
import { InputMask } from '.'

export default {
  title: 'Components/InputMask',
  component: InputMask
} as Meta

type Story = StoryObj<typeof InputMask>

export const Default: Story = {
  args: {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  }
}

export const Date: Story = {
  args: {
    formatValue: 'date',
    defaultValue: '10/11/1990',
    name: 'birthday',
    placeholder: '00/00/0000'
  }
}

export const OnlyNumbers: Story = {
  args: {
    formatValue: 'onlyNumber'
  }
}

export const OnlyText: Story = {
  args: {
    formatValue: 'onlyText'
  }
}

export const ZipCode: Story = {
  args: {
    formatValue: 'zipCode',
    defaultValue: '21310310'
  }
}

export const Phone: Story = {
  args: {
    formatValue: 'phone',
    defaultValue: '2139774179'
  }
}

export const Cellphone: Story = {
  args: {
    formatValue: 'cellphone',
    defaultValue: '21970100616'
  }
}

export const PhoneOrCellphone: Story = {
  args: {
    formatValue: 'phoneOrCellphone',
    defaultValue: '21970100616'
  }
}

export const CPF: Story = {
  args: {
    formatValue: 'cpf',
    defaultValue: '52517738033'
  }
}

export const CNPJ: Story = {
  args: {
    formatValue: 'cnpj',
    defaultValue: '03167626000185'
  }
}

export const DateWithIcon: Story = {
  args: {
    formatValue: 'date',
    defaultValue: '10/11/1990',
    prefix: <Icon icon="Calendar" className="size-4 text-placeholder" />
  }
}
