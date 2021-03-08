<template>
  <div class="portfolioField" :class="{ 'closeHeader': !closeHeader }">
    <p class="title">網頁開發練習與作品</p> 
    <div class="workList" :class="{ 'mobileStyle': mobileSize }">
      <div class="work" v-for="(item,key,index) in workList" :key="index">
        <div class="screenShot" :class="key"></div>
        <div class="mask" :class="{'showText': item[0], 'fadeOutText': !item[0], 'hideText': !item[1] }">
          <div class="text">
            <p v-for="(text,index2) in item[2]" :key="index2">{{ text }}</p>
            <p><span v-for="(skill,index3) in item[3]" :key="index3">{{ skill }}</span></p>
          </div>
        </div>
        <div class="link" :class="{'hideBar': item[0] }">
          <div @click="openUrl(item[4])">連結</div>
          <div @click="openUrl(item[5])" v-show="item[5]">程式碼</div>
          <div class="intro" @click="showIntro(key,item)">
            <span v-if="!item[0]">介紹</span>
            <span v-else>關閉</span>
          </div>
        </div>          
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    closeHeader: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      workList: {
        'carlanote': [false,false,['技術筆記','使用 wordpress 架設','工作或 sideproject 中用到的技術整理筆記'],[],'https://carlanote.com/',''],
        'cherry': [false,false,['日本賞櫻推薦','一頁式 landing page','輪播功能 > swiper'],['Vue.js','css','RWD'],'https://second9040.github.io/portfolio/%5BVue%5D%20Cheery%20in%20Japan/cherryJapan.html','https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20Cheery%20in%20Japan'],
        'lightbox': [false,false,['LightBox','幻燈片 > swiper'],['Vue.js','css','RWD'],'https://second9040.github.io/portfolio/[Vue]%20LightBox/LightBox.html','https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20LightBox'],
        'progressBar': [false,false,['進度條','可長按或手動輸入設定進度','動畫呈現賦值改變狀態'],['React','state','RWD'],'https://second9040.github.io/portfolio/[React]%20ProgressBar/ProgressBar.html','https://github.com/second9040/portfolio/tree/master/%5BReact%5D%20ProgressBar'],
        'calandar': [false,false,['日曆結合待辦清單'],['React','functional component'],'https://second9040.github.io/portfolio/%5BReact%5D%20SimpleToDoList/SimpleToDoList.html','https://github.com/second9040/portfolio/tree/master/%5BReact%5D%20SimpleToDoList'],
      }, 
      mobileSize: false
    }
  },
  mounted() { 
    window.addEventListener('resize', this.checkSize)
    this.checkSize()
  }, 
  methods: {
    checkSize() {
      this.mobileSize = window.innerWidth > 1500 ? false: true
    },
    checkText(text) {
      return typeof text == 'string' ? true : false
    },
    showIntro(key, item) {
      this.workList[key] = [!item[0], item[0], item[2], item[3], item[4], item[5]]
      window.setTimeout(()=>{
        this.workList[key] = [!item[0], !item[0], item[2], item[3], item[4], item[5]]
      }, 400)
    },
    openUrl(link) {
      window.open(link)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkSize)
  }
})
</script>
<style lang="scss" scoped>
.portfolioField {
  position: fixed;
  overflow: auto;
  margin-left: 400px;
  width: calc(95% - 400px);
  height: 100%;
  padding: 0 2.5%;
  @media all and (max-width: 800px) {
    transition: all 0.8s;
    left: 50%;
  }
  & .title {
    margin: 0;
    text-align: center;
    font-size: 2.5em;
    padding: 15px;
    border-bottom: solid 5px var(--mainColor1);
    color: #000;
    @media all and (max-width: 800px) {
      font-size: 1.5em;
    }
  }
  & .workList {
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    & .work {
      width: calc(50% - 20px);
      display: flex;
      position: relative;
      box-sizing: border-box;
      margin: 15px 20px;
      border-radius: 10px;
      &:nth-child(2n-1) {
        margin-left: 0;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
      & .screenShot {
        position: relative;
        width: 100%;
        height: 350px;
        background-size: cover;
        background-position: center;
        box-shadow: 1px 3px 5px var(--mainColor1);
        &.cherry {
          background-image: url('./../assets/images/cherry.png');
        }
        &.lightbox {
          background-image: url('./../assets/images/lightbox.png');
        }
        &.progressBar {
          background-image: url('./../assets/images/progressBar.png');
        }
        &.calandar {
          background-image: url('./../assets/images/calandar.png');
        }
        &.carlanote {
          background-image: url('./../assets/images/carlanote.png');
        }
      }
      & .link {
        position :absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        display: flex;
        justify-content: center;
        transition: all 1s ;
        -webkit-tap-highlight-color: transparent;
        &.hideBar {
          background: none;
        }
        & div {
          text-align: center;
          border-radius: 15px;
          border: solid;
          width: 90px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px 8px;
          color: #fff;
          text-decoration: none;
          &:hover {
            cursor: pointer;
            box-shadow: 1px 1px 1px #fff;
          } 
        }
      }
      & .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        & .text {
          width: 100%;
          text-align: center;
          font-size: 1.6em;
          font-weight: bold;
          & p span {
            margin: 5px;
            padding: 5px;
            background: var(--mainColor1);
            opacity: 1;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            display: inline-block;
            &:first-child {
              margin-left: 0;
            }
          }          
        }        
        &:hover, &.showText {
          transition: all 0.5s;
          background:  rgba(0, 0, 0, 0.7);
          animation: fadeInUp 0.6s ease 1; 
          & .text {
            display: block;
          }
        }
        &.fadeOutText {
          animation: fadeInDown 0.5s ease 1; 
        }
        &.hideText {
          display: none;
        }
      }
    }
    &.mobileStyle {
      justify-content: center;
      & .work {
        width: 100%;
        &:nth-child(2n-1), &:nth-child(2n) {
          margin: 15px 0;
        }
      }
    }
  }
  &.closeHeader {
    transition: all 0.8s;
    // display: initial;
    width: 90%;
    left: 5%;
    right: 5%;
    margin: 0;
    @media all and (min-width: 1000px) {
      width: 80%;
      padding: 0 10%;
    }
    & .work {
      width: 32%;
      &:nth-child(2n-1) {
        margin: 15px 0px;
      }
      &:nth-child(2n) {
        margin: 15px 0px;
      }
      &:nth-child(3n-1) {
        margin: 15px 2%;
      }
      &:nth-child(3n-2) {
        margin-left: 0;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
    }    
  }
}  
@keyframes fadeInUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes fadeInDown {
  0% {
    background:  rgba(0, 0, 0, 0.7);
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }  
}
</style>