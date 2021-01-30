import { types } from 'mobx-state-tree'
import common from '@models/common'

const authModel = types.compose(
  'auth',
  common,
  types
    .model({})
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 authStore has been created ⚡')
      }
    }))
)

export default authModel
