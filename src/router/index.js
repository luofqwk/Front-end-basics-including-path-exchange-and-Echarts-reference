import Vue from 'vue'
import Router from 'vue-router'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'
// import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page4',
      component: page4
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    }
  ]
})
