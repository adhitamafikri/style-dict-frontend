import Home from '../pages/Home'
import CreateDictionary from '../pages/CreateDictionary'

const routeStack = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/style/create',
    exact: true,
    component: CreateDictionary
  }
]

export default routeStack
