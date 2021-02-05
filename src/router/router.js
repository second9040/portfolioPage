import Vue from 'vue'
import VueRouter from 'vue-router';
import isheader from '../views/header.vue'
import isfooter from '../views/footer.vue'
import portfolioField from '../views/portfolioField.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  // history: true,
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
    isheader,
    isfooter
  }
})