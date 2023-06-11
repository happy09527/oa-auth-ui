
/*
角色管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/system/sysUser'

export default {
    // 分页获取角色信息
    getSysUserPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            //如果普通对象参数写法params:对象参数名称
            //如果使用json格式传递，data:对象参数名称
            params: searchObj
        })
    },

    // 删除用户信息
    removeById(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'post',
        })
    },
    //新增用户信息
    save(sysUser) {
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: sysUser
        })
    },
    //根据id获取用户信息
    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get',
        })
    },
    //修改用户信息
    updateById(sysUser) {
        return request({
            url: `${api_name}/update`,
            method: 'post',
            data: sysUser
        })
    },
    //修改用户状态
    updateStatus(id,status) {
        return request({
            url: `${api_name}/update/${id}/${status}`,
            method: 'post',
            data: sysUser
        })
    },
}
