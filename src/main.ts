import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: '73E7EC18A8AD1240' }
  if (config.data instanceof FormData) {
    config.data.append('icode', '73E7EC18A8AD1240')
  } else {
    config.data = { ...config.data, icode: '73E7EC18A8AD1240' }
  }
  return config
})
axios.get('/columns').then(resp => {
  console.log(resp.data)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
