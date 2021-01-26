import {
  types,
  isRoot,
  getPath,
  getRoot,
  getType,
  // getParent,
  getSnapshot,
  getParent
} from 'mobx-state-tree'

const CommonModel = types
  .model('common', {})
  .actions(self => ({}))
  .views(self => ({
    get snap() {
      return getSnapshot(self)
    },
    get path() {
      return getPath(self)
    },
    get type() {
      return getType(self)
    },
    get parent() {
      return isRoot(self) ? self : getParent(self)
    },
    get root() {
      return isRoot(self) ? self : getRoot(self)
    }
  }))

export default CommonModel
