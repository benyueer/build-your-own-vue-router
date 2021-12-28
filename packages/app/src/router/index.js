/* eslint-disable */
import MyVueRouter from "../../../router/dist/router";

const routes = [
  {
    name: 'a',
    path: '/a',
    component: () => import('../components/test1.vue')
  },
  {
    name: 'b',
    path: '/b',
    component: () => import('../components/test2.jsx')
  }
]
const router = new MyVueRouter({routes})
export default router