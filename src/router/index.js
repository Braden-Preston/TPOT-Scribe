import Navigo from 'navigo'
import R from './constants'

// Spruce.store(
//   'routing',
//   {
//     routes: R,
//     match: '/',
//     page: 'root',
//     set(match, page) {
//       if (this.match !== name) {
//         this.match = match
//         this.page = page
//       }
//     }
//   }
//   // true
// )

const router = new Navigo('/')
const navigate = Spruce.store('navigate')
console.log(navigate)

export default router
  .on('/', () => navigate.to('overview'))
  .on('/new', () => navigate.to('new-page'))
  .on('/edit', () => navigate.to('edit-page'))
  .on('/checkout', () => navigate.to('checkout'))
  .on('/settings', () => navigate.to('settings'))
  .on('*', () => navigate.to('404', '404'))
  // .on(R.ROOT, () => navigate.to(R.ROOT, 'root'))
  // .on(R.CAT, () => navigate.to(R.CAT, 'hello'))
  // .on(R.DOG, () => navigate.to(R.DOG, 'edit'))
  // .on('*', () => navigate.to('404', '404'))
  .resolve()
