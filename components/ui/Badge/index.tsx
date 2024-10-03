import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-active text-quaternary-500 border-primary',
        secondary: 'border-brand bg-brand-50 text-brand-secondary-700',
        danger: 'border-error bg-error-primary text-error',
        success: 'border-success bg-success-primary text-success-primary-600',
        warning: 'border-warning bg-warning-primary text-warning-primary-600',
        info: 'border-info bg-info text-info'
      },
      size: {
        default: 'px-2 py-0.5',
        sm: 'px-1.5 py-0'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  showDot?: boolean
}

function Badge({
  className,
  variant,
  size,
  showDot = true,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {showDot ? (
        <span className="mr-1 hidden size-1.5 rounded-full bg-current lg:inline" />
      ) : null}
      {props.children}
    </div>
  )
}

export { Badge, badgeVariants }
