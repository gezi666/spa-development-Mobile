<template lang="html">
    <div class="anotherPage">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <mt-button icon="back" slot="left" @click="back">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="content">这是组件  anotherPage2</div>
    </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.goBack();
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
  background-color: #C21F39;
  color: #fff;
}

</style>
