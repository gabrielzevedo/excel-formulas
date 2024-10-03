import { Table } from '@tanstack/react-table'

import { Button } from '../Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../Select'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  isDisabled?: boolean
}

export function Pagination<TData>({
  table,
  isDisabled = false
}: DataTablePaginationProps<TData>) {
  const count = !isDisabled ? table.getPrePaginationRowModel().rows.length : 0
  return (
    <div className="mt-6 border-0 border-t border-secondary px-0 py-3 lg:mt-0 lg:rounded-b-xl lg:border lg:border-t-0 lg:bg-white lg:px-6 lg:py-4">
      {!isDisabled ? (
        <div
          className={`flex w-full items-center justify-between ${isDisabled ? 'pointer-events-none opacity-50' : ''}`}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm text-quaternary-500">
              <span className="hidden lg:inline">Itens por</span>
              <span className="lg:hidden">Por</span> página
            </p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent
                side="top"
                ref={(ref) => {
                  if (!ref) return
                  ref.ontouchstart = (e) => {
                    e.preventDefault()
                  }
                }}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="hidden text-sm text-quaternary-500 lg:inline">
            {count} {count === 1 ? 'item' : 'itens'} no total
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="secondaryGray"
              icon="ChevronLeftDouble"
              className="hidden size-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Ir para primeira página</span>
            </Button>
            <Button
              variant="secondaryGray"
              icon="ChevronLeft"
              className="size-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Ir para página anterior</span>
            </Button>
            <div className="text-sm text-quaternary-500 lg:mx-2">
              <span className="hidden lg:inline">Página</span>{' '}
              {table.getState().pagination.pageIndex + 1} de{' '}
              {table.getPageCount() || 1}
            </div>
            <Button
              variant="secondaryGray"
              icon="ChevronRight"
              className="size-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Ir para próxima página</span>
            </Button>
            <Button
              variant="secondaryGray"
              icon="ChevronRightDouble"
              className="hidden size-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Ir para última página</span>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
