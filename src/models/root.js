import { types } from 'mobx-state-tree'
import auth from '@models/auth'
import user from '@models/user'
import view from '@models/view'
import common from '@models/common'
import editor from '@models/editor'
import navigate from '@models/navigate'
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
      navigate: navigate,
      settings: settings
    })
    .actions(self => ({
      afterCreate() {
        console.log('📦 rootStore has been created ⚡')
      }
    }))
)

export default rootModel
