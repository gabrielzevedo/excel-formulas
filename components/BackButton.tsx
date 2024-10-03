'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/Button'

interface BackButtonProps {
  link?: boolean
  url?: string
}

const BackButton = ({ link = false, url = '' }: BackButtonProps) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => (url ? router.push(url) : router.back())}
      variant={link ? 'link' : 'secondaryGray'}
      icon="ArrowLeft"
    >
      Voltar
    </Button>
  )
}

export default BackButton
