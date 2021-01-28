import { types } from 'mobx-state-tree'
import common from '@models/common'

const settingsModel = types.compose(
  'settings',
  common,
  types
    .model({})
    .actions(self => ({
      afterCreate() {
        console.log('📦 settingsStore has been created ⚡')
      }
    }))
    .views(self => ({}))
)

export default settingsModel
