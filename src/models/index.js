import '@tools/createSpruceStore'
import root from '@models/root'
import auth from '@models/auth'
import user from '@models/user'
import view from '@models/view'
import editor from '@models/editor'
import navigate from '@models/navigate'
import settings from '@models/settings'
import makeInspectable from 'mobx-devtools-mst'

// let userStore = Spruce.create(user, {}, true)
// let viewStore = Spruce.create(view, {}, true)

// console.log('viewStore', viewStore)

const store = root.create({
  auth: Spruce.create(auth, {}, true),
  user: Spruce.create(user, {}, true),
  view: Spruce.create(view, {}, true),
  editor: Spruce.create(editor, {}, true),
  navigate: Spruce.create(navigate, {}, true),
  settings: Spruce.create(settings, {}, true)
})

// setInterval(() => store.view.toggle(), 1500)

export default makeInspectable(store)

// const store = Spruce.create(root, {
//   user: user.create(),
//   view: view.create()
// }, true)

// const store = Spruce.create(root,{
//   // auth: Spruce.create(auth, {}, true),
//   user: Spruce.create(user, {}, true),
//   view: Spruce.create(view, {}, true),
//   // editor: Spruce.create(editor, {}, true),
//   // navigate: Spruce.create(navigate, {}, true),
//   // settings: Spruce.create(settings, {}, true)
// })

// const store = root.create({
//   user: user.create(),
//   view: view.create()
// })

// const store = root.create({
//   user: user.create(),
//   view: view.create()
// })

// const store = Spruce.create(root, {
//   user: user.create(),
//   view: view.create()
// }, true)

// const store = root.create({
//   user: Spruce.create(user, {}, false),
//   // view: Spruce.create(view, {}, false)
// })

// window.store = store

// setInterval(() => store.view.toggle(), 1500)

// export default makeInspectable(store)

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// const Auth = types
//   .model('auth', {
//     // emailId: types.maybe(types.string),
//     // password: types.maybe(types.string),
//     done: true,
//     name: 'dave'
//   })
//   .actions(self => ({
//     afterCreate() {
//       console.log('📦 auth has been created ⚡')
//     },
//     toggle() {
//       self.done = !self.done
//       self.name = self.name.split('').reverse().join('')
//     }
//   }))
// const User = types
//   .model('user', {
//     name: types.maybe(types.string),
//     mobileno: types.maybe(types.number)
//   })
//   .actions(self => ({
//     afterCreate() {
//       console.log('📦 user has been created ⚡')
//     }
//   }))
// const AppModel = types
//   .model('app', {
//     // user: types.maybeNull(User),
//     auth: types.maybeNull(Auth)
//     // done: false,
//     // name: 'braden'
//     // user: types.optional(types.maybe(User), {}),
//     // auth: types.optional(types.maybe(Auth), {})
//   })
//   .actions(self => ({
//     // afterCreate() {
//     //   console.log('📦 app has been created ⚡')
//     // },
//     wobble() {
//       self.done = !self.done
//       self.name = self.name.split('').reverse().join('')
//     }
//   }))

// // const userStore = Spruce.create(User)
// const authStore = Spruce.create(Auth, {})
// // const app = Spruce.create(AppModel)
// const appStore = Spruce.create(AppModel, {
//   // auth: Spruce.create(Auth)
//   auth: authStore
// })
// // const app = Spruce.create(AppModel, {
// //   auth: Spruce.create(Auth, {})
// // })

// setInterval(() => {
//   try {
//     // app.auth.toggle()
//     console.log('root', appStore)
//     appStore.auth.toggle()
//     // console.log('auth', authStore)
//     // authStore.toggle()
//   } catch (error) {
//     console.warn(error)
//   }
// }, 1500)

// const app = AppModel.create({
//   user: {
//     name: 'milano'
//   },
//   auth: {
//     password: 'chicken'
//   }
// })

// const store = Spruce.create(root, {
//   // auth: Spruce.create(auth, {}),
//   // user: Spruce.create(user, {}),
//   view: Spruce.create(view)
//   // editor: Spruce.create(editor, {}),
//   // navigate: Spruce.create(navigate, {}),
//   // settings: Spruce.create(settings, {})
// })

// const app = Spruce.create(AppModel, {
//   user: Spruce.create(User, {
//     name: 'braden',
//     mobileno: 845 - 204 - 9981
//   }),
//   auth: Spruce.create(Auth, {})
// })

//

// const Auth = types
//   .model('auth', {
//     emailId: types.maybe(types.string),
//     password: types.maybe(types.string)
//   })
//   .actions(self => ({
//     afterCreate() {
//       console.log('📦 auth has been created ⚡')
//     },
//     toggle() {
//       self.done = !self.done
//       self.name = self.name.split('').reverse().join('')
//     }
//   }))
// const User = types
//   .model('user', {
//     name: types.maybe(types.string),
//     mobileno: types.maybe(types.number)
//   })
//   .actions(self => ({
//     afterCreate() {
//       console.log('📦 user has been created ⚡')
//     }
//   }))
// const AppModel = types
//   .model('app', {
//     user: User,
//     auth: Auth
//     // user: types.optional(types.maybe(User), {}),
//     // auth: types.optional(types.maybe(Auth), {})
//   })
//   .actions(self => ({
//     afterCreate() {
//       console.log('📦 app has been created ⚡')
//     },
//     toggle() {
//       self.done = !self.done
//       self.name = self.name.split('').reverse().join('')
//     }
//   }))
// const app = Spruce.create(AppModel, {
//   user: Spruce.create(User, {
//     name: 'braden',
//     mobileno: 845 - 204 - 9981
//   }),
//   auth: Spruce.create(Auth, {})
// })
// const app = AppModel.create({
//   user: {
//     name: 'milano'
//   },
//   auth: {
//     password: 'chicken'
//   }
// })

// console.log('app', getSnapshot(app))

// import createSpruceStore from '@tools/createSpruceStore'
// import makeInspectable from 'mobx-devtools-mst'
// import root from '@models/root'
// import user from '@models/root'

// // const store = createSpruceStore(root)

// const store = root.create({
//   name: 'braden',
//   done: true
//   // user: user.create()
//   // user: user.create({
//   //   name: 'tommy'
//   // })
// })

// const inspectableStore = makeInspectable(store)

// setInterval(() => {
//   console.log('print')
//   store.toggle()
// }, 1500)

// export default inspectableStore
