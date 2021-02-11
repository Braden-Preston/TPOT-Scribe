import Component from '@pages/checkout'

export default {
  title: 'Pages/Checkout',
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

export const Checkout = Template.bind({})
Checkout.args = {
  text: 'Hello There!',
  enabled: false,
  bg: 'dodgerblue'
}
