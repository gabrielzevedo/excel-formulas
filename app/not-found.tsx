import Link from 'next/link'

import BackButton from '@/components/BackButton'
import { Button } from '@/components/ui/Button'
import { URLS } from '@/constants/routes'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-start justify-center gap-4 px-4 sm:px-14">
      <p className="text-base font-semibold text-brand-secondary-700">
        Erro 404
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-primary-900 sm:text-6xl">
        Página não encontrada
      </h1>
      <p className="text-sm text-tertiary-600 sm:text-xl">
        Desculpe, a página que está tentando acessar não existe ou foi movida.
      </p>
      <div className="mt-10 flex w-full flex-col-reverse gap-3 sm:flex-row">
        <BackButton />
        <Button
          variant="primary"
          asType={Link}
          asProps={{
            href: URLS.home
          }}
        >
          Ir para página inicial
        </Button>
      </div>
    </div>
  )
}
