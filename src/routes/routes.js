import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Cartegory from '../pages/cartegory/Cartegory';
import NewPost from '../components/new-post/NewPost';
import PostDetail from '../components/post-detail/PostDetail';

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
    path: '/category/:category',
    component: Cartegory,
  },
  newPost: {
    path: '/new-post',
    component: NewPost,
  },
  postDetail: {
    path: '/post',
    component: PostDetail
  }
}


export default routes;