import Component from '@pages/overview'

export default {
  title: 'Pages/Overview',
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

export const Overview = Template.bind({})
Overview.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
