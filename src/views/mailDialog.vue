<template>
  <div class="dialogField">
    <template v-if="step1">
      <div>
        <p>寄件者</p>
        <input type="text" name="sendFrom" v-model="sendFrom">
      </div>
      <div>
        <p>信箱</p>
        <input type="text" name="sendFrom" v-model="mailBox">
      </div>
      <div>
        <p>內容</p>
        <textarea v-model="content" rows="15"></textarea >
      </div>
      <div class="btnfield">
        <div class="cancel" @click="closeDialog('close')">取消</div>
        <div class="send" @click="closeDialog('send')">
          <span :class="{ hide: loading }">寄信</span>    
          <div v-if="loading" class="loading"><i class="fas fa-spinner"></i></div>
        </div>
      </div>
      <div class="closeBtn" @click="closeDialog('close')"><i class="fas fa-times"></i></div>
      
    </template>
    <template v-else>
      <p class="thanks">謝謝您的來信，我會盡速回復您的訊息。</p>
       <div class="btnfield">
        <div class="send" :class="{ confirm: !step1 }" @click="closeDialog('close')">確認</div>
      </div>
    </template>  
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      sendFrom: '',
      content: '',
      mailBox: '',
      step1: true,
      loading: false
    }
  },
  methods: {
    closeDialog (type) {
      let hintMsg = ''
      if (this.sendFrom.length === 0) {
        hintMsg += '寄件者欄位(您的稱呼)、'
      }
      if (this.mailBox.length === 0) {
        hintMsg += '寄件信箱、'
      }
      if (this.content.length === 0) {
        hintMsg += '內容、'
      }

      let err = 0
      if (type === 'send') {
        if (hintMsg.length > 0) {
          hintMsg = hintMsg.slice(0, hintMsg.length-1)
          let msg = `請填寫以下欄位：${hintMsg}，然後再進行發送。`
          this.$toasted.show(msg)
          err = 1
       } else if (this.mailBox.indexOf('@') === -1) {
          this.$toasted.show('請填寫包含 "@" 的有效信箱以利回覆您的訊息。')
          err = 1
       }
       else {
         this.loading = true
       }
      }
      if (!err) {
        this.$emit('close-dialog', [type, this.sendFrom, this.mailBox, this.content])
      } 
    }
  }
})
</script>
<style lang="scss">
.dialogField {
  position: fixed;
  top: 50%;
  left: calc(50% + 125px);
  transform: translate(-50%, -50%);
  width: 50%;
  min-width: 300px;
  background: #fff;
  opacity: 0.9;
  border-radius: 10px;
  z-index: 2;
  padding: 40px 40px 60px;
  @include rwd($pad) {
    min-width: initial;
    width: calc(90vw - 60px);
    left: 50%;
    padding: 50px 30px;
  }
  & div {
    margin: 10px 0;
    & p {
      margin: 5px 0;
    }
    & input, textarea {
      width: 100%;
      height: 25px;
      font-size: 16px;
      &:focus {
        outline: none;
      }
    }
    & textarea {
      height: calc(100% - 200px);
    }
  }
  & .closeBtn {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 0;
    right: 0;
    margin: 10px 15px;
    color: var(--mainColor1);
    font-size: 25px;
    &:hover {
      margin-top: 8px;
      cursor: pointer;
    }
  }
  & .btnfield {
    position: relative;
    & div {
      border-radius: 5px;
      padding: 5px 20px;
      margin: 0 10px;
      color: #fff;
      position: absolute;
      &.cancel {
        background-color: #888;
        right: 80px;
      }
      &.send {
        background-color: var(--mainColor1);
        right: -15px;
      }
      &.confirm {
        left: 50%;
        transform: translateX(-50%);
        right: auto;
      }
      & .hide {
        opacity: 0;
      }
      &:hover {
        margin-top: -2px;
        cursor: pointer;
      }
    }
  }
}
.thanks {
  text-align: center;
}
.toasted-container.top-center {
  left: calc(50% + 125px) !important;
}


.loading {
  position: absolute;
  top: 3px;
  left: -10%;
  width: 20px;
  color:var(--mainColor1);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: -webkit-transform 1s linear;
  transition: transform 1s linear;
  -webkit-animation: spin 1s linear 1s 5 alternate;
  animation: spin 1.2s linear infinite;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

</style>