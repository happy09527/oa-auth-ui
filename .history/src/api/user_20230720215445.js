import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/system/index/login',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/system/index/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/system/index/logout',
    method: 'post'
  })
}

export function bindPhone(bindPhoneVo) {
  return request({
    url: `/admin/wechat/bindPhone`,
    method: 'post',
    data: bindPhoneVo
  })
}
