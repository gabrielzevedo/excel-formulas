import Link from 'next/link'

import Container from '@/components/Container'
import Copy from '@/components/Copy'
import Save from '@/components/Save'
import { Button } from '@/components/ui/Button'
import { FORMULAS } from '@/constants/formulas'
import { URLS } from '@/constants/routes'

interface FormulaProps {
  formula: keyof typeof FORMULAS
  lang?: string
}

const Formula = ({ formula, lang = 'pt' }: FormulaProps) => {
  const {
    name,
    description,
    example,
    whenUse,
    stepByStep,
    prefixPt,
    prefixEn
  } = FORMULAS[formula]

  const prefix = lang === 'en' ? prefixEn : prefixPt
  const replacePrefix = (text: string) => text.replace('{PREFIX}', prefix)
  const langOpposite = lang === 'en' ? 'pt' : 'en'

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
        <h2 className="text-4xl font-semibold leading-tight lg:text-6xl">
          Fórmula
          <span className="ml-2 font-bold text-brand-500">{name}</span>
        </h2>
        <p className="mt-2 text-lg">{description}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href={`${URLS.formula}${formula}/${langOpposite}`}
            passHref
            legacyBehavior
          >
            <Button variant="secondaryGray" asType="a">
              Ver em {langOpposite === 'pt' ? 'português' : 'inglês'}
            </Button>
          </Link>
          <Save id={formula} />
        </div>
      </section>
      <section>
        <div className="mx-auto mt-28 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            Exemplo
          </h3>
          <div className="mt-2 flex flex-col items-center justify-between gap-2 rounded-md bg-white p-4 text-brand-500 shadow sm:flex-row">
            <pre>{replacePrefix(example)}</pre>
            <Copy data={replacePrefix(example)} />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto mt-20 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            Quando usar
          </h3>
          <p className="mt-2">{whenUse}</p>
        </div>
      </section>
      <section>
        <div className="mx-auto mb-10 mt-20 w-full max-w-2xl">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            Passo a passo
          </h3>
          <ol className="mt-2 list-inside list-decimal">
            {stepByStep.map((step, index) => (
              <li key={index} className="mb-1">
                {replacePrefix(step)}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Container>
  )
}

export default Formula
