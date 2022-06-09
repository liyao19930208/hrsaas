import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store' // 引入vuex实例
const service = axios.create({
  // 当执行npm run dev时 值为/api  这只是开发环境配置的代理
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 //   定义5秒超时
}) // 创建一个axios的实例
service.interceptors.request.use(config => {
  //  注入token
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config // 必须返回配置
}, error => {
  Promise.reject(error)
}) // 请求拦截器
service.interceptors.response.use(response => {
  // axios默认加了一层data
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    // 如果业务已经错误还能进then ？ 不能！ 应该进 catch
    Message.error(message)// 提示错误信息
    return Promise.reject(new Error(message))
  }
},
error => {
  Message.error(error.message)// 提示 错误信息
  return Promise.reject(error)
}
) // 响应拦截器
export default service // 导出axios实例
