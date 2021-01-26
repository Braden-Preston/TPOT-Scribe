import localForage from 'localforage'
import { getMembers, getSnapshot, onPatch, onSnapshot } from 'mobx-state-tree'
import { applyOperation } from 'fast-json-patch'
import { persist } from 'mst-persist'

/**
 * @typedef {import('mobx-state-tree/dist/types/complex-types/model')} IModelType
 */

/**
 * @description A wrapper that creates a `spruce` store from a
 * `mobx-state-tree` model. `spruce` is a tiny bundle that brings
 * brings simple state managment, reactivity, and persistance to
 * `alpinejs`with the convienence of binding data via a directive
 * ```
 * // Define a model
 * let model = types.model('name', {...}).views().actions()
 * // Create a store
 * let store = createSpruceFromMST(model)
 * // or
 * let store = Spruce.create(model)
 * ```
 * @param {IModelType} model - A types.model() chain from mobx-state-tree
 * @param {boolean} [persist] - Should the model's state be persist in storage?
 * @param {Object} config - Data passed to a MST model when it is created
 * @param {string} name - ___*** Make sure you name your store uniquely!___
 */

let createSpruceFromMST = (
  model = null,
  data = {},
  doPersist = true,
  name = 'root'
) => {
  if (!model) console.error('Store needs a MST model to be created!')
  let mobxStore = model.create(data)
  let modelKeys = getMembers(mobxStore)
  let storeName = modelKeys.name || name

  // Persist mobx data in localstorage
  if (doPersist) {
    persist(`__spruce:${storeName}`, mobxStore, {
      storage: localForage,
      jsonify: false
    }).then(() => console.log(`📦 ${storeName}Store has been hydrated 🌊`))
  }

  // Get the mobx model's properties, actions, and views
  let initialState = { ...getSnapshot(mobxStore), ...data }
  let { actions, views } = modelKeys

  actions.forEach(a => (initialState[a] = mobxStore[a]))
  views.forEach(v => (initialState[v] = mobxStore[v]))

  // Create a new spruce store from mobx's state
  let store = Spruce.store(storeName, initialState, false, false)

  // When mobx data changes, patch it onto the spruce store
  onPatch(mobxStore, patch => applyOperation(store, patch))

  // Print when a new snapshot of the tree is avaiable
  onSnapshot(mobxStore, snap => console.log('[Snapshot]', snap))

  return mobxStore
}

Spruce.create = createSpruceFromMST
export default createSpruceFromMST
