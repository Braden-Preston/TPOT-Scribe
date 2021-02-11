import Component from '@templates/application'

export default {
  title: 'Application',
  // argTypes: {
  //   page: {
  //     control: {
  //       type: 'select',
  //       options: ['overview', 'new-page', 'edit-page', 'checkout', 'settings']
  //     }
  //   }
  // }
}

const Template = args => Component({ attributes: args })

export const Application = Template.bind({})
Application.args = {
  // page: 'overview'
}
