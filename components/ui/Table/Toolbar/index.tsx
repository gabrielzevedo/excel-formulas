'use client'

import { Table } from '@tanstack/react-table'
import { useCallback, useMemo } from 'react'

import { Button } from '@/components/ui/Button'

import { DataTableFilter } from '../DataTable'
import { FilterDateRange } from './FilterDateRange'
import { FilterTextSelect } from './FilterTextSelect'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  filters: DataTableFilter[]
}

export function DataTableToolbar<TData>({
  table,
  filters
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const columnOptions = useCallback(
    (columnId: string, subKey?: string) => {
      let flattenedArray
      const rows = table.getColumn(columnId)?.getFacetedRowModel()?.rows
      const keys = columnId.split('.')

      // get rows value from keys
      if (rows && keys.length > 2) {
        flattenedArray = rows
          .map((row) => {
            let value: Record<string, string> | unknown = row.original
            for (const key of keys) {
              value = Array.isArray(value)
                ? (value as Record<string, string>[]).map((item) => item[key])
                : (value as Record<string, string>)[key]
            }
            return value
          })
          .flat()
      } else {
        const mapData = table.getColumn(columnId)?.getFacetedUniqueValues()
        if (!mapData) return []
        flattenedArray = Array.from(mapData?.entries()).flatMap(
          ([names]) => names
        )

        if (subKey) {
          flattenedArray = flattenedArray.map((item) => {
            return subKey.split('.').reduce((obj, key) => obj[key], item)
          })
        }
      }

      const uniqueValues = [...new Set(flattenedArray)]
      const sortedValues = uniqueValues.sort()
      return sortedValues.map((value) => ({
        value,
        label: value
      }))
    },
    [table]
  )

  const filtersTextSelect = useMemo(() => {
    return filters.filter((filter) => filter.type !== 'date')
  }, [filters])

  const filtersDate = useMemo(() => {
    return filters.filter((filter) => filter.type === 'date')
  }, [filters])

  return (
    <div className="mt-3 flex flex-col flex-wrap items-center lg:mt-6 lg:flex-row">
      <span className="mb-3 mr-3 text-sm lg:mb-0">Filtrar por:</span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filtersTextSelect.map((filter) => {
          return (
            <FilterTextSelect
              key={filter.key}
              column={table.getColumn(filter.key)}
              title={filter.label}
              options={columnOptions(filter.key, filter.subKey)}
            />
          )
        })}
        {filtersDate.map((filter) => {
          return (
            <FilterDateRange
              key={filter.key}
              column={table.getColumn(filter.key)}
              title={filter.label}
              // options={columnOptions(filter.key)}
              // type="date"
            />
          )
        })}
        {isFiltered ? (
          <Button
            variant="link"
            icon="X"
            onClick={() => table.resetColumnFilters()}
          >
            Limpar
          </Button>
        ) : null}
      </div>
    </div>
  )
}
