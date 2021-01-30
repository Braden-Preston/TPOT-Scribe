import '@tools/createSpruceStore'
import root from '@models/root'
import auth from '@models/auth'
import user from '@models/user'
import view from '@models/view'
import editor from '@models/editor'
import routing from '@models/routing'
import settings from '@models/settings'
import makeInspectable from 'mobx-devtools-mst'

const store = root.create({
  auth: Spruce.create(auth, {}, true),
  user: Spruce.create(user, {}, true),
  view: Spruce.create(view, {}, true),
  editor: Spruce.create(editor, {}, true),
  routing: Spruce.create(routing, {}, true),
  settings: Spruce.create(settings, {}, true)
})

// setInterval(() => store.view.toggle(), 1500)

export default makeInspectable(store)