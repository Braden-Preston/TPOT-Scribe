import Component from '@pages/settings'

export default {
  title: 'Pages/Settings',
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

export const Settings = Template.bind({})
Settings.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
