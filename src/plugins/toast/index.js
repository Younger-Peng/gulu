import Toast from './toast';
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(options) {
            const { message, ...rest } = options;
            const Constructor = Vue.extend(Toast);
            const toast = new Constructor({
                propsData: rest
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        };
    }
}