import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login } from '@/api/user.js'
const mutations = {
  updateToken(state, token) {
    state.token = token// 修改token
    setToken(token) // 设置缓存中的token
  },
  removeToken(state) {
    state.token = null // 清空token
    removeToken() // 清除缓存中  token
  }
}
const actions = {
  async login(context, data) {
    // 获取登录是否成功的结果
    const result = await login(data)
    // axios  自动给返回结果加了一层data
    //  如果登录成功则调用修改 token的方法
    context.commit('updateToken', result)
  }
}
const state = {
  token: getToken()
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
