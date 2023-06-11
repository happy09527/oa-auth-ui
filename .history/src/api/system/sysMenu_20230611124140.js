import request from '@/utils/request'

/*
菜单管理相关的API请求函数
*/
const api_name = '/admin/system/sysMenu'

export default {

  /*
  获取权限(菜单/功能)列表
  */
  findNodes() {
    return request({
      url: `${api_name}/findNodes`,
      method: 'get'
    })
  },

  /*
  删除一个权限项
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: "post"
    })
  },

  /*
  保存一个权限项
  */
  save(sysMenu) {
    return request({
      url: `${api_name}/save`,
      method: "post",
      data: sysMenu
    })
  },

  /*
  更新一个权限项
  */
  updateById(sysMenu) {
    return request({
      url: `${api_name}/update`,
      method: "post",
      data: sysMenu
    })
  }
}
