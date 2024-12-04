'use client'

import Fuse from 'fuse.js'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from '@/components/ui/Command'
import { FORMULAS } from '@/constants/formulas'
import { URLS } from '@/constants/routes'
import { IFormulaInfos } from '@/interfaces/formulas'
import { cn } from '@/lib/utils'

const options = {
  keys: Object.keys(FORMULAS[Object.keys(FORMULAS)[0]])
}
const fuse = new Fuse(Object.values(FORMULAS), options)

const Search = () => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const result = fuse.search(value)

  const filteredItems = result.map((item) => item.item)

  const handleSelectItem = (id: string) => {
    router.push(URLS.formula + id)
  }

  return (
    <Command
      shouldFilter={false}
      loop
      className={cn(
        'mx-auto mt-10 w-full max-w-screen-sm shadow-lg shadow-black/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-600/20 lg:mt-20',
        value ? 'rounded-3xl' : 'rounded-full'
      )}
    >
      <CommandInput
        value={value}
        onValueChange={(value) => setValue(value)}
        placeholder="Pesquise"
      />
      <CommandList>
        {value ? (
          <>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup>
              {filteredItems.map((item: IFormulaInfos) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelectItem(item.id)}
                >
                  {item.name}
                  <CommandShortcut>
                    {item.prefixPt} / {item.prefixEn}
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        ) : null}
      </CommandList>
    </Command>
  )
}

export default Search
