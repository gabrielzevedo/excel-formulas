import { cva, type VariantProps } from 'class-variance-authority'
import * as Icons from 'untitledui-js-base'
import { LazyIconProps } from 'untitledui-js-base/dist/template'

import { cn } from '@/lib/utils'

export interface IconProps extends VariantProps<typeof iconVariants> {
  icon: LazyIconProps['name']
  // variant?: 'button' | 'default'
  // size?: string
  // width?: string
  // height?: string
  // stroke?: string
  // strokeWidth?: string
  className?: string
}

const iconVariants = cva('', {
  variants: {
    variant: {
      default: 'size-5 stroke-current'
    }
  }
})

const Icon = ({
  icon = 'ArrowLeft',
  variant = 'default',
  // size,
  // width,
  // height,
  // stroke,
  // strokeWidth,
  className
}: IconProps) => {
  const IconSelected = Icons[icon]
  return (
    <IconSelected
      // size={size}
      // width={width}
      // height={height}
      // stroke={stroke}
      // strokeWidth={strokeWidth}
      className={cn(iconVariants({ variant, className }))}
      name={icon}
    />
  )
}

export { Icon }
