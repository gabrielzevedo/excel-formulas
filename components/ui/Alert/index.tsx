'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { forwardRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { Icon, IconProps } from '../Icon'

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof alertVariants> {
  variant?: 'default' | 'error'
  className?: string
  icon?: IconProps['icon']
  title?: React.ReactNode | string
  description?: React.ReactNode | string
  showClose?: boolean
}

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4',
  {
    variants: {
      variant: {
        default: 'border-primary text-tertiary-600 [&>svg]:stroke-brand-600',
        error: 'border-error text-error [&>svg]:stroke-red-600'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'default',
      icon = 'AlertCircle',
      title,
      description,
      showClose = false,
      ...props
    },
    ref
  ) => {
    const [isClosed, setIsClosed] = useState(false)
    if (isClosed) return null
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon icon={icon} />
        {title ? (
          <AlertTitle className={showClose ? 'pr-4' : ''}>{title}</AlertTitle>
        ) : null}
        {description ? (
          <AlertDescription className={showClose ? 'pr-4' : ''}>
            {description}
          </AlertDescription>
        ) : null}
        {showClose ? (
          <button
            type="button"
            className="absolute right-4 top-4 opacity-50 transition-opacity hover:opacity-100"
            aria-label="Fechar"
            onClick={() => setIsClosed(true)}
          >
            <Icon icon="X" className="size-4" />
          </button>
        ) : null}
      </div>
    )
  }
)
Alert.displayName = 'Alert'

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
