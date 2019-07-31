<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'Toast'
    }
</script>
<style lang="scss">
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.15);
        padding: 0.5em 1em;
        color: white;
        border-radius: 0.3em;
    }
</style>