'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/Table'

import { Input } from '../Input'
import { Skeleton } from '../Skeleton'
import { Pagination } from './Pagination'
import TableActions, { TableFilterProps } from './TableActions'
import { DataTableToolbar } from './Toolbar'

export interface DataTableFilter {
  key: string
  subKey?: string
  label: string
  type?: 'text' | 'date'
}

interface DataTableProps<TData, TValue> {
  filters?: DataTableFilter[]
  columns: ColumnDef<TData, TValue>[]
  data?: TData[]
  isLoading?: boolean
  error?: boolean
  showFilterStatus?: boolean
  customFilter?: TableFilterProps[]
  filterKey?: string
  showSearch?: boolean
  searchPlaceholder?: string
  searchIndex?: string
  rowLink?: string
  rowCondition?: (arg0: TData) => boolean
}

export function DataTable<TData, TValue>({
  filters,
  columns,
  data = [],
  isLoading = false,
  error = false,
  showFilterStatus = true,
  filterKey,
  customFilter,
  showSearch = true,
  searchPlaceholder = 'Pesquisar pelo nome',
  searchIndex = 'name',
  rowLink
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters
    },
    filterFns: {
      simpleText: (row, id, value) => {
        const rowValue = row.getValue<string>(id).toString()
        return rowValue.includes(value)
      },
      // date: (row, id, value) => {
      //   const rowValue = row.getValue<string>(id).toString()
      //   const date = new Date(rowValue)
      //   const filterDate = new Date(value)
      //   return (
      //     date.getDate() === filterDate.getDate() &&
      //     date.getMonth() === filterDate.getMonth() &&
      //     date.getFullYear() === filterDate.getFullYear()
      //   )
      // }
      date: (row, columnId, value) => {
        const rowValue = row.getValue(columnId) as string
        const date = new Date(rowValue)

        const [start, end] = value ?? [] // value => two date input values
        if (
          !(start instanceof Date || start === undefined) ||
          !(end instanceof Date || end === undefined)
        ) {
          console.error(
            `Filter value of column "${columnId}" is expected to be an array of two dates, but got ${value}`
          )
          return false
        }

        // If one filter defined and date is undefined, filter it
        if ((start || end) && !date) {
          return false
        }

        if (start && !end) {
          return date.getTime() >= start.getTime()
        } else if (!start && end) {
          return date.getTime() <= end.getTime()
        } else if (start && end) {
          return (
            date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
          )
        }

        return true
      }
    }
  })

  const tableHeaderContent = useMemo(() => {
    return table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))
  }, [table])

  return (
    <div className="relative">
      {showSearch || showFilterStatus ? (
        <div className="rounded-t-xl border-secondary lg:border lg:bg-white lg:p-6">
          <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
            <TableActions
              showFilterStatus={showFilterStatus}
              customFilter={customFilter}
              filterKey={filterKey}
            />

            <div className="flex w-full items-center justify-end lg:w-1/2">
              {showSearch ? (
                <Input
                  id="inputSearch"
                  type="search"
                  placeholder={searchPlaceholder}
                  value={
                    (table
                      .getColumn(searchIndex)
                      ?.getFilterValue() as string) ?? ''
                  }
                  onChange={(event) =>
                    table
                      .getColumn(searchIndex)
                      ?.setFilterValue(event.target.value)
                  }
                  formGroupClassName="w-full lg:max-w-sm"
                />
              ) : null}
            </div>
          </div>
          {filters ? (
            <DataTableToolbar table={table} filters={filters} />
          ) : null}
        </div>
      ) : null}
      <Table>
        <TableHeader>{tableHeaderContent}</TableHeader>
        <TableBody className="flex flex-col gap-2 lg:table-row-group">
          {data.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={
                  rowLink
                    ? 'cursor-pointer hover:border-primary hover:ring-brand-100 lg:hover:border-t lg:hover:border-primary lg:hover:bg-brand-25/50 lg:hover:ring-1'
                    : ''
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              {isLoading ? (
                <>
                  {columns.map((cell, index) => (
                    <TableCell key={`${cell.id}-${index}`}>
                      <Skeleton className="mb-1 h-5" />
                    </TableCell>
                  ))}
                </>
              ) : (
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center lg:py-10"
                >
                  {error
                    ? 'Ocorreu um erro ao carregar os itens.'
                    : 'Nenhum registro encontrado.'}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination table={table} isDisabled={isLoading || data?.length === 0} />
    </div>
  )
}
