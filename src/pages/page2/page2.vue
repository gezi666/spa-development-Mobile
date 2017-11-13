<template lang="html">
    <div>
        <mt-header title="通讯录"></mt-header>
        <div class="page2">
           {{msg}}，page2页面
        </div>
    </div>
</template>

<script>
import {hello} from '@/assets/js/hello'
export default {
    name:'page2',
    data(){
       return {
           msg:''
       }
   },
   created(){
      this.msg = hello('欢迎来到')
   }
}
</script>

<style lang="css" scoped>
  .page2{
     padding: 20px;
  }
</style>
