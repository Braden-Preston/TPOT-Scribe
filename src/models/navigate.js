import { types } from 'mobx-state-tree'
import common from '@models/common'

const navigateModel = types.compose(
  'navigate',
  common,
  types
    .model({
      page: 'overview'
    })
    .actions(self => ({
      afterCreate() {
        console.log('📦 navigateStore has been created ⚡')
      },
      to(page) {
        self.page = page
      }
    }))
    .views(self => ({}))
)

export default navigateModel
