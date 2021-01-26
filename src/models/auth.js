import { types } from 'mobx-state-tree'

const authModel = types
  .model('auth', {})
  .actions(self => ({
    afterCreate() {
      console.log('📦 authStore has been created ⚡')
    }
  }))
  .views(self => ({}))

export default authModel
