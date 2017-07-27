<template lang="html">
    <div class="page1">
       <div>
         {{msg}},这是page1页面
         <br/><br/><br/>
         <button @click="change">点击切换</button>
         <button @click="change2">点击切换2</button>
         <router-view></router-view>
       </div>
    </div>
</template>

<script>
import {hello} from '@/assets/js/hello'
export default {
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
        path:'/page1/anotherPage'
      });
    },
    change2(){
      this.$router.push({
        path:'/page1/anotherPage2'
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
