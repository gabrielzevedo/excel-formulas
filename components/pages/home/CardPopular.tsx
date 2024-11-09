import Link from 'next/link'

import { URLS } from '@/constants/routes'

interface CardPopularProps {
  title: string
  subtitle?: string
  link: string
}

const CardPopular = ({ title, subtitle, link }: CardPopularProps) => {
  return (
    <Link
      href={URLS.formula + link}
      className="flex h-32 w-full flex-col items-center justify-center rounded-3xl bg-white p-3 text-center font-semibold text-brand-600 shadow-xl shadow-emerald-700/10 transition-all hover:shadow-2xl hover:shadow-emerald-700/30"
    >
      <p>{title}</p>
      {subtitle ? (
        <p className="mt-2 font-normal text-brand-300">{subtitle}</p>
      ) : null}
    </Link>
  )
}

export default CardPopular
