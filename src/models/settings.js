import { types } from 'mobx-state-tree'

const settingsModel = types
  .model('settings', {})
  .actions(self => ({
    afterCreate() {
      console.log('📦 settingsStore has been created ⚡')
    }
  }))
  .views(self => ({}))

export default settingsModel
