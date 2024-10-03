/* eslint-disable indent */
'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../Button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '../Command'
import { Icon } from '../Icon'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'

export interface ComboboxProps {
  classNameTrigger?: string
  classNameContent?: string
  options: { value: string; label: string }[]
  placeholder?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  emptyAction?: React.ReactNode | string
}

export function Combobox({
  classNameTrigger,
  classNameContent,
  options,
  placeholder = 'Selecione um item',
  onValueChange,
  defaultValue = '',
  disabled = false,
  emptyAction
}: ComboboxProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if (defaultValue && !value) return setValue(defaultValue)
    if (!defaultValue && value) setValue('')
  }, [defaultValue, value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="secondaryGray"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between truncate font-normal text-placeholder',
            value && 'text-primary-900',
            classNameTrigger
          )}
        >
          {value
            ? options.find(
                (option) => option.value?.toLowerCase() === value?.toLowerCase()
              )?.label
            : placeholder}
          <Icon
            icon="ChevronSelectorVertical"
            className="ml-2 size-4 shrink-0 text-primary-900 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn(
          'w-[var(--radix-popover-trigger-width)] p-0',
          classNameContent
        )}
      >
        <Command className="border-0 shadow-none">
          {options?.length > 0 ? (
            <CommandInput placeholder="Pesquise..." />
          ) : null}
          <CommandGroup className="max-h-[300px] overflow-auto">
            {options?.length > 0 ? (
              options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={`${option.value} : ${option.label}`}
                  onSelect={() => {
                    // const formattedValue = currentValue.split(' : ')[0]
                    const formattedValue = option.value
                    setValue(formattedValue)
                    onValueChange?.(formattedValue)
                    setOpen(false)
                  }}
                >
                  <Icon
                    icon="Check"
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>
                Nenhum item encontrado. {emptyAction || null}
              </CommandEmpty>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
