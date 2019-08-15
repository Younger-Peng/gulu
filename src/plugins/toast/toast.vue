<template>
    <div class="toast" ref="container">
        <span v-if="enableHTML" class="message" v-html="$slots.default[0]"></span>
        <span v-else class="message">
            <slot></slot>
        </span>
        <div class="line" :style="{height: height, width: '10px'}"></div>
        <span class="close-txt" v-if="closeButton" @click="cb">{{closeButton.text}}</span>
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
            },
            enableHTML: {
                type: Boolean,
                default: false
            }
        },
        created() {
            console.log(this.enableHTML)
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000)
            }

            this.$nextTick(() => {
                const height = getComputedStyle(this.$refs.container).height;
                console.log({ height})
                this.height = height;
            });

        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            cb() {
                this.close();
                this.closeButton.callback();
            }
        }
    }
</script>
<style lang="scss">
    .toast {
        position: fixed;
        top: 5vh;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.55);
        color: white;
        border-radius: 0.3em;
        display: flex;
        align-items: center;
    }
    .message {
        padding: 0.5em 0 0.5em 1em;
    }
    .close-txt {
        padding: 0.5em 1em 0.5em 0;
        cursor: pointer;
    }
    .line {
        margin: 0 1em;
        background: red;
    }
</style>