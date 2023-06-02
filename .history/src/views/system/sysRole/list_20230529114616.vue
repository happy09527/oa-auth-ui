

<script>
//  引入js
import api from '@/api/system/sysRole'
export default {
    //vue代码结构
    data(){ //初始值
        return{
            roleList:[],
            page:1,
            limit:10,
            total:0,
            searchObj:{},
        }
    },
    created(){ // 渲染之前执行代码
        this.fetchData();
    },
    methods:{//具体的执行方法 
        fetchData(){
            api.getSysRolePageList(page,limit,this.searchObj).then(response =>{
                this.roleList = response.data.
            })
        }
    }
}
</script>