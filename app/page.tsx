'use client'

const Index = () => {
  return (
    <>
      <header className="sticky top-5 m-3 mx-auto max-w-screen-xl">
        <h1>
          <img
            src="img/excel-formulas.png"
            alt="Excel Formulas"
            className="h-14"
          />
        </h1>
      </header>
      <section className="m-auto mt-32 max-w-screen-xl">
        <h2 className="w-full max-w-2xl text-6xl font-semibold leading-tight">
          Encontre{' '}
          <span className="border-4 border-emerald-700 px-4 font-bold text-brand-500">
            fórmulas
          </span>
          <br />
          <span className="font-bold text-brand-500">do Excel</span> rapidamente
        </h2>
      </section>
    </>
  )
}

export default Index
