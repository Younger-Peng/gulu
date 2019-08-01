<template>
    <div class="layout" :class="layoutClasses">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Layout',
    data() {
        return {
            layoutClasses: {
                'has-sider': false
            }
        }
    },
    mounted() {
        if (this.$children.some(vm => vm.$options.name === 'ZSider')) {
            this.layoutClasses['has-sider'] = true
        }
    }
}
</script>
<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        background: #ccc;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
    }
    .layout.has-sider {
        flex-flow: row nowrap;
    }
</style>