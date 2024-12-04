import Container from '@/components/Container'
import CardPopular from '@/components/pages/home/CardPopular'
import Search from '@/components/pages/home/Search'

const Index = () => {
  return (
    <Container>
      <header className="m-3 mx-auto mt-10 max-w-screen-xl">
        <h1>
          <img
            src="img/excel-formulas.png"
            alt="Excel Formulas"
            className="mx-auto h-14"
          />
        </h1>
      </header>
      <section className="mt-32 text-center">
        <h2 className="mx-auto w-full max-w-2xl text-4xl font-semibold leading-tight lg:text-6xl">
          Encontre{' '}
          <span className="border-4 border-emerald-700 px-4 font-bold text-brand-500">
            fórmulas
          </span>
          <br />
          <span className="font-bold text-brand-500">do Excel</span> rapidamente
        </h2>
        <Search />
      </section>
      <section className="mx-auto mt-20 w-full max-w-screen-sm">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-brand-300">
          Fórmulas populares
        </h3>
        <div className="mt-8 flex justify-center gap-5">
          <CardPopular title="Somar" id="soma" />
          <CardPopular title="Média" id="media" />
        </div>
      </section>
    </Container>
  )
}

export default Index
