import React, { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className="">{children}</section>
}

export default Container
