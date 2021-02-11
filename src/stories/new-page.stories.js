import Component from '@pages/new-page'

export default {
  title: 'Pages/New',
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

export const New = Template.bind({})
New.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
