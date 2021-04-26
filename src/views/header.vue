<template>
  <div class="header"  :class="{ 'hideHeader': !showHeader }"> 
    <div class="info">
      <div id="toc">
        <ul>
          <li v-for="(item, index) in tocContentList" :key="item.id" @click="scrollTo(item.id)" :class="{'active': index === 0}"><a>{{ item.id.toUpperCase() }}</a> </li>
        </ul>
      </div>
    </div>
    <p class="copyright">Copyright © 2021 Carla Lin All rights reserved.</p>
    <div class="collapseBtn" @click="clickCollapseBtn('collapseBtn')" v-if="showCollapseBtn">
      <div class="collapseIcon"></div>
    </div>
    <div class="toolField">
      <h2 @click="scrollTo('about')">Carla | portfolio</h2>
      <div class="closeBtn" @click="clickCollapseBtn('closeBtn')" v-if="showCloseBtn"><i class="fas fa-times"></i></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { eventBus } from '../router/router.js';
export default Vue.extend({
  data() {
    return {
      showCollapseBtn: false,
      showCloseBtn: false,
      PCSize: false,
      tocContentList: []
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkSize)
    this.checkSize()

    // table of content
    let titleList = document.getElementsByClassName('title')
    for (let item in titleList) {
      let title = titleList[item] 
      if (title.id) {
        this.tocContentList.push(title)
      }
    }
    eventBus.$emit('tocContentList', this.tocContentList);
  },
  props: {
    showHeader: {
      type: Boolean,
      require: true
    },
    workList: {}
  },  
  methods: {
    scrollTo (pos) {
      this.clickCollapseBtn('closeBtn') 
      document.querySelector(`#${pos}`).scrollIntoView({
        behavior: "smooth",
      });
    },
    checkSize () {
      this.showCollapseBtn = window.innerWidth > 1000 ? false : true
      this.showCloseBtn = window.innerWidth < 800 ? true : false
      this.PCSize = window.innerWidth > 420 && window.innerHeight > 840 ? true : false
      let windowsVH = window.innerHeight / 100;
      document.querySelector('.header').style.setProperty('--vh', windowsVH + 'px');      
    },
    clickCollapseBtn (btnName) {
      if ((this.showCloseBtn && btnName == 'closeBtn') || ((!this.showHeader || !this.showCloseBtn) && btnName == 'collapseBtn')) {
        this.$emit('clickBtn')
      }
    }
  },
})
</script>
<style lang="scss">
@import 'tocbot/src/scss/tocbot';
.toc-list {
  text-align: left;
  font-size: 20px;
  & .toc-list-item {
    margin: 10px 0;
    &::marker {
      content: none;
    }
    & a {
      text-decoration: none;
    }
    & .is-active-link {
      color: #051f57;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        background: #051f57;
        width: 3px;
        height: 20px;
        left: -10px;
        top: 3px;
      }
    }
  }
  
}
</style>
<style lang="css">
:root {
  --mainColor1: #5577dd;
}

.header {
  background: var(--mainColor1);
  height: 100vh; /* 給 Safari 以外的瀏覽器讀取 */
  height: calc(var(--vh, 1vh) * 100); /* 處理 safari 100vh 包含網址列跟工具列導致內容會被切到的問題 */
}
</style>
<style lang="scss" scoped>
.header {
  color: #fff;
  position: fixed;
  width: 250px;
  top: 0;
  left: 0;
  text-align: center;
  transition: all 0.8s;
  z-index: 100;
  & .info {
    position: absolute;
    bottom: 0;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & #toc {
      width: 100%;
      & ul {
        list-style: none;
        margin: 0;
        padding: 0;
        & li {
          position: relative;
          padding: 5px;
          & a {
            text-decoration: none;
            color: #051f57;
            &:active, :hover {
              color: initial;
            }
          }
          &.active, &:hover {
            cursor: pointer;
            color: #051f57;
            &::before {
              content: '';
              position: absolute;
              background: #fff;
              width: 3px;
              height: 25px;
              margin-left: -15px;
              top: 3px;
            }
            & a {
              color: #fff;
              font-weight: bold;
            }
          }
        }
      }
    }     
    & p {
      margin: 10px 0;
    }
  }
  & .copyright {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  & .collapseBtn {
    position: absolute;
    left: 230px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    width: 40px;
    height: 40px;
    background: var(--mainColor1);
    border-radius: 50%;
    transition: all 1.2s;
    opacity: 0.5;
    &:hover {
      cursor: pointer;
    }
    & .collapseIcon {
      width : 0px;
      height: 0px;
      margin: 10px 0 0 10px;
      border: 10px solid transparent;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: #fff;
    }
  }
  & .toolField {
    position: relative;
    & h2:hover {
      cursor: pointer;
    }
    & .closeBtn {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: solid 2px;
      padding: 5px 3px 2px;
      top: -20px;
      right: 0;
      margin: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.hideHeader {
    left: -250px;    
    & .collapseIcon {
      margin: 10px 0 0 20px;
      border-left-color: #fff;
      border-right-color: transparent;
    }
  }
  @include rwd($pad) {
    &:not(.hideHeader) {
      width: 100%;
      & .info {
        width: 100%;
      }
      & .collapseBtn {
        left: 90%;
        opacity: 0;
        width: 0;
        &:hover {
          cursor: initial;
        }
      }  
    }
  }
}  
</style>