import Toast from './toast';

let toast = null;
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(options) {
            if (toast) toast.close();
            const { message, ...rest } = options;
            const Constructor = Vue.extend(Toast);
            toast = new Constructor({
                propsData: rest
            });
            toast.$slots.default = [message];
            toast.$mount();
            document.body.appendChild(toast.$el);
        };
    }
}