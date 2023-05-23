import type { Meta } from '@storybook/react'
import Title from '@/components/UI/Title/Title'

const meta = {
  title: 'Title',
  component: Title,
} satisfies Meta<typeof Title>

export default meta

export const SectionTitle = {
  args: {
    sectionName: 'ABOUT',
  },
}
export const AboutTitle = {
  args: {
    sectionName: 'SKILLS',
    about: true,
  },
}
