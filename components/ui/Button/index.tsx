import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Icon, IconProps } from '../Icon'

const buttonVariants = cva(
  'gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors shadow-sm border py-2 h-10 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 disabled:text-gray-400 disabled:border-gray-200 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-600 text-white hover:bg-brand-800 border-transparent disabled:bg-gray-100',
        secondaryGray:
          'bg-white text-secondary-700 hover:bg-gray-50 border-primary',
        secondaryColor:
          'bg-white text-brand-700 hover:bg-brand-50 border-brand',
        danger:
          'bg-error-solid text-white hover:bg-error-hover hover:border-error-hover focus-visible:ring-red-500/20 disabled:bg-gray-100 border-error-solid',
        link: 'mx-auto p-0 text-tertiary-600 hover:text-primary-900 hover:bg-transparent border-transparent shadow-none'
      },
      loading: {
        true: 'pointer-events-none text-gray-400 border-gray-200 bg-gray-100',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  icon?: IconProps['icon']
  iconPosition?: 'left' | 'right'
  asType?: JSX.ElementType
  asProps?: Record<string, unknown>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      loading = false,
      icon,
      iconPosition = 'left',
      asType,
      asProps,
      ...props
    },
    ref
  ) => {
    const Comp = asType ? asType : 'button'

    if (loading) {
      props['aria-busy'] = true
      props['aria-disabled'] = true
      props['children'] = (
        <>
          {props.children}
          <Icon icon="Loading02" className="size-4 animate-spin" />
        </>
      )
    } else if (icon && props?.children) {
      props['children'] = (
        <>
          {iconPosition === 'left' ? <Icon icon={icon} /> : null}
          {props.children}
          {iconPosition === 'right' ? <Icon icon={icon} /> : null}
        </>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, loading, className }))}
        ref={ref}
        {...props}
        {...asProps}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
