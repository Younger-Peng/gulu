<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(val) {
                    console.log('val ', val)
                    return ['left', 'center', 'right'].includes(val)
                }
            }
        },
        computed: {
            rowStyle() {
                const { gutter } = this
                return {
                    marginLeft: -`-${gutter/2}px`,
                    marginRight: `-${gutter/2}px`,
                }
            },
            rowClass() {
                const { align } = this
                return [align && `align-${align}`]
            }
        },
        created() {

        },
        mounted() {
            this.$children.forEach(vm => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style scoped lang="scss">
  .row{
    display: flex;
    &.align-left {
        justify-content: flex-start;
    }
    &.align-center {
        justify-content: center;
    }
    &.align-right {
        justify-content: flex-end;
    }
  }
</style> 