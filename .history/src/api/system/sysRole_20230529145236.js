import request from '@/utils/request'

const api_name = '/admin/system/sysRole'
export default{
    // 分页获取角色信息
    getSysRolePageList(page,limit,searchObj){
        return request({
            url: `${api_name}/${current}/${limit}`,
            method: get,
            //如果普通对象参数写法params:对象参数名称
            //如果使用json格式传递，data:对象参数名称
            params:{searchObj}
        })
    }
}