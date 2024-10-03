import React from 'react'
import ReactTextMask, {
  MaskedInputProps as ReactMaskedInputProps
} from 'react-text-mask'

import { Input, InputProps } from '../Input'
import { composeRefs, formatValuePatterns } from './utils'

function InputMaskComponent(
  { formatValue = 'default', prefix, ...props }: InputMaskProps,
  inputRef: React.ForwardedRef<HTMLInputElement>
) {
  const renderInput = (
    ref: (inputElement: HTMLElement) => void,
    props: InputProps
  ) => {
    const cRef = composeRefs<HTMLElement | null>(inputRef, ref)
    return <Input ref={cRef} {...props} />
  }

  const formatValueProps = formatValuePatterns[formatValue] || []

  const mergedProps = {
    mask: [],
    ...formatValueProps,
    ...props
  }

  return (
    <ReactTextMask
      render={renderInput}
      {...mergedProps}
      prefix={prefix as string}
    />
  )
}

export const InputMask = React.forwardRef(InputMaskComponent)

export interface InputMaskProps extends InputProps {
  /**
   * Predefined masks. When used, will replace passed `mask` attr
   * */
  formatValue?: keyof typeof formatValuePatterns
  mask?: ReactMaskedInputProps['mask']
  guide?: ReactMaskedInputProps['guide']
  placeholderChar?: ReactMaskedInputProps['placeholderChar']
  keepCharPositions?: ReactMaskedInputProps['keepCharPositions']
  pipe?: ReactMaskedInputProps['pipe']
  showMask?: ReactMaskedInputProps['showMask']
}

export type InputMaskType = ReactMaskedInputProps['mask']
