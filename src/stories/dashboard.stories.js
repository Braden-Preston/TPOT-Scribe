import Component from '@layouts/dashboard'

export default {
  title: 'Layouts/Dashboard',
  argTypes: {
    bg: { control: 'color' }
  }
}

const Template = args => Component({ attributes: args })

export const Dashboard = Template.bind({})
Dashboard.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
