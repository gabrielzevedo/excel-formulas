import Container from '@/components/Container'
import Header from '@/components/Header'
import CardPopular from '@/components/pages/home/CardPopular'
import Search from '@/components/pages/home/Search'

const Index = () => {
  return (
    <Container>
      <Header />
      <section className="mt-10 text-center lg:mt-32">
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
      <section className="mx-auto mt-10 w-full max-w-screen-sm lg:mt-20">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-brand-300">
          Fórmulas populares
        </h3>
        <div className="mt-4 grid grid-cols-2 justify-center gap-5 md:flex lg:mt-8">
          <CardPopular title="Somar" id="soma" />
          <CardPopular title="Média" id="media" />
          <CardPopular title="Se" subtitle="Lógica" id="se" />
          <CardPopular title="Procv" subtitle="Busca" id="procv" />
        </div>
      </section>
    </Container>
  )
}

export default Index
