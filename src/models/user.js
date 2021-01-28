import { types } from 'mobx-state-tree'
import common from '@models/common'

const userModel = types.compose(
  'user',
  common,
  types
    .model({
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
)

export default userModel
