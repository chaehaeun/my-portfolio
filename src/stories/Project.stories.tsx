import type { Meta } from '@storybook/react'
import Project from '@/components/UI/Project/Project'

const meta = {
  title: 'Project',
  component: Project,
} satisfies Meta<typeof Project>

export default meta

export const Default = () => <Project />
