import vvpay from './pay'

const vvpayComp = {
  install(Vue){
    Vue.component('vvpay',vvpay)
  }
}

export default vvpayComp