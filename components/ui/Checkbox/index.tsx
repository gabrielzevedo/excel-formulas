'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Icon } from '../Icon'

const CheckboxBtn = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded border border-primary bg-white text-white transition-all focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 disabled:cursor-not-allowed disabled:!border-disabled disabled:!bg-primary-hover disabled:text-placeholder data-[state=checked]:border-brand-solid data-[state=checked]:bg-brand-600',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Icon icon="Check" className="mt-px size-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
CheckboxBtn.displayName = CheckboxPrimitive.Root.displayName

interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    'title'
  > {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
}

const Checkbox = ({ title, subtitle, ...props }: CheckboxProps) => {
  if (!title) return <CheckboxBtn {...props} />
  return (
    <label className="items-top inline-flex gap-2">
      <CheckboxBtn {...props} />
      <div className="group grid gap-1">
        <div className="text-sm leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:group-[]:font-semibold">
          {title}
        </div>
        {subtitle ? (
          <div className="text-xs text-tertiary-600">{subtitle}</div>
        ) : null}
      </div>
    </label>
  )
}

export { Checkbox }
