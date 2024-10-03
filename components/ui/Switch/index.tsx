'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  text?: string
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ text = '', className, ...props }, ref) => (
  <div className={cn('inline-flex items-center', className)}>
    <SwitchPrimitives.Root
      className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-600 data-[state=unchecked]:bg-quaternary"
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-md ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
    {text ? (
      <label className="ml-2 text-sm text-primary-900" htmlFor={props?.id}>
        {text}
      </label>
    ) : null}
  </div>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
