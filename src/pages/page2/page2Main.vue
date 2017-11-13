<template>
    <div>
        <keep-alive>
            <router-view name="body"></router-view>
        </keep-alive>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'page2Main'
    }
</script>
