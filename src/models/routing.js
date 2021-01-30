import { types } from 'mobx-state-tree'
import common from '@models/common'
import Navigo from 'navigo'

const routingModel = types.compose(
  'routing',
  common,
  types
    .model({
      page: 'overview'
    })
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 routingStore has been created ⚡')
        // Start the router only after the store is created
        const router = new Navigo('/')
        router
          .on('/', () => self.to('overview'))
          .on('/new', () => self.to('new-page'))
          .on('/edit', () => self.to('edit-page'))
          .on('/checkout', () => self.to('checkout'))
          .on('/settings', () => self.to('settings'))
          .on('*', () => self.to('404', '404'))
          .resolve()
      },
      to(page) {
        console.log('navigation to: ', page)
        self.page = page
      }
    }))
)

export default routingModel
