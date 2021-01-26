import { types } from 'mobx-state-tree'

const editorModel = types
  .model('editor', {})
  .actions(self => ({
    afterCreate() {
      console.log('📦 editorStore has been created ⚡')
    }
  }))
  .views(self => ({}))

export default editorModel
