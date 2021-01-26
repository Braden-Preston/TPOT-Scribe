import { types } from 'mobx-state-tree'

const userModel = types
  .model('user', {
    color: 'blue'
  })
  .actions(self => ({
    afterCreate() {
      console.log('📦 userStore has been created ⚡')
    },
    reverse() {
      self.color = self.color.split('').reverse().join('')
    }
  }))
  .views(self => ({}))

export default userModel
