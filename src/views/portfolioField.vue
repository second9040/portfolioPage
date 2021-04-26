<template>
<div class="container">
  <isheader :showHeader="showHeader" :workList="workList" @clickBtn="clickHeader"></isheader>
  <div class="portfolioField" :class="{ 'closeHeader': !showHeader }">
    <h2 class="title" id="about">ABOUT</h2> 
    <about></about>
    <h2 class="title" id="experience">EXPERIENCE</h2> 
    <resume></resume>
    <h2 class="title" id="portfolio">PORTFOLIO</h2> 
    <div class="workList" :class="{ 'mobileStyle': mobileSize }">
      <div class="work" v-for="(item,key,index) in workList" :key="index">
        <div class="screenShot" :style="imgPath(key)"></div>
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
    <h6 class="title" id="contact">CONTACT</h6> 
    <div class="contact">
      <div @click="openUrl('https://github.com/second9040')"><i class="fab fa-github"></i></div>
      <div @click="openUrl('https://www.linkedin.com/in/second9040/')"><i class="fab fa-linkedin"></i></div>
      <div @click="showMailDialog = true"><i class="fas fa-envelope"></i></div>
    </div>
    </div>
    <div class="goTop" :class="{'hide': hideTopFlag }" @click="scrollToTop"><i class="fas fa-arrow-up"></i></div>
    <div class="bodyMask" v-if="showMailDialog"></div>
    <mailDialog v-if="showMailDialog" @close-dialog="closeDialog" ref="mailRef"></mailDialog>
  </div>
</template>
<script>
import Vue from 'vue';
import isheader from './header.vue';
import resume from './resume.vue';
import about from './about.vue';
import mailDialog from './mailDialog';
import emailjs from 'emailjs-com';
import tocbot from 'tocbot'
import { eventBus } from '../router/router.js';

