import Component from '@templates/loader'

export default {
  title: 'Templates/Loader',
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
