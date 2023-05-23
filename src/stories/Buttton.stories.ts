import type { Meta } from '@storybook/react'
import Button from '@/components/UI/Button/Button'

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

export const Resume = {
  args: {
    label: 'RESUME',
    onClick: () => {},
    align: 'left',
  },
}

export const More = {
  args: {
    label: 'Show More',
    onClick: () => {},
    align: 'center',
  },
}
