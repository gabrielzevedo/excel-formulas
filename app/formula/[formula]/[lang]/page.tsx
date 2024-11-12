import { notFound, redirect } from 'next/navigation'

import Formula from '@/components/pages/formula'
import { FORMULAS, FORMULAS_LANG } from '@/constants/formulas'
import { URLS } from '@/constants/routes'

export async function generateStaticParams() {
  const withoutLang = Object.keys(FORMULAS).map((formula) => ({ formula }))
  const withLang = Object.keys(FORMULAS).flatMap((formula) =>
    FORMULAS_LANG.map((lang) => ({
      formula,
      lang
    }))
  )

  return [...withoutLang, ...withLang]
}

export default async function Page({
  params
}: {
  params: { formula: keyof typeof FORMULAS; lang?: string }
}) {
  const validFormulas = Object.keys(FORMULAS)
  if (!validFormulas.includes(params?.formula)) return notFound()

  if (!params?.lang || !FORMULAS_LANG.includes(params?.lang))
    return redirect(`${URLS.formula}${params.formula}/pt`)

  return <Formula formula={params.formula} lang={params.lang} />
}
