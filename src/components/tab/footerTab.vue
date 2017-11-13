<template lang="html">
  <div class="footerTab bd-top-1">
         <div class="tab-item">
            <router-link to='/home'>
              <i class="iconfont icon-xinxi"></i>
              <span>微信</span>
            </router-link>
         </div>
         <div class="tab-item">
            <router-link to='/page2'>
                 <i class="iconfont icon-lianxiren"></i>
                 <span>通讯录</span>
            </router-link>
        </div>
        <div class="tab-item">
           <router-link to='/page3'>
               <i class="iconfont icon-faxian1"></i>
               <span>发现</span>
           </router-link>
        </div>
        <div class="tab-item">
           <router-link to='/page4'>
              <i class="iconfont icon-wo"></i>
              <span>我</span>
           </router-link>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    .footerTab {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        overflow: hidden;
        line-height: 60px;
        z-index: 888;
        background-color: #f9f9f9;
    }
    .footerTab .tab-item {
        width:25%;
        height:100%;
        float:left;
        text-align: center;
        position: relative;
    }
    .footerTab .tab-item a{
        color: #666;
    }
    .tab-item i{
        display:block;
        font-size:28px;
        line-height:normal;
        margin:7px auto 0 auto;
    }
    .tab-item span{
        display:block;
        height: 20px;
        line-height: 20px;
        font-size: 0.5em;
    }
    .footerTab .tab-item a.router-link-active{
        color: #1aad19;
    }

</style>
