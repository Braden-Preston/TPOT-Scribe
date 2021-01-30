import { types } from 'mobx-state-tree'
import common from '@models/common'

const viewModel = types.compose(
  'view',
  common,
  types
    .model({
      name: 'braden',
      done: false
    })
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 viewStore has been created ⚡')
      },
      toggle() {
        self.root.user.reverse()
        self.done = !self.done
        self.name = self.name.split('').reverse().join('')
      }
    }))
)

export default viewModel
