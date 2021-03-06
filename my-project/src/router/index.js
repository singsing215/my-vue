import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter(
  {
    mode: 'history',
    routes: routes
  }
);


export default router