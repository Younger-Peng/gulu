import Toast from './toast';
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message) {
            const Constructor = Vue.extend(Toast);
            const toast = new Constructor({
                propsData: {
                    autoClose: false,
                    // closeButton: {
                    //     text: 'know',
                    //     callback() {
                    //         console.log('User says he knows.')
                    //     }
                    // }
                }
            });
            toast.$slots.default = ['click me'];
            toast.$mount();
            document.body.appendChild(toast.$el);
        };
    }
}