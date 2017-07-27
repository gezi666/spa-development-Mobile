<template lang="html">
  <transition name="slide">
    <div class="anotherPage">
       <div class="back" @click="back">
        << 返回
       </div>
        这是组件 anotherPage1
        <br/><br/><br/>
        <button @click="change"> 再切换</button>
        <router-view></router-view>
    </div>

  </transition>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    },
    change(){
      this.$router.push({
        path:'/page1/anotherPage/anotherPage3'
      });
    }
  }
}
</script>

<style lang="css" scoped>
.anotherPage{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
  background-color: #008800;
  color: #fff;
}
.back{
  height: 30px; line-height: 30px;
}

.slide-enter-active,.slide-leave-active{
  transition:all 0.3s
}
.slide-enter,.slide-leave-to {
  transform:translate3d(100%,0,0);
}
</style>
