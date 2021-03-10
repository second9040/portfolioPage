<template>
  <div class="header"  :class="{ 'hideHeader': !closeHeader }"> 
    <div class="info">
      <div class="photo"></div>
      <div class="name">
        <!-- <p> Carla | 林鈺琪 </p> -->
        <p> 林鈺琪 | Carla </p>
        <p> HTML CSS SCSS RWD</p>
        <p> JAVASCRIPT TYPESCRIPT </p>
        <p> VUE REACT REACT NATIVE</p>
        <p> WEBPACK GITHUB </p>
        <p class="copyright">Copyright © 2021 Carla Lin All rights reserved.</p>
      </div>
    </div>
    <div class="collapseBtn" @click="clickCollapseBtn" v-if="showCollapseBtn">
      <div class="collapseIcon"></div>
    </div>
    <div class="toolField">
      <div class="closeBtn" @click="clickCollapseBtn" v-if="showCloseBtn"><i class="fas fa-times"></i></div>
      <div class="color blue" @click="changeColor('rgb(178, 214, 230)')"></div>
      <div class="color green" @click="changeColor('rgb(37, 202, 106)')"></div>
      <div class="color pink" @click="changeColor('rgb(238, 148, 148)')"></div>
    </div>
    <portfolioField :closeHeader="closeHeader"></portfolioField>
  </div>
</template>
<script>
import Vue from 'vue';
import portfolioField from './portfolioField.vue'
export default Vue.extend({
  data() {
    return {
      closeHeader: false,
      showCollapseBtn: false,
      showCloseBtn: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkSize)
    this.checkSize()
  },
  components: {
    portfolioField
  },
  methods: {
    checkSize() {
      this.showCollapseBtn = window.innerWidth > 1000 ? false : true
      this.closeHeader = window.innerWidth > 1000 ? true : false
      this.showCloseBtn = window.innerWidth < 800 ? true : false
    },
    clickCollapseBtn() {
      this.closeHeader = !this.closeHeader
    },
    changeColor(color) {
      document.documentElement.style.setProperty(`--mainColor1`, `${color}`);
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkSize)
  }
})
</script>
<style lang="css">
:root {
  --mainColor1: rgb(178, 214, 230);
}

.header {
  background: var(--mainColor1);
}

body { /* 覆蓋瀏覽器預設樣式(user agent stylesheet) */
  margin: 0
}
</style>
<style lang="scss" scoped>

.header {
  color: #fff;
  position: fixed;
  width: 400px;
  height: 100vh;
  top: 0;
  left: 0;
  text-align: center;
  position: relative;
  transition: all 0.8s;
  & .info {
    position: absolute;
    bottom: 0;
    width: 400px;
    & .photo {
      margin: 0 auto;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-image: url('./../assets/images/photo.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
      opacity: 0.7;
      @media all and (max-width: 800px) {
        width: 150px;
        height: 150px;
      }
    }
    & .name {
      padding: 20px;
      font-size: 24px;
      font-family: 'Helvetica';
      padding-top: 15px;
      @media all and (max-width: 800px) {
        font-size: 16px;
        word-spacing: 3px;
      }
    }
    & p {
      margin: 10px 0;
      &.copyright {
        margin-top: 50px;
      }
    }
  }
  & .collapseBtn {
    position: absolute;
    left: 380px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    width: 40px;
    height: 40px;
    background: var(--mainColor1);
    border-radius: 50%;
    transition: all 1.2s;
    &:hover{
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
    & .closeBtn {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      border: solid 2px;
      padding: 5px 3px 2px;
      right: 0;
      margin: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    & .color {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50px;
      margin: 15px;
      border: solid 1px;
      &:hover {
        cursor: pointer;
      }
      &.blue {
        background: rgb(178, 214, 230);
        right: 40px;
      }
      &.green {
        background: rgb(37, 202, 106);
        right: 70px;
      }
      &.pink {
        background: rgb(238, 148, 148);
        right: 100px;
      }
    }
  }
  &.hideHeader {
    left: -400px;    
    transition: all 0.8s;
    & .collapseIcon {
      margin: 10px 0 0 20px;
      border-left-color: #fff;
      border-right-color: transparent;
    }
  }
  @media all and (max-width: 800px) {
    &:not(.hideHeader) {
      width: 100%;
      & .info {
        width: 100%;
      }
      & .collapseBtn {
        left: 90%;
        opacity: 0;
        &:hover {
          cursor: initial;
        }
      }  
    }

  }
}  
</style>