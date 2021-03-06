import Component from '@templates/application'

export default {
  title: 'Application',
  argTypes: {}
}

const Template = args => Component({ attributes: args })

export const Application = Template.bind({})
Application.args = {}
