'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup'
import { buildUrl } from '@/lib/utils'

import { TableFilterProps } from '../TableActions'

export interface FilterStatusProps {
  items?: TableFilterProps[]
}

const defaultItems: TableFilterProps[] = [
  {
    label: (
      <>
        <span className="mr-1 hidden lg:inline">Ver</span> Todos
      </>
    ),
    value: 'all'
  },
  {
    label: (
      <>
        <span className="mr-1 hidden lg:inline">Ver</span> Ativos
      </>
    ),
    value: 'true'
  },
  {
    label: (
      <>
        <span className="mr-1 hidden lg:inline">Ver</span> Inativos
      </>
    ),
    value: 'false'
  }
]

const FilterStatus = ({ items = defaultItems, filterKey = 'enabled' }) => {
  'use client'
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const filterValue = searchParams.get(filterKey) || 'all'

  const [value, setValue] = useState(filterValue)

  const handleValueChange = useCallback(
    (value: string) => {
      if (value) {
        setValue(value)
        router.push(
          buildUrl({
            path: pathname,
            actualQuery: searchParams,
            ...(value === 'all' && { removeQuery: [filterKey] }),
            query: {
              ...(value !== 'all' && { [filterKey]: value })
            }
          }),
          { scroll: false }
        )
      }
    },
    [pathname, router, searchParams, filterKey]
  )

  return (
    <ToggleGroup type="single" value={value} onValueChange={handleValueChange}>
      {items.map((item, index) => (
        <ToggleGroupItem key={index} value={item.value}>
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

export default FilterStatus
