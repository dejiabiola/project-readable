import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Cartegory from '../pages/cartegory/Cartegory';

const routes = {
  home: {
    path: '/',
    component: Home,
    exact: true
  },
  login: {
    path: '/login',
    component: Login,
    exact: true
  },
  cartegory: {
    path: '/cartegory',
    component: Cartegory,
  }
}


export default routes;