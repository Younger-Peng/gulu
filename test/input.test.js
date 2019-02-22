const { expect } = chai
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it ('Exist', () => {
        expect(Input).to.exist
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => vm.$destroy())

        it('Received value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('1234')
        })

        it('Received readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
        })

        it('Received error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'Wrong message'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
            const errorMsg = vm.$el.querySelector('.error-message')
            expect(errorMsg.innerText).to.eq('Wrong message')
        })
    })

    describe('Event', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => vm.$destroy())
        it('Support change/input/focus/blur events', () => {
            ['change', 'input', 'focus', 'blur'].forEach(eventName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)

                const event = new Event(eventName)
                Object.defineProperty(event, 'target', {
                    value: {
                        value: 'hi'
                    },
                    enumerable: true
                })
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
                expect(callback.callCount).to.eq(1)
            })
        })
    })

})