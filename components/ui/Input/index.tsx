import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { useMemo } from 'react'

import { cn } from '@/lib/utils'

import { Icon } from '../Icon'
import { Label } from '../Label'

const inputVariants = cva(
  'placeholder:text-placeholder text-primary-900 focus-visible:border-brand flex h-10 w-full rounded-lg border border-primary bg-white px-3 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 transition-all read-only:bg-disabled-subtle',
  {
    variants: {
      hasError: {
        true: 'border-error focus-visible:ring-red-500/20 focus-visible:border-error'
      },
      disabled: {
        true: 'text-disabled bg-disabled-subtle border-disabled cursor-not-allowed'
      }
    }
  }
)

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'disabled' | 'prefix'
    >,
    VariantProps<typeof inputVariants> {
  hasError?: boolean
  label?: string | React.ReactNode
  disabled?: boolean
  formGroupClassName?: string
  prefix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      hasError,
      disabled,
      formGroupClassName,
      prefix,
      ...props
    },
    ref
  ) => {
    const randomId = useMemo(() => Math.random().toString(36).substring(7), [])
    if (!props.id && !props.name) {
      props.id = randomId
    }

    if (type === 'search') {
      prefix = <Icon icon="SearchLG" className="text-quaternary-500" />
    }

    return (
      <div
        className={`form-group flex flex-col gap-2 ${formGroupClassName ? formGroupClassName : ''}`}
      >
        {label ? (
          <Label htmlFor={props?.id || props?.name}>{label}</Label>
        ) : null}
        <div className="relative">
          {prefix ? (
            <label
              htmlFor={props?.id || props?.name}
              className="absolute flex h-full items-center pl-4"
            >
              {prefix}
            </label>
          ) : null}
          <input
            type={type}
            className={cn(
              inputVariants({ hasError, disabled, className }),
              ...(prefix ? ['pl-11'] : [])
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
