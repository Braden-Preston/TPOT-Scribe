import { types } from 'mobx-state-tree'
import common from '@models/common'

const userModel = types.compose(
  'user',
  common,
  types
    .model({
      color: 'blue'
    })
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 userStore has been created ⚡')
      },
      reverse() {
        self.color = self.color.split('').reverse().join('')
      }
    }))
)

export default userModel
