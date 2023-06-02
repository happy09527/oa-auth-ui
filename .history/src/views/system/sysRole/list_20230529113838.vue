

<script>
//  引入js
import api from '@/api/system/sysRole'
export default {
    //vue代码结构
    data(){ //初始值
        return{
            role
        }
    },
    created(){ // 渲染之前执行代码
        this.fetchData();
    },
    methods:{//具体的执行方法 
        fetchData(){

        }
    }
}
</script>