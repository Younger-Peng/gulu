import chai from 'chai'
import Vue from 'vue'
import Button from '../src/button'

const { expect } = chai

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在', () => {
        expect(Button).to.exist
    })

    it('可以设置icon', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })
})