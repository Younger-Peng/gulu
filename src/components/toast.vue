<template>
    <div class="toast" ref="container">
        <slot></slot>
        <div class="line" :style="{height: height}"></div>
        <span v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'Toast',
        data() {
            return {
                height: 0
            }
        },
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: 'close',
                        callback: (toast) => {
                            toast.close();
                        }
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }

            
            this.$nextTick(() => {
                const computedStyle = getComputedStyle(this.$refs.container)
                const height = computedStyle.height
                this.height = height;
                console.log(this.height)
            })

        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            }
        }
    }
</script>
<style lang="scss">
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.15);
        color: white;
        border-radius: 0.3em;
    }
    .line {
        display: inline-block;
        width: 1px;
        background: red;
    }
</style>