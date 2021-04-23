import Vue from 'vue'
import VueRouter from 'vue-router';
import portfolioField from '../views/portfolioField.vue'
import Toasted from 'vue-toasted';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueRouter)
Vue.use(Toasted, { position: 'top-center', duration: 2000 })

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'hash',
  routes: [
    { path: '/', component: portfolioField },
    {
      path: '*',
      redirect: '/'
      // 雖然前面設定都符合'*'任意字串，但前面會優先匹配成功而被套用
      // 最後所有條件都不符合時就自動轉址至根目錄頁面
    }
  ]
})
export default router

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  components: {
    portfolioField
  }
})