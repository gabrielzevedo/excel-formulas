'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Icon } from '../Icon'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItemPrimitive = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'peer aspect-square h-4 w-4 rounded-full border border-primary transition-all focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 disabled:cursor-not-allowed disabled:!border-disabled disabled:!bg-primary-hover disabled:text-placeholder disabled:opacity-50 data-[state=checked]:border-brand-solid data-[state=checked]:bg-brand-600',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon icon="Circle" className="size-1.5 fill-current text-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItemPrimitive.displayName = RadioGroupPrimitive.Item.displayName

interface RadioGroupItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    'title'
  > {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
}

const RadioGroupItem = ({ title, subtitle, ...props }: RadioGroupItemProps) => {
  if (!title) return <RadioGroupItemPrimitive {...props} />
  return (
    <label className="items-top inline-flex gap-2">
      <RadioGroupItemPrimitive {...props} />
      <div className="group flex w-full flex-col gap-1">
        <div className="text-sm leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:group-[]:font-semibold">
          {title}
        </div>
        {subtitle ? (
          <div className="text-xs text-tertiary-600">{subtitle}</div>
        ) : null}
        {props?.children ? (
          <div className="peer-data-[state=unchecked]:group-[]:hidden">
            {props.children}
          </div>
        ) : null}
      </div>
    </label>
  )
}

export { RadioGroup, RadioGroupItem }
