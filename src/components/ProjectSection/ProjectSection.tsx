import { Container, Project, Title } from '@/components'
import { forwardRef } from 'react'

const ProjectSection = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div ref={ref}>
      <Container>
        <Title sectionName="PROJECTS" />
        <Project />
      </Container>
    </div>
  )
})

export default ProjectSection
