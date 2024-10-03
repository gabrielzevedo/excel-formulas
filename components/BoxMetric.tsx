import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Icon, IconProps } from '@/components/ui/Icon'
import { Skeleton } from '@/components/ui/Skeleton'

interface BoxMetricProps {
  title: string
  subtitle?: string
  value: number | string
  icon: IconProps['icon']
  isLoading?: boolean
  addLink?: string
  listLink?: string
}

const BoxMetric = ({
  isLoading = false,
  title,
  subtitle,
  value,
  addLink,
  listLink,
  icon
}: BoxMetricProps) => {
  return (
    <div className="flex w-full flex-col justify-between rounded-xl border border-secondary bg-white p-4 pb-0 shadow-sm lg:p-5 lg:pb-0">
      <div className="flex items-start gap-4 lg:gap-6">
        <div className="rounded-full bg-tertiary p-2 lg:p-3">
          <Icon
            icon={icon}
            className="size-5 shrink-0 text-quaternary-500 lg:size-6"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-tertiary-600">{title}</p>
          <p className="text-3xl font-semibold text-primary-900 lg:text-4xl">
            {isLoading ? <Skeleton className="h-9 w-1/2 lg:h-10" /> : value}
          </p>
          {subtitle ? (
            <p className="mt-2 text-xs text-tertiary-600">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="-mx-5 mt-4 flex items-center justify-between border-t px-4 py-3 lg:mt-5 lg:px-5 lg:py-4">
        {addLink ? (
          <Link href={addLink} passHref legacyBehavior>
            <Button
              variant="link"
              asType="a"
              className="mx-0 h-auto text-brand-600"
              icon="Plus"
            >
              Adicionar
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {listLink ? (
          <Link href={listLink} passHref legacyBehavior>
            <Button variant="link" asType="a" className="mx-0 h-auto">
              Ver todos
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default BoxMetric
