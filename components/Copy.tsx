'use client'

import { useState } from 'react'

import { copyToClipboard } from '@/lib/utils'

import { Button } from './ui/Button'

interface CopyProps {
  data: string
}

const Copy = ({ data }: CopyProps) => {
  const [showSuccess, setShowSuccess] = useState(false)

  const callback = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 2000)
  }

  return (
    <Button
      variant="primary"
      icon={showSuccess ? 'CheckCircle' : 'Copy06'}
      className="w-full sm:w-auto"
      onClick={() => copyToClipboard(data, callback)}
    >
      {showSuccess ? 'Copiado!' : 'Copiar'}
    </Button>
  )
}

export default Copy
