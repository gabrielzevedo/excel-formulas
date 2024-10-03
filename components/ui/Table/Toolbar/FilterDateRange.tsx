import { Column } from '@tanstack/react-table'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { formatDate, formatDateDB } from '@/lib/format'
import { isValidDate } from '@/lib/utils'

import { Badge } from '../../Badge'
import { Button } from '../../Button'
import { Combobox } from '../../Combobox'
import { Input } from '../../Input'
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover'

interface FilterDateRangeProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
}

// generate years options, -3 and +3 from current year
const yearsOptions = Array.from(
  { length: 7 },
  (_, i) => new Date().getFullYear() - 3 + i
).map((year) => ({
  value: year.toString(),
  label: year.toString()
}))

export function FilterDateRange<TData, TValue>({
  column,
  title
}: FilterDateRangeProps<TData, TValue>) {
  const selectedValues = new Set(column?.getFilterValue() as string[])
  const [dateRange, setDateRange] = useState<[Date, Date]>()

  const handleDateChange = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (isValidDate(value) && value !== '' && value !== 'Invalid Date') {
        setDateRange((old) => {
          const newDateRange = old ? [...old] : [undefined, undefined]
          newDateRange[index] = new Date(value)
          return newDateRange as [Date, Date]
        })
      }
    },
    []
  )

  const handleYearChange = useCallback((value: string) => {
    const year = parseInt(value)
    setDateRange([new Date(year, 0, 1), new Date(year, 11, 31)])
    const inputsIds = ['inputDateFrom', 'inputDateTo']
    inputsIds.forEach((id, index) => {
      const input = document.getElementById(id) as HTMLInputElement
      if (input) {
        input.value = index === 0 ? `${year}-01-01` : `${year}-12-31`
      }
    })
  }, [])

  useEffect(() => {
    if (dateRange && dateRange[0] && dateRange[1]) {
      column?.setFilterValue(dateRange)
    }
  }, [dateRange, column])

  const [dateFrom, dateTo] = Array.from(selectedValues)

  const dateFromFormatted = useMemo(() => {
    return dateFrom ? formatDate(dateFrom) : ''
  }, [dateFrom])

  const dateToFormatted = useMemo(() => {
    return dateTo ? formatDate(dateTo) : ''
  }, [dateTo])

  const dateFromFormattedToField = useMemo(() => {
    return dateFromFormatted ? formatDateDB(dateFromFormatted) : ''
  }, [dateFromFormatted])

  const dateToFormattedToField = useMemo(() => {
    return dateToFormatted ? formatDateDB(dateToFormatted) : ''
  }, [dateToFormatted])

  const yearFormatted = useMemo(() => {
    if (dateFromFormattedToField && dateToFormattedToField) {
      const yearFrom = dateFromFormattedToField.split('-')[0]
      const yearTo = dateToFormattedToField.split('-')[0]
      if (yearFrom === yearTo) return yearFrom
    }
    return ''
  }, [dateFromFormattedToField, dateToFormattedToField])

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={
              selectedValues?.size > 0 ? 'secondaryColor' : 'secondaryGray'
            }
          >
            {title}
            {selectedValues?.size > 1 && (
              <>
                <span className="mx-1 hidden h-4 w-px bg-black/5 lg:inline" />
                <div className="flex items-center">
                  <Badge variant="primary" showDot={false}>
                    {dateFromFormatted}
                  </Badge>
                  <span className="-mx-px h-px w-3 border-t border-primary" />
                  <Badge variant="primary" showDot={false}>
                    {dateToFormatted}
                  </Badge>
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[345px]" align="start">
          <div className="mb-2 font-semibold text-primary-900">Ano</div>
          <Combobox
            placeholder="Selecione o ano"
            options={yearsOptions}
            onValueChange={handleYearChange}
            defaultValue={yearFormatted}
          />
          <hr className="-mx-4 mb-4 mt-5 border-secondary" />
          <div className="mb-2 font-semibold text-primary-900">
            Intervalo de data
          </div>
          <div className="flex w-full gap-3">
            <div className="w-full">
              <p className="mb-1 text-xs text-tertiary-600">Data de início</p>
              <Input
                id="inputDateFrom"
                type="date"
                onChange={handleDateChange(0)}
                defaultValue={dateFromFormattedToField}
                max={
                  dateRange?.[1] ? formatDateDB(formatDate(dateRange[1])) : ''
                }
              />
            </div>
            <div className="w-full">
              <p className="mb-1 text-xs text-tertiary-600">Data de fim</p>
              <Input
                id="inputDateTo"
                type="date"
                onChange={handleDateChange(1)}
                defaultValue={dateToFormattedToField}
                min={
                  dateRange?.[0] ? formatDateDB(formatDate(dateRange[0])) : ''
                }
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
