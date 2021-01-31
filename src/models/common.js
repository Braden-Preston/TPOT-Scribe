import {
  types,
  isRoot,
  getPath,
  getRoot,
  getType,
  getParent,
  getSnapshot
} from 'mobx-state-tree'

const CommonModel = types
  .model('common', {})
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
    }
  }))
  .actions(self => ({
    set(property, value) {
      if (property instanceof Object) {
        Object.entries(property).forEach(entry => {
          self[entry[0]] = entry[1]
        })
      } else {
        self[property] = value
      }
    }
  }))

export default CommonModel
