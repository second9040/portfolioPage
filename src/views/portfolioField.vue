<template>
  <div class="portfolioField">
    <p class="title">網頁開發練習與作品</p> 
    <div class="workList">
      <div class="work">
        <div class="screenShot">
          <img src="/image/cherry.png" alt="cherry">
        </div>
        <div class="screenShot mobile">
          <img src="/image/cherry-m.png" alt="cherry-m">
        </div>        
        <div class="intro">
          <div class="text">
            <p>日本賞櫻推薦</p>
            <p>一頁式 landing page</p>
            <p>輪播功能 > swiper</p>
            <p><span>Vue.js</span><span>css</span><span>RWD</span></p>
          </div>
        </div>
        <div class="mask">
          <div><a href="https://second9040.github.io/portfolio/%5BVue%5D%20Cheery%20in%20Japan/cherryJapan.html">作品連結</a> </div>
          <div><a href="https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20Cheery%20in%20Japan">程式碼</a></div>
        </div>
      </div>
      <div class="work">
        <div class="screenShot">
          <img src="/image/lightbox.png" alt="lightbox">
        </div>
        <div class="screenShot mobile">
          <img src="/image/lightbox-m.png" alt="lightbox-m">
        </div>  
        <div class="intro">
          <div class="text">
            <p>LightBox</p>
            <p>幻燈片 > swiper</p>
            <p><span>Vue.js</span><span>css</span><span>RWD</span></p>
          </div>
        </div>
        <div class="mask">
          <div><a href="https://second9040.github.io/portfolio/[Vue]%20LightBox/LightBox.html">作品連結</a> </div>
          <div><a href="https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20LightBox">程式碼</a></div>
        </div>
      </div>      
      <div class="work">
        <div class="screenShot">
          <img src="/image/progressBar.png" alt="progressBar">
        </div>
        <div class="screenShot mobile">
          <img src="/image/progressBar-m.png" alt="progressBar-m">
        </div>  
        <div class="intro">
          <div class="text">
            <p>進度條</p>
            <p>可長按或手動輸入設定進度</p>
            <p>動畫呈現賦值改變狀態</p>
            <p><span>React</span><span>state</span><span>RWD</span></p>
          </div>
        </div>
        <div class="mask">
          <div><a href="https://second9040.github.io/portfolio/[Vue]%20LightBox/LightBox.html">作品連結</a> </div>
          <div><a href="https://github.com/second9040/portfolio/tree/master/%5BVue%5D%20LightBox">程式碼</a></div>
        </div>
      </div> 
      <div class="work">
        <div class="screenShot">
          <img src="/image/calandar.png" alt="calandar">
        </div>
        <div class="intro noRWD">
          <div class="text">
            <p>日曆結合待辦清單</p>
            <p><span>React</span><span>functional component</span></p>
          </div>
        </div>
        <div class="mask">
          <div><a href="https://second9040.github.io/portfolio/%5BReact%5D%20SimpleToDoList/SimpleToDoList.html">作品連結</a> </div>
          <div><a href="https://github.com/second9040/portfolio/tree/master/%5BReact%5D%20SimpleToDoList">程式碼</a></div>
        </div>
      </div>            
    </div>
  </div>
</template>
<style lang="scss" scoped>
.portfolioField {
  margin-left: 400px;
  background: url('./../assets/images/pexels-jess-bailey-designs-1007025.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: calc(80% - 400px);
  height: 100%;
  padding: 0 10%;
  & .title {
    margin: 0;
    text-align: center;
    font-size: 2.5em;
    padding-bottom: 15px;
    border-bottom: solid 5px $mainColor;
  }
  & .workList {
    flex-wrap: wrap;
    margin: 20px auto;
    & .work {
      display: flex;
      position: relative;
      box-sizing: border-box;
      & .screenShot {
        position: relative;
        width: 50%;
        height: 350px;
        margin: 20px;
        & img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);       
          width: 100%;
          height: auto;   
        }
        &.mobile {
          width: 20%;
          & img {
            width: auto;
            height: 100%;  
          }
        }
      }
      & .intro {
        width: 20%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & .text {
          padding: 10%;
          font-size: 1.2em;
          & p span {
            margin: 0 5px;
            padding: 5px;
            background: $mainColor;
            border-radius: 5px;
            color: #fff;
            font-weight: bold;
            opacity: 0.7;
            &:first-child {
              margin-left: 0;
            }
          }
        }
        &.noRWD {
          width: 50%
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
        & div {
          display: none;
        }
        &:hover {
          background: #000;
          opacity: 0.6;
          transition: all 0.5s;
          & div {
            display: block;
            padding: 15px;
            width: 160px;
            margin: 20px;
            text-align: center;
            border-radius: 15px;
            font-size: 1.8em;
            border: solid;
            &:hover {
              cursor: pointer;
              box-shadow: 1px 1px 1px #fff;
              margin-top: -1px;
            }
            & a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

</style>