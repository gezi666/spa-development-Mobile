<template lang="html">
    <div>
       <mt-header title="微信"></mt-header>
       <div class="scroll-box page1">
          <div class="box">
              {{msg}},这是page1页面
              <br/><br/><br/>
              <mt-button @click="change">点击切换</mt-button>
               &nbsp;&nbsp;
              <mt-button @click="changeTwo">点击切换2</mt-button>
          </div>
          <div>
             <mt-cell v-for="item in list" :title="item.title" :label="item.subTitle" is-link>
                <span style="color: green">{{item.content}}</span>
             </mt-cell>
          </div>
       </div>
    </div>
</template>
<script>
import {HomeHttp} from '@/api/homeHttp';
import {hello} from '@/assets/js/hello';
export default {
    name:'homeInfo',
    data(){
        return {
           msg:'',
           list:[]
        }
    },
    created(){
        this.msg = hello('九次方');
        this.queryList();
    },
    methods:{
        change(){
            this.$router.push({
              path:'/home/anotherPage'
            });
        },
        changeTwo(){
           this.$router.push({
               path:'/home/anotherPage2'
           });
        },
        queryList(){
            HomeHttp.queryList({}).then((res)=>{
                this.list = res.data.list;
            });
        }
    }
}
</script>

<style lang="css" scoped>
   .scroll-box{
       height: calc(100vh - 120px);
       overflow:hidden;
       overflow-y:auto;
       -webkit-overflow-scrolling: touch;
   }
   .page1{
       padding-left: 0.1rem;
   }
   .box{
       padding: 10px;
   }
</style>
