import BackButton from '../BackButton'

interface HeaderProps {
  title: string
  actions?: React.ReactNode
  hasBackButton?: boolean
}

const Header = ({ title, actions, hasBackButton = false }: HeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between lg:mb-8">
      <div className="flex items-center text-2xl">
        {hasBackButton ? (
          <>
            <BackButton link />
            <span className="mx-2 text-tertiary-600">/</span>
          </>
        ) : null}
        <h1 className="text-2xl font-semibold text-primary-900 lg:text-3xl">
          {title}
        </h1>
      </div>
      <div className="flex gap-3">{actions}</div>
    </div>
  )
}

export default Header
