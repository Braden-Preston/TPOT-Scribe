import Component from '@templates/publish'

export default {
  title: 'Templates/Publish',
  layout: 'centered',
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
