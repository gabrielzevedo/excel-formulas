'use client'

import { useState } from 'react'

import { hasSavedFormula, removeFormula, saveFormula } from '@/lib/saved'

import { Button } from './ui/Button'

interface SaveProps {
  id: string
}

const Save = ({ id }: SaveProps) => {
  const [isSaved, setIsSaved] = useState(hasSavedFormula(id))

  const handleSave = () => {
    setIsSaved(!isSaved)
    if (isSaved) return removeFormula(id)
    saveFormula(id)
  }

  return (
    <Button
      variant={isSaved ? 'secondaryGray' : 'secondaryColor'}
      icon="Star01"
      className="w-full sm:w-auto"
      onClick={handleSave}
    >
      {isSaved ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    </Button>
  )
}

export default Save
