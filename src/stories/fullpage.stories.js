import Component from '@layouts/fullpage'

export default {
  title: 'Layouts/Fullpage',
  argTypes: {
    bg: { control: 'color' }
  }
}

const Template = args => Component({ attributes: args })

export const Fullpage = Template.bind({})
Fullpage.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
