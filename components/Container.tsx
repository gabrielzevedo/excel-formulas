interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto w-full p-5">{children}</div>
}

export default Container
