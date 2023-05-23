import type { Meta } from '@storybook/react'
import List from '@/components/UI/List/List'
// import { object } from 'prop-types'

const meta = {
  title: 'List',
  component: List,
} satisfies Meta<typeof List>

export default meta

export const Default = {
  args: {
    data: '에네이',
  },
}
