'use client'

import { useCallback, useState } from 'react'

import { Button } from './ui/Button'

interface ButtonSubmitLoadingProps {
  children: React.ReactNode
}

const ButtonSubmitLoading = ({ children }: ButtonSubmitLoadingProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    const form = document.querySelector('form')
    if (form && !form.checkValidity()) {
      form.reportValidity()
      return
    }
    setIsLoading(true)
  }, [])

  return (
    <Button type="submit" loading={isLoading} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default ButtonSubmitLoading
