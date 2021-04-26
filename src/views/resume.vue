<template>
  <div class="resumeField">
    <div class="jobField">
      <div class="duration">2020/11 ~ 2021/05</div>
      <div class="jobTitle">DingJhen Intelligent Printing Tech. Co. Ltd. <span class="chineseName text">鼎蓁科技</span></div>
      <div class="description text">
        <p>品牌電商網站前台電腦 & 手機版網頁功能開發與維護，使用 Vue 作為前端主要開發框架。</p>
        <p>與第三方網站進行架接，以 OAuth 驗證方式從其他網頁平台導回公司網頁進行功能操作。</p>
        <p>將原有產品細分為以類別區分的新店家平台，撰寫相關程式邏輯。</p>
        <p>開發可一對多控制多網站專案功能的全新後台。</p>
        <p>每月廣告 DM (電子廣宣單) 切版、各類節慶、促銷活動頁面切版。</p>
      </div>
    </div>
    <div class="jobField">
      <div class="duration left">2019/05 ~ 2020/10</div>
      <div class="jobTitle left">One Piece Tech. <span class="chineseName text">睿隆科技</span></div>
      <div class="description text left">
        <p>遊戲租網前後台 UI 切版與功能串接，使用 Vue 搭配 Element UI 與 D2Crud 表格套件工具進行主要開發。</p>
        <p>使用 webpack 搭配 Nginx 架設公司對外形象網站，配合業務兜售產品之需求與 PM 討論並調整版面配置。</p>
        <p>網站簽到系統前後台之 component 製作，配合後端串接 API 功能並討論資料格式需求。</p>
        <p>開發專案網站多國語系功能，使用 vue-i18n 搭配各國與系語言包進行製作。</p>
        <p>租網各版型樣式調整，客製化需求製作：購物商城、付費影城等。</p>
        <p>新版後台版型切版與功能串接。</p>
        <p>支援協助開發 React Native app 經驗。</p>
      </div>
    </div>
    <div class="jobField">
      <div class="duration">2013/09 ~ 2017/06</div>
      <div class="jobTitle">National Taipei University of Technology <span class="chineseName text">台北科技大學</span></div>
       <div class="description text">
        <p>資訊工程系</p>
        <p>畢業專題，開發校園二手書買賣 android app。</p>
        <p>使用 C++ 開發模仿經典遊戲《小朋友齊打交》。</p>
        <p>開發旅遊購票網站。</p>
      </div>
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
.resumeField {
  margin: 40px 0;
  .jobField {
    color: #333;
    padding: 20px 5%;
    position: relative;
    margin-left: 45%;
    border-left: solid 3px var(--mainColor1);
    @include rwd($padPro) {
      margin-left: 0;
    }
    & .duration::before {
      content: '';
      position: absolute;
      width: 140px;
      height: 3px;
      background-color: var(--mainColor1);
      top: 18px;
    }
    &:first-child {
      padding-top: 0;
      margin-top: 20px;
    }
    &:last-child  {
      padding-top: 0;
    }
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--mainColor1);
      top: 5px;
      left: -7px;
    }
    & .text {
      font-size: 16px;
    }
    & .left {
      transform: translateX(-125%);
      @include rwd($padPro) {
        transform: translateX(0);
      }
    }
    & .jobTitle {
      margin: 10px 0;
      & .chineseName {
        font-size: 14px;
        padding-left: 3px;
        margin-left: 5px;
        position: relative;
        &::before {
          content: '';
          height: 14px;
          width: 1px;
          position: absolute;
          top: 0;
          left: -3px;
          background-color: #333;
        }
        @include rwd($pad) {
          display: block;
          padding-left: 0;
          margin-left: 0;
          &::before {
            width: 0
          }
        }
      }
    }
  }
}

</style>