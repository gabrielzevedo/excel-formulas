interface TitleProps {
  title: string
  subtitle?: string | React.ReactNode
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold text-primary-900 lg:text-3xl">
        {title}
      </h1>
      {subtitle ? (
        <h2 className="mx-auto mt-4 max-w-80 px-4 text-center text-sm text-tertiary-600 sm:max-w-full sm:text-base">
          {subtitle}
        </h2>
      ) : null}
    </div>
  )
}

export default Title
