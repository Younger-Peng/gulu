<template>
  <div class="about" @click="showToast">
    <h1>This is an about page</h1>
  </div>
</template>
<script type="text/javascript">
export default {
    name: 'About',
    methods: {
        showToast() {
            this.$toast({
                autoClose: false,
                message: `Your IQ is ${parseInt(Math.random() * 100)}`,
                enableHTML: true,
                closeButton: {
                    text: 'know',
                    callback() {
                        console.log('User says he knows.')
                    }
                },
                position: 'bottom'
            })
        }
    }
}
</script>