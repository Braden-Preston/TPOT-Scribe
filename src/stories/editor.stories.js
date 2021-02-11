import Component from '@templates/editor'

export default {
  title: 'Templates/Editor',
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
