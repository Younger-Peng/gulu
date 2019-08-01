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
                    return ['left', 'center', 'right'].includes(val)
                }
            }
        },
        computed: {
            rowStyle() {
                const { gutter } = this
                return {
                    marginLeft: `-${gutter/2}px`,
                    marginRight: `-${gutter/2}px`,
                }
            },
            rowClass() {
                const { align } = this
                return [align && `align-${align}`]
            }
        }
    }
</script>
<style scoped lang="scss">
  .row{
    display: flex;
    flex-wrap: wrap;
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