<template>
    <div>
        <transition :name="slideName">
            <keep-alive>
                <router-view name="body" class="child-view"></router-view>
            </keep-alive>
        </transition>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'mainComps',
        beforeRouteUpdate (to, from, next) {
            if(to.path.length<from.path.length){
                this.$router.isBack = true;
            }
            let isBack = this.$router.isBack;
            if (isBack) {
                this.slideName = 'slide-right';
            } else {
                this.slideName = 'slide-left';
            }
            this.$router.isBack = false;
            next();
        }
    }
</script>
