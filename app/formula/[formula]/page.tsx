import { notFound } from 'next/navigation'
import { redirect } from 'next/navigation'

import Formula from '@/components/pages/formula'
import { FORMULAS } from '@/constants/formulas'
import { URLS } from '@/constants/routes'

export async function generateStaticParams() {
  return Object.keys(FORMULAS).map((formula) => ({ formula }))
}

export default async function Page({
  params
}: {
  params: { formula: keyof typeof FORMULAS; lang?: string }
}) {
  const validFormulas = Object.keys(FORMULAS)
  if (!validFormulas.includes(params?.formula)) return notFound()

  if (!params?.lang) return redirect(`${URLS.formula}${params.formula}/pt`)

  return <Formula formula={params.formula} />
}
