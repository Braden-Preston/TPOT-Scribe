import Navigo from 'navigo'
import R from './constants'

Spruce.store(
  'routing',
  {
    routes: R,
    match: '/',
    page: 'root',
    set(match, page) {
      if (this.match !== name) {
        this.match = match
        this.page = page
      }
    }
  }
  // true
)

const router = new Navigo('/')
const routing = Spruce.store('routing')

export default router
  .on(R.ROOT, () => routing.set(R.ROOT, 'root'))
  .on(R.CAT, () => routing.set(R.CAT, 'hello'))
  .on(R.DOG, () => routing.set(R.DOG, 'edit'))
  .on('*', () => routing.set('404', '404'))
  .resolve()
