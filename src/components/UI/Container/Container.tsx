import React, { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  style?: string
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <section className={`w-full px-4 max-w-7xl mx-auto md:px-28 ${style}`}>
      <div className="w-full mx-auto transition ">{children}</div>
    </section>
  )
}

export default Container
