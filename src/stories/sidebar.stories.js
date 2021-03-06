import Component from '@templates/sidebar'

export default {
  title: 'Templates/Sidebar',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

const Template = args => Component({ attributes: args })

export const Basic = Template.bind({})
Basic.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue',
  // onClick() {
  //   console.log('check!')
  // }
}
