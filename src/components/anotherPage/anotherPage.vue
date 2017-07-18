<template lang="html">
  <transition name="slide">
    <div class="anotherPage">
       <div class="back" @click="back">
        << back
       </div>
        this is  anotherPage1
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
  background-color: #222;
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
