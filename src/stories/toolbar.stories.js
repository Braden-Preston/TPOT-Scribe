import Component from '@templates/toolbar'

export default {
  title: 'Templates/Toolbar',
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
