import request from '@/utils/request'

export default{
    // 分页获取角色信息
    getSysRolePageList(current,limit,searchObj){
        return request({
            url: `/admin/system/sysRole/${current}/${limit}`,
            method: get,
            eerou .e
//如果普通对象参数写法params:对象参数名称//如果使用json格式传递，data:对象参数名称

            params:{searchObj}
        })
    }
}