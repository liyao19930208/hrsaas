const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 创建token快捷访问
  username: state => state.user.userInfo.username, // 建立用户名快捷访问
  userId: state => state.user.userInfo.userId, // 建立用户id快捷访问
  avatar: state => state.user.userInfo.staffPhoto // 建立用户头像快捷访问
}
export default getters
