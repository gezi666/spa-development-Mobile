<template lang="html">
    <div class="page2">
       这是page2,{{msg}}
    </div>
</template>

<script>
import {hello} from 'common/js/hello'
export default {
  data(){
    return {
      msg:''
    }
  },
  created(){
    this.msg = hello('哈哈哈')
  },
}
</script>

<style lang="css" scoped>
  .page2{
    padding: 20px;
  }
</style>
