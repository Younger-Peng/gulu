<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        created() {
            console.log('row created')
        },
        mounted() {
            console.log('row mounted')
            console.log(this.$children)
            this.$children.forEach(vm => {
                vm.gutter = this.gutter
            })
        }
    }
    const div = document.createElement('div')
    const childDiv = document.createElement('div')
    div.appendChild(childDiv)
    document.body.appendChild(div)
</script>
<style scoped lang="scss">
  .row{
    display: flex;
  }
</style> 