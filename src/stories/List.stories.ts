import type { Meta } from '@storybook/react'
import List from '@/components/UI/List/List'

const meta = {
  title: 'List',
  component: List,
} satisfies Meta<typeof List>

export default meta

export const Default = {
  args: {
    objName: 'Exprience',
    data: {
      id: 1,
      name: 'test',
      date: '2023-05-00',
      detail: ['test1', 'test2'],
      tag: null,
      stackName: null,
    },
  },
}

export const Stack = {
  args: {
    objName: 'Skills',
    data: {
      id: 1,
      name: null,
      date: null,
      detail: ['test1', 'test2'],
      tag: 'HTML5',
      stackName:
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    },
  },
}
