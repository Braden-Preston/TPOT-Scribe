import Component from '@pages/edit-page'

export default {
  title: 'Pages/Edit',
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

export const Edit = Template.bind({})
Edit.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
