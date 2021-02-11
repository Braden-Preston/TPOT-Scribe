import Component from '@templates/route'

export default {
  title: 'Templates/Route',
  argTypes: {
    bg: { control: 'color' }
  }
}

const Template = args => Component({ attributes: args })

export const Basic = Template.bind({})
Basic.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
