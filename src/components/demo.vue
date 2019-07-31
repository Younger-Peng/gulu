<template>
    <div>
        <h1>Hello Demo</h1>
        <g-button @click="showToast">click me</g-button>
    </div>
</template>

<script type="text/javascript">
import Button from './button'
export default {
    components: {
        'g-button': Button
    },
    methods: {
        showToast() {
            this.$toast('haha yes')
        }
    }
}
</script>