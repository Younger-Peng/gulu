<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ZSider'
}
</script>
<style lang="scss" scoped>
    .sider {
        width: 200px;
        background: #666;
    }
</style>