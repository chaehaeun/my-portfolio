import { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  style?: string
}

const Container = ({ children, style }: ContainerProps) => {
  return (
    <section
      className={`w-full mb-24 px-4 max-w-7xl mx-auto md:px-28 ${style}`}
    >
      <div className="w-full mx-auto transition ">{children}</div>
    </section>
  )
}

export default Container
