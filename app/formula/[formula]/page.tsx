import { notFound } from 'next/navigation'

import Container from '@/components/Container'
import Copy from '@/components/Copy'
import { FORMULAS } from '@/constants/formulas'

export async function generateStaticParams() {
  return Object.keys(FORMULAS).map((formula) => ({
    formula: formula
  }))
}

export default async function Page({
  params
}: {
  params: { formula: keyof typeof FORMULAS }
}) {
  const validFormulas = Object.keys(FORMULAS)
  if (!validFormulas.includes(params?.formula)) return notFound()

  const { name, description, example } = FORMULAS[params.formula]

  return (
    <Container>
      <header className="m-3 mx-auto mt-10 max-w-screen-xl">
        <h1>
          <a href="/">
            <img
              src="/img/excel-formulas.png"
              alt="Excel Formulas"
              className="mx-auto h-14"
            />
          </a>
        </h1>
      </header>
      <section className="mx-auto mt-32 w-full max-w-2xl text-center">
        <h2 className="text-6xl font-semibold leading-tight">
          Fórmula
          <span className="ml-2 font-bold text-brand-500">{name}</span>
        </h2>
        <p className="mt-2 text-lg">{description}</p>
      </section>
      <section>
        <div className="mx-auto mt-32 w-full max-w-2xl">
          <h3 className="text-4xl font-semibold leading-tight">Exemplo</h3>
          <div className="mt-2 flex flex-col items-center justify-between gap-2 rounded-md bg-white p-4 text-brand-500 shadow sm:flex-row">
            <pre>{example}</pre>
            <Copy data={example} />
          </div>
        </div>
      </section>
    </Container>
  )
}
