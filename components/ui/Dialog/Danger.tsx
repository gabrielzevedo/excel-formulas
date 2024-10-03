import { useState } from 'react'

import { fetcherDelete } from '@/lib/fetcher'

import { Button } from '../Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger
} from '.'

export interface DialogErrorProps {
  children: React.ReactNode
  title: string | React.ReactNode
  description?: string | React.ReactNode
  buttonConfirmText?: string
  actionUrl: string
  onSuccess: () => void
  onError: () => void
}

const DialogDanger = ({
  children,
  title,
  description,
  buttonConfirmText = 'Remover',
  actionUrl,
  onSuccess,
  onError
}: DialogErrorProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      const { success } = await fetcherDelete(actionUrl)
      if (success) {
        onSuccess()
        setIsOpen(false)
      } else {
        onError()
      }
    } catch (error) {
      onError()
    }
    setIsLoading(false)
  }

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen} modal>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon icon="Trash01" variant="danger" className="mb-4" />
          <DialogTitle className="leading-6">{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondaryGray">Cancelar</Button>
          </DialogClose>
          <Button variant="danger" onClick={handleConfirm} loading={isLoading}>
            {buttonConfirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogDanger
