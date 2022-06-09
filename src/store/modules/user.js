import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login, getUserInfo } from '@/api/user.js'
const state = {
  token: getToken(), // 初始化token
  userInfo: {}// 初始化用户基本资料信息
}
const mutations = {
  updateToken(state, token) {
    state.token = token// 修改token
    setToken(token) // 设置缓存中的token
  },
  removeToken(state) {
    state.token = null // 清空token
    removeToken() // 清除缓存中  token
  },
  setUserInfo(state, data) { //  设置用户信息
    state.userInfo = data
  },
  removeUserInfo(state) { // 删除用户资料
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    // 获取登录是否成功的结果
    const result = await login(data)
    // axios  自动给返回结果加了一层data
    //  如果登录成功则调用修改 token的方法
    context.commit('updateToken', result)
  },
  async getUserInfo(context) {
    const result = await getUserInfo()// 获取返回值
    // console.log(result)
    context.commit('setUserInfo', result) // 将整个 的个人信息 设置到用户的vuex数据中
    return result // 这里  为什么要返回，为后面埋下伏笔
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
