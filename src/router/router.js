import Vue from 'vue'
import VueRouter from 'vue-router';
import portfolioField from '../views/portfolioField.vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'hash',
  routes: [
    { path: '/', component: portfolioField }
  ]
})
export default router

new Vue({
  el: '#app',
  router,
  components: {
    portfolioField
  }
})