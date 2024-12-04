'use client'

import { Icon } from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'
import { hasSavedFormula } from '@/lib/saved'

interface CardSavedProps {
  id: string
}

const CardSaved = ({ id }: CardSavedProps) => {
  const hasSaved = hasSavedFormula(id)
  if (!hasSaved) return <div />

  return (
    <div>
      <Tooltip content="Salvo">
        <span>
          <Icon icon="HeartRounded" className="size-5 text-brand-500" />
        </span>
      </Tooltip>
    </div>
  )
}

export default CardSaved
