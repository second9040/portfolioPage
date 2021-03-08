import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  // history: true,
  mode: 'hash',
  routes: [
    { path: '/', component: isheader }
  ]
})
export default router

new Vue({
  el: '#app',
  router,
  components: {
    isheader
  }
})