import { types } from 'mobx-state-tree'
import common from '@models/common'

const settingsModel = types.compose(
  'settings',
  common,
  types
    .model({})
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 settingsStore has been created ⚡')
      }
    }))
)

export default settingsModel
