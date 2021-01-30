import { types } from 'mobx-state-tree'
import auth from '@models/auth'
import user from '@models/user'
import view from '@models/view'
import common from '@models/common'
import editor from '@models/editor'
import routing from '@models/routing'
import settings from '@models/settings'

const rootModel = types.compose(
  'root',
  common,
  types
    .model({
      auth: auth,
      user: user,
      view: view,
      editor: editor,
      routing: routing,
      settings: settings
    })
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 rootStore has been created ⚡')
      }
    }))
)

export default rootModel
