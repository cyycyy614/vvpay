<template>
  <div id="app">
    <h3 class="index-title">仿某宝支付密码框的vue插件</h3>
    <h3 class="index-title">这里模拟的密码为：111111</h3>

    <div class="submit-btn" @click="onShowPay">点击显示支付弹窗</div>

    <!--支付密码弹窗-->
    <vvpay ref="pays" v-model="show" @close="close" @forget="forget" @input-end="inputEnd"></vvpay>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: '',
      show: false,
    }
  },
  methods: {
    onShowPay() {
      this.show = true
    },

    // 密码输入完成回调
    inputEnd(val) {
      setTimeout(() => {
        // 模拟支付成功的结果
        if (val == 111111) {
          // 调用插件的$success方法告知插件支付成功
          // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
          this.$refs.pays.$success().then(res => {
            console.log('支付成功',res)
            this.$router.push('/success')
          })
          // 模拟支付失败的结果
        } else {
          this.$refs.pays.$fail()
        }
      }, 1000)
    },

    // 取消支付弹窗关闭的回调
    close() {
      console.log('关闭')
    },

    // 忘记密码跳转
    forget() {
      console.log('触发forge事件')
    },
  },
  components: {
    // HelloWorld,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
