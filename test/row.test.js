import { expect } from 'chai';
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Exist.', () => {
        expect(Row).to.exist
    })

    it('Received gutter prop.', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        
        const colConstructor = Vue.extend(Col)
        const col1 = new colConstructor({
            propsData: {
                span: 12
            }
        });
        const col2 = new colConstructor({
            propsData: {
                span: 12
            }
        });
        const RowConstructor = Vue.extend(Row)
        const row = new RowConstructor({
            propsData: {
                gutter: 20
            }
        });
        col1.$mount()
        col2.$mount()
        row.$mount()
        row.$el.appendChild(col1.$el)
        row.$el.appendChild(col2.$el)

        div.appendChild(row.$el)

        setTimeout(() => {
            console.log(div.innerHTML)
            const row = document.getElementsByClassName('row')[0];
            console.log('row', row)
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')

            const cols = document.getElementsByClassName('col');
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')

            done()
            vm.$el.remove()
            vm.$el.$destroy()
        })
    })

    it('Received align prop', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent)
            .to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })
})