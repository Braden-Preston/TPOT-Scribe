import { types } from 'mobx-state-tree'

const navigateModel = types
  .model('navigate', {})
  .actions(self => ({
    afterCreate() {
      console.log('📦 navigateStore has been created ⚡')
    }
  }))
  .views(self => ({}))

export default navigateModel
