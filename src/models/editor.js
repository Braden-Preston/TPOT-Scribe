import { types } from 'mobx-state-tree'
import common from '@models/common'

const editorModel = types.compose(
  'editor',
  common,
  types
    .model({})
    .views(self => ({}))
    .actions(self => ({
      afterCreate() {
        console.log('📦 editorStore has been created ⚡')
      }
    }))
)

export default editorModel
