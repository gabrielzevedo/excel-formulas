'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { URLS } from '@/constants/routes'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 sm:px-14">
      <p className="text-base font-semibold text-brand-secondary-700">Ops!</p>
      <h1 className="text-2xl font-semibold tracking-tight text-primary-900 sm:text-6xl">
        Algo deu errado
      </h1>
      <p className="text-sm text-tertiary-600 sm:text-xl">
        Verifique sua conexão com a internet e tente novamente.
      </p>
      <div className="mt-10 flex w-full flex-col-reverse justify-center gap-3 sm:flex-row">
        <Button variant="primary" onClick={() => reset()}>
          Tentar novamente
        </Button>
        <Link href={URLS.home}>
          <Button variant="secondaryGray" asType="a">
            Ir para página inicial
          </Button>
        </Link>
      </div>
    </div>
  )
}
