import { Column } from '@tanstack/react-table'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { Badge } from '../../Badge'
import { Button } from '../../Button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '../../Command'
import { Icon } from '../../Icon'
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover'

interface FilterTextSelectProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
}

export function FilterTextSelect<TData, TValue>({
  column,
  title,
  options
}: FilterTextSelectProps<TData, TValue>) {
  const selectedValues = new Set(column?.getFilterValue() as string[])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={
            selectedValues?.size > 0 ? 'secondaryColor' : 'secondaryGray'
          }
        >
          {title}
          {selectedValues?.size > 0 && (
            <>
              <span className="mx-1 hidden h-4 w-px bg-black/5 lg:inline" />
              <Badge variant="primary" showDot={false} className="lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge variant="primary" showDot={false} className="">
                    {selectedValues.size} selecionados
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="primary"
                        showDot={false}
                        key={option.value}
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            {/* <CommandEmpty>Nenhum item encontrado.</CommandEmpty> */}
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value)
                      } else {
                        selectedValues.add(option.value)
                      }
                      const filterValues = Array.from(selectedValues)
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      )
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'text-primary-foreground bg-primary'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <Icon icon="Check" className={cn('h-4 w-4')} />
                    </div>
                    {option.icon ? (
                      <option.icon className="text-muted-foreground mr-2 size-4" />
                    ) : null}
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Desmarcar itens
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
