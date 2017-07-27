<template lang="html">
  <div class="tab">
    <!-- tag = "div" 是让router最终渲染成DIV 默认是A标签 -->
    <router-link tag="div" class="tab-item" to="/page1">
      <i class="icon icon-not-favorite"></i>
      <span class="tab-link">页面1</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/page2">
      <span class="tab-link">页面2</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/page3">
      <span class="tab-link">页面3</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.tab{
  height: 0.6rem;
  line-height: 0.6rem;
  font-size:14px;
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  background-color:rgba(0,0,0,.1);
}
.tab .tab-item{
  width: 33%;
  float: left;
  text-align: center;
}

.tab .tab-item .tab-link{
  padding-bottom: 5px;
  color: #222;
}
.tab .tab-item.router-link-active i{ color: red}
.tab .tab-item.router-link-active .tab-link{
    color: red;
}
</style>
