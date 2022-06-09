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
  request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {
}
