import { types } from 'mobx-state-tree'
import common from '@models/common'

const viewModel = types.compose(
  'view',
  common,
  types
    .model('view', {
      name: 'braden',
      done: false
    })
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
    .views(self => ({}))
)
.named('view')

export default viewModel
