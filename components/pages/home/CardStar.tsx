'use client'

import { Icon } from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'
import { hasSavedFormula } from '@/lib/saved'

interface CardStarProps {
  id: string
}

const CardStar = ({ id }: CardStarProps) => {
  const hasSaved = hasSavedFormula(id)
  if (!hasSaved) return null

  return (
    <Tooltip content="Adicionado como favorito">
      <span>
        <Icon icon="Star01" className="size-5 text-brand-500" />
      </span>
    </Tooltip>
  )
}

export default CardStar
