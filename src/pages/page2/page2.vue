<template lang="html">
    <div class="page2">
       {{msg}}，page2页面
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
    this.msg = hello('欢迎来到')
  }
}
</script>

<style lang="css" scoped>
  .page2{
    padding: 20px;
  }
</style>
