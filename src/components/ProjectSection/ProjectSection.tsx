import Container from '@/components/UI/Container/Container'
import Project from '@/components/UI/Project/Project'
import Title from '@/components/UI/Title/Title'
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
