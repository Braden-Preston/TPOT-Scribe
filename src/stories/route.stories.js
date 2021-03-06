import Component from '@templates/route'

export default {
  title: 'Templates/Route',
  argTypes: {
    bg: { control: 'color' }
  }
}

const Template = args => Component({ attributes: args })

export const Default = Template.bind({})
Default.args = {}

export const Match = Template.bind({})
Match.args = {
  match: 'settings',
  page: 'settings'
}

export const NoMatch = Template.bind({})
NoMatch.args = {
  match: 'overview',
  page: 'settings'
}
