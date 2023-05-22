import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '@/components/UI/Button/Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'RESUME',
  onClick: () => {},
  align: 'left',
}

export const Center = Template.bind({})
Center.args = {
  label: 'Show More',
  onClick: () => {},
  align: 'center',
}
