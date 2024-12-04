import Link from 'next/link'

import Container from '@/components/Container'
import Copy from '@/components/Copy'
import Header from '@/components/Header'
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
  const boolFalse = lang === 'en' ? 'FALSE' : 'FALSO'
  const replacePrefix = (text: string) =>
    text.replace('{PREFIX}', prefix).replace('{FALSE}', boolFalse)
  const langOpposite = lang === 'en' ? 'pt' : 'en'

  return (
    <Container>
      <Header />
      <section className="mx-auto mt-10 w-full max-w-2xl text-center lg:mt-32">
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
        <div className="mx-auto mt-12 w-full max-w-2xl lg:mt-28">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            Exemplo
          </h3>
          <div className="mt-2 flex flex-col items-center justify-between gap-2 rounded-md bg-white p-4 text-brand-500 shadow sm:flex-row">
            <span className="break-words font-mono">
              {replacePrefix(example)}
            </span>
            <Copy data={replacePrefix(example)} />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto mt-10 w-full max-w-2xl lg:mt-20">
          <h3 className="text-2xl font-semibold leading-tight lg:text-4xl">
            Quando usar
          </h3>
          <p className="mt-2">{whenUse}</p>
        </div>
      </section>
      <section>
        <div className="mx-auto my-10 w-full max-w-2xl lg:mt-20">
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
