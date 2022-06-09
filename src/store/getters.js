const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 创建token快捷访问
  name: state => state.user.userInfo.username // 建立用户名快捷访问
}
export default getters
