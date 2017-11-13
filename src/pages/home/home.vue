<template lang="html">
    <div>
       <mt-header title="微信"></mt-header>
       <div class="page1">
          {{msg}},这是page1页面
          <br/><br/><br/>
          <mt-button @click="change">点击切换</mt-button>
           &nbsp;&nbsp;
          <mt-button @click="changeTwo">点击切换2</mt-button>
       </div>
    </div>
</template>
<script>
import {hello} from '@/assets/js/hello';
export default {
    name:'homeInfo',
    data(){
        return {
          msg:''
        }
    },
    created(){
        this.msg = hello('九次方')
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
        }
    }
}
</script>

<style lang="css" scoped>
   .page1{
       padding: 20px;
   }
</style>
