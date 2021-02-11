import Component from '@pages/404'

export default {
  title: 'Pages/Missing',
  parameters: {
    viewport: {
      defaultViewport: 'md'
    }
  },
  argTypes: {
    bg: { control: 'color' }
  }
}

const Template = args => Component({ attributes: args })

export const Missing = Template.bind({})
Missing.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
