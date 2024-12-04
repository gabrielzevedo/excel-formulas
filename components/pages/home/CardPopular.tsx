import Link from 'next/link'

import { URLS } from '@/constants/routes'

import CardSaved from './CardSaved'

interface CardPopularProps {
  title: string
  subtitle?: string
  id: string
}

const CardPopular = ({ title, subtitle, id }: CardPopularProps) => {
  return (
    <Link
      href={URLS.formula + id}
      className="relative flex h-32 w-full flex-col items-center justify-center rounded-3xl bg-white p-3 text-center font-semibold text-brand-600 shadow-xl shadow-emerald-700/10 transition-all hover:shadow-2xl hover:shadow-emerald-700/30"
    >
      <div className="absolute right-4 top-4">
        <CardSaved id={id} />
      </div>
      <p>{title}</p>
      {subtitle ? (
        <p className="mt-2 font-normal text-brand-300">{subtitle}</p>
      ) : null}
    </Link>
  )
}

export default CardPopular