export default Vue.extend({
  components: {
    isheader,
    about,
    resume,
    mailDialog
  },
  data() {
    return {
      workList: {
        'carlanote': [false,false,['技術筆記','使用 wordpress 架設','工作或 sideproject 中用到的技術整理筆記'],[],'https://carlanote.com/',''],
        'cherry': [false,false,['日本賞櫻推薦','一頁式 landing page','輪播功能 > swiper'],['Vue.js','RWD','CSS3'],'https://second9040.github.io/portfolio/%5BVue%5D%20Cheery%20in%20Japan/cherryJapan.html','https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20Cheery%20in%20Japan'],
        'calandar': [false,false,['日曆結合待辦清單'],['React','functional component'],'https://second9040.github.io/portfolio/%5BReact%5D%20SimpleToDoList/SimpleToDoList.html','https://github.com/second9040/portfolio/tree/master/%5BReact%5D%20SimpleToDoList'],
        'jqStudynote': [false,false,['jQuery學習+實做筆記'],['jQuery','bootstrap','目錄索引導航'],'https://second9040.github.io/portfolio/[JQuery]%20Bootstrap%20+%20jQuery%20note/Bootstrap%20+%20jQuery%20note.html','https://github.com/second9040/portfolio/tree/master/%5BJQuery%5D%20Bootstrap%20%2B%20jQuery%20note'],
        'progressBar': [false,false,['進度條','可長按或手動輸入設定進度','動畫呈現賦值改變狀態'],['React','state','RWD'],'https://second9040.github.io/portfolio/[React]%20ProgressBar/ProgressBar.html','https://github.com/second9040/portfolio/tree/master/%5BReact%5D%20ProgressBar'],
        'drawDivGame': [false,false,['拖曳小遊戲','使用原生 js 事件完成拖曳效果'],['javascript','onmouseup ','onmousemove '],'https://second9040.github.io/test0917/DragDIV.html','https://github.com/second9040/test0917'],
        'lightbox': [false,false,['簡易燈箱','幻燈片 > swiper'],['Vue.js','RWD','CSS3'],'https://second9040.github.io/portfolio/[Vue]%20LightBox/LightBox.html','https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20LightBox'],
      }, 
      mobileSize: false,
      scrollEventObj: {},
      showHeader: false,
      hideTopFlag: true,
      showMailDialog: false,
      contentList: [],
      contentActiveNow: 0
    }
  },
  created () {
    eventBus.$on('tocContentList', (list) => {
        this.contentList = list
    })
  },
  mounted () { 
    window.addEventListener('scroll', this.scrollEvent)
    window.addEventListener('resize', this.checkSize)
    this.checkSize()
  },
  methods: {
    closeDialog(para) {
      if (para[0] === 'send') {
        this.sendEmail(para)
      }
      else {
        this.showMailDialog = false
      }
    },
    sendEmail(para) {
      const templateParams = {
        from_name: para[1],
        to_name: 'carla',
        userMail: para[2],
        message: para[3]
      }

      emailjs.send('default_service', 'template_kig6c69', templateParams, 'user_4LayK0Z8yFseQngyuvsGC')
      .then(()=>{
        this.$refs.mailRef.step1 = false
        this.$refs.mailRef.loading = false
        this.$toasted.show('寄件成功。')
      })
    },
    checkSize() {
      this.mobileSize = window.innerWidth > 1000 ? false: true
      this.showHeader = window.innerWidth > 1000 ? true : false
      this.hideTopCheck()
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
    },
    scrollToTop() {
      window.setInterval(() => {
        this.scrollEventObj.target.scrollingElement.scrollTop -= 20
      }, 5)
    },
    scrollEvent(event) {
      this.scrollEventObj = event 

      // 判斷是否要顯示回到頂端按鈕
      if (event.target.scrollingElement.scrollTop < 1) {
        this.hideTopFlag = true
        for (let i = 1; i < 9999; i++) {
          window.clearInterval(i);
        }
      } else {
        this.hideTopFlag = false 
      }

      // 配合 toc 功能
      let activeIndex = 0;
      for (let i = 0; i < this.contentList.length; i++) {

      if (window.scrollY > this.contentList[i].offsetTop - 100) {
          let index = i;
          if (window.scrollY > document.body.scrollHeight - 900) {
            index = i + 1 // for 最後一個太短根本滑不到的 contact ^^
          }
          document.getElementById('toc').getElementsByTagName('li')[index].classList.add("active");
          activeIndex = index
        }
      }
      for (let i = 0; i < this.contentList.length; i++) {
        if (i !== activeIndex) {
          document.getElementById('toc').getElementsByTagName('li')[i].classList.remove("active");
        }
      }
    },
    hideTopCheck() {
      if ((!this.showHeader || window.innerWidth > 799) && this.scrollEventObj.target) {
        this.hideTopFlag = false
      } else {
        this.hideTopFlag = true
      }
    },
    clickHeader() {
      this.showHeader = !this.showHeader
    },
    imgPath(name) {
      return "backgroundImage: url(" + `image/${name}.png` + ")"
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkSize)
    window.removeEventListener('scroll', this.scrollEvent)
  }
})
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
.portfolioField {
  top: 0;
  overflow: auto;
  margin-left: 250px;
  width: calc(95% - 250px);
  height: 100%;
  padding: 0 10%;
  transition: all 0.8s;
  background-image: url('../assets/images/background.png');
  @include rwd($padPro) {
    padding: 0 60px;
  }
  @include rwd($pad) {
    left: 50%;
    margin-left: 0;
    width: initial;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & h2 {
    outline: none;
  }
  & .title {
    margin: 0;
    text-align: center;
    font-size: 2em;
    padding: 50px 0 10px;
    border-bottom: solid 3px var(--mainColor1);
    color: #555;
    &:first-child {
      padding: 10px;
    }
    @include rwd($pad) {
      padding: 20px 0 10px;
      font-size: 1.5em;
    }
  }
  & .workList {
    display: flex;
    flex-wrap: wrap;
    margin: 5px auto;
    max-width: 1000px;
    justify-content: center;
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
        height: 300px;
        background-size: cover;
        background-position: center;
        box-shadow: 1px 3px 5px var(--mainColor1);
        border: solid 1px var(--mainColor1);
        border-radius: 5px;
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
        border-radius: 0 0 5px 5px;
        &.hideBar {
          background: none;
        }
        & div {
          text-align: center;
          border-radius: 15px;
          border: solid 2px #ccc;
          width: 90px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px 8px;
          color: #ccc;
          text-decoration: none;
          &:hover {
            cursor: pointer;
            box-shadow: 1px 1px 1px #fff;
            color:#fff;
            border-color: #fff;
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
          font-size: 1.4em;
          font-weight: bold;
          margin: 20px;
          & p span {
            margin: 5px;
            padding: 0 5px;
            background: var(--mainColor1);
            opacity: 1;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            display: inline-block;
            line-height: 1.4em;
            &:first-child {
              margin-left: 0;
            }
          }          
        }        
        &:hover, &.showText {
          border-radius: 5px;
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
        max-width: 500px;
        &:nth-child(2n-1), &:nth-child(2n) {
          margin: 15px 0;
        }
      }
    }
  }
  &.closeHeader {
    transition: all 0.8s;
    width: 95%;
    left: 0;
    right: 0;
    margin: 0;
    @include rwd($padPro) {
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

.contact {
  padding: 15px;
  display: flex;
  justify-content: center;
  & div {
    margin: 0 10px;
    color: #666;
    &:hover {
      color: var(--mainColor1);
      cursor: pointer;
      transform: rotateY(360deg);
      -moz-transform: rotateY(360deg);
      -webkit-transform: rotateY(360deg);
      -o-transform: rotateY(360deg);
      -ms-transform: rotateY(360deg);
      transition: all 0.3s;
    }
    & i {
      font-size: 30px;
    }
  }

}
  .goTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 30px;
    color: #fff;
    background: #888;
    opacity: 0.7;
    border-radius: 8px;
    transition: opacity 0.2s, background 0.2s, bottom 0.8s;
    line-height: 30px;
    text-align: center;
    &:hover, &:active {
      opacity: 1;
      cursor: pointer;
      background: var(--mainColor1);
    }
    &.hide {
      bottom: -25px
    }
    & i { 
      display: inline-block;
      vertical-align: middle;
      font-size: 15px;
    }
  }

  .bodyMask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #666;
    opacity: 0.7;
    z-index: 1;
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