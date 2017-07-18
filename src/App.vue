<template>
  <div id="app">
    <MHeader></MHeader>
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components:{
    MHeader,
    Tab
  }
}
</script>

<style scoped>

</style>
