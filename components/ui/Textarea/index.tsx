import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Label } from '../Label'

const TextareaVariants = cva(
  'placeholder:text-placeholder text-primary-900 focus-visible:border-brand flex min-h-[60px] w-full rounded-md border border-primary bg-white px-3 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-50',
  {
    variants: {
      hasError: {
        true: 'border-error focus-visible:ring-red-500/30 focus-visible:border-error'
      },
      disabled: {
        true: 'text-disabled bg-disabled-subtle border-disabled cursor-not-allowed'
      }
    }
  }
)

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'>,
    VariantProps<typeof TextareaVariants> {
  hasError?: boolean
  label?: string | React.ReactNode
  disabled?: boolean
  formGroupClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, hasError, disabled, formGroupClassName, ...props },
    ref
  ) => {
    return (
      <div
        className={`form-group flex flex-col gap-2 ${formGroupClassName ? formGroupClassName : ''}`}
      >
        {label ? (
          <Label htmlFor={props?.id || props?.name}>{label}</Label>
        ) : null}
        <textarea
          className={cn(TextareaVariants({ hasError, disabled, className }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
