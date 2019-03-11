<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  const validator = val => {
    return !Object.keys(val)
      .some(key => !['span', 'offset'].includes(key))
  }
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number ,String]
      },
      ipad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      },
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        const { span, offset, ipad, narrowPc, pc, widePc } = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
        ]
      },
      colStyle() {
        const { gutter } = this
        return {
          paddingLeft: `${gutter/2}px`,
          paddingRight: `${gutter/2}px`
        }
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>
<style scoped lang="scss">
  .col {
    $class-prefix1: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix1}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix2: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix2}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }

    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style> 