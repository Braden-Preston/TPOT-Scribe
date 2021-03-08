import { getParent, types } from 'mobx-state-tree'
import common from '@models/common'
import Navigo from 'navigo'

const router = new Navigo('/')

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
      },
      setCurrent(identifier) {
        self.page = identifier
      },
      navigate(path) {
        router.navigate(path)
      },
      start() {
        router
          .on({
            '/new/*': {
              uses: () => self.setCurrent('new-page'),
              hooks: {
                before: (done, match) => self.beforeNewPage(done, match),
                after: self.afterNewPage
              }
            }
          })
          .on({
            '/edit/*': {
              uses: () => self.setCurrent('edit-page'),
              hooks: {
                before: self.beforeEditPage,
                after: self.afterEditPage
              }
            }
          })
          .on({
            '/checkout/*': {
              uses: () => self.setCurrent('checkout'),
              hooks: {
                before: self.beforeCheckout,
                after: self.aftercheckout
              }
            }
          })
          .on({
            '/settings/*': {
              uses: () => self.setCurrent('settings'),
              hooks: {
                before: self.beforeSettings,
                after: self.afterSettings
              }
            }
          })
          .on({
            '/': {
              uses: () => self.setCurrent('overview'),
              hooks: {
                before: self.beforeOverview,
                after: self.afterOverview
              }
            }
          })
          .on('*', () => self.setCurrent('404', '404'))
          .resolve()
      },

      // TODO Overview Hooks
      beforeOverview(done, match) {
        done()
      },
      afterOverview(match) {
        self.parent.view.set({
          headerTitle: 'Overview',
          headerSubtitle: 'See what is happening today'
        })
      },

      // TODO NewPage Hooks
      beforeNewPage(done, match) {
        done()
      },
      afterNewPage(match) {
        self.parent.view.set({
          headerTitle: 'New',
          headerSubtitle: 'Create a fresh page to edit'
        })
      },

      // TODO EditPage Hooks
      beforeEditPage(done, match) {
        done()
      },
      afterEditPage(match) {
        self.parent.view.set({
          headerTitle: 'Editor',
          headerSubtitle: 'Prepare page for publishing'
        })
      },

      // TODO Checkout Hooks
      beforeCheckout(done, match) {
        done()
      },
      aftercheckout(match) {
        self.parent.view.set({
          headerTitle: 'Checkout',
          headerSubtitle: 'Fetch a page to start editing'
        })
      },

      // TODO Settings Hooks
      beforeSettings(done, match) {
        done()
      },
      afterSettings(match) {
        self.parent.view.set({
          headerTitle: 'Settings',
          headerSubtitle: 'Adjust your user preferences'
        })
      }
    }))
)

export default routingModel
