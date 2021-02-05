<template>
  <div class="header">
    <!-- <router-link to="/">HOME</router-link>
    <router-link to="/cat2">cat2</router-link>
    <router-link to="/cat3">cat3</router-link>
    <router-link to="/catAll">catAll</router-link>
    <p>header</p> -->
    <div class="info">
      <div class="photo"></div>
      <div class="name">
        <p> Carla | 林鈺琪 </p>
        <p> HTML CSS SCSS RWD</p>
        <p> JAVASCRIPT TYPESCRIPT </p>
        <p> VUE REACT REACT NATIVE</p>
        <p> WEBPACK GITHUB </p>
        <p class="copyright">Copyright © 2021 Carla Lin All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #ef9595;
  color: #fff;
  position: fixed;
  width: 400px;
  height: 100vh;
  top: 0;
  left: 0;
  text-align: center;
  & .info {
    position: absolute;
    bottom: 0;
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
    }
    & .name {
      padding: 20px;
      font-size: 24px;
      font-family: 'monospace','sans-serif','-webkit-pictograph';
      padding-top: 15px;
    }
    & p {
      margin: 10px 0;
      &.copyright {
        margin-top: 50px;
      }
    }
  }
}  
</style>