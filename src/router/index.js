import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpview from '../views/SignUpview.vue'
import Loginview from '../views/LoginView.vue'
import DisplayList from '../views/DisplayListView.vue'
import createTask from '../views/createTodoview.vue';
import ViewTaskView from '../views/ViewTaskview.vue';
// import UpdateTask from  '../views/UpdateTaskview';
import UpdateTask from '../views/UpdateTaskview.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUpview
  }, 
  {
    path: '/login',
    name: 'login',
    component: Loginview
  }, 
  {
    path: '/displayList',
    name: 'DisplayList',
    component: DisplayList,
    children:[
      {
        path:'createTask',
        name: 'createTask',
        component: createTask
      }, 
      {
        path:'viewTask',
        name: 'viewTask',
        component: ViewTaskView
      },
      {
        path:'updateTask',
        name: 'updateTask',
        component: UpdateTask
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
