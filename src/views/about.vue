<template>
  <div class="aboutField">
    <div class="photo"></div>
    <div class="autobiography">
      <p>我是林鈺琪，畢業於臺北科技大學資訊工程系，最近一份工作是在品牌的電商部門擔任前端工程師。</p>
      <p>負責的專案內容包含有印刷產品客製化編輯器、相片沖印編輯器與主題印刷館等項目開發，以及控制多個專案網站的後台開發。</p>
      <p>具備處理不同裝置上樣式差異的經驗，致力於讓所有裝置的使用者都能得到良好的體驗。</p>
      <p>也曾待過遊戲相關產業，負責公司網站的前端功能開發，為公司架設對外形象網站，也有使用 react native 的 app 開發經驗。</p>
      <p>除了透過線上課程持續進修以外，也會將工作或課程上所遇到的問題或是觀念整理成技術筆記，時時翻閱，溫故知新。</p>
      <p>目前正在積極點擊個人的 react 技能樹，期許自己不斷進步，掌握更多更好更優秀的技術。</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      
    }
  },
  methods: {
  
  }
})
</script>
<style lang="scss">
.aboutField {
  display: flex;
  justify-content: center;
  padding: 10px 10%;
  @include rwd($fullHD) {
    padding: 10px 0;
  }
  & .photo {
      margin: 10px 50px 10px 0;
      width: 400px;
      height: auto;
      background-image: url('./../assets/images/photo.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
  }
  & .autobiography {
    width: 60%;
    margin: 0 auto;
  }
  @include rwd($padPro) {
    display: initial;
    & .photo {
      display: none;
    }
    & .autobiography {
      width: 100%;
    }    
  }
}
</style>