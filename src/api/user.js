import request from '@/utils/request'

// 封装用户登录接口
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 封装获取 用户基本资料
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}
// 封装获取员工基本信息（头像)
export function getUserBaseInfo(id) {
  return request({
    url: `/sys/user/${id}`
  })
}
export function logout() {
}
