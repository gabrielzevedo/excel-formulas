import { cn } from '@/lib/utils'

export interface BoxProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export interface BoxHeaderProps {
  title: string
  subtitle?: string | React.ReactNode
  actions?: React.ReactNode
  className?: string
}

function Box({ children, onClick, className }: BoxProps) {
  return (
    <div
      className={`w-full rounded-xl border border-secondary bg-white px-4 py-5 sm:p-10 ${className ? className : ''}`}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </div>
  )
}

function BoxSeparator() {
  return <hr className="-mx-4 my-5 h-1 border-secondary sm:-mx-10 sm:my-10" />
}

function BoxHeader({ title, subtitle, actions, className }: BoxHeaderProps) {
  return (
    <div
      className={cn(
        'mb-5 flex flex-col items-start justify-between gap-3 sm:mb-6 sm:flex-row',
        className
      )}
    >
      <div>
        <h2 className="text-base font-semibold text-primary-900 sm:text-lg">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-xs text-tertiary-600 sm:text-sm">{subtitle}</p>
        ) : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </div>
  )
}

function BoxFooter({ children }: BoxProps) {
  return (
    <div className="-mx-4 -mb-5 mt-5 flex items-center justify-end gap-3 border-t border-secondary px-6 py-4 sm:-mx-10 sm:-mb-10 sm:mt-10">
      {children}
    </div>
  )
}

export { Box, BoxFooter, BoxHeader, BoxSeparator }
