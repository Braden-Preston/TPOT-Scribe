import { types } from 'mobx-state-tree'
import common from '@models/common'

const authModel = types.compose(
  'auth',
  common,
  types
    .model({})
    .actions(self => ({
      afterCreate() {
        console.log('📦 authStore has been created ⚡')
      }
    }))
    .views(self => ({}))
)

export default authModel
