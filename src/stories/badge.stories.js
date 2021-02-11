import Component from '@templates/badge'

export default {
  title: 'Templates/Badge',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['pink', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple']
      }
    },
    name: {
      control: {
        type: 'select',
        options: [
          'home',
          'document-add',
          'pencil-alt',
          'shopping-cart',
          'bookmark',
          'cog'
        ]
      }
    }
  }
}

const Template = args => Component({ attributes: args })

export const Default = Template.bind({})
Default.args = {}

export const Overview = Template.bind({})
Overview.args = {
  color: 'indigo',
  name: 'home'
}

export const NewPage = Template.bind({})
NewPage.args = {
  color: 'green',
  name: 'document-add'
}

export const EditPage = Template.bind({})
EditPage.args = {
  color: 'blue',
  name: 'pencil-alt'
}

export const Checkout = Template.bind({})
Checkout.args = {
  color: 'yellow',
  name: 'shopping-cart'
}

export const Settings = Template.bind({})
Settings.args = {
  color: 'pink',
  name: 'cog'
}
