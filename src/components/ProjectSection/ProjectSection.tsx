import React, { forwardRef } from 'react'
import Container from '@/components/UI/Container/Container'
import Title from '@/components/UI/Title/Title'
import Project from '@/components/UI/Project/Project'

interface ProjectSectionProps {
  ref?: React.Ref<HTMLDivElement>
}

const ProjectSection: React.FC<ProjectSectionProps> = forwardRef(
  (_props, ref) => {
    return (
      <div ref={ref}>
        <Container>
          <Title sectionName="PROJECTS" />
          <Project />
        </Container>
      </div>
    )
  },
)

export default ProjectSection
