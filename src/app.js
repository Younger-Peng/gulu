import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('pl-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created() {
        setTimeout(() => {
            const event = new Event('change')
            const inputEl = this.$el.querySelector('input')
            inputEl.dispatchEvent(event)
            console.log('hi')
        }, 3000)
    },
    methods: {
        inputChange(e) {
            console.log(e)
        }
    }
})
