// import { mount } from '@vue/test-utils'
// import App from '@/App.vue'

import { huevo, espinaca } from "./jestTest";

// const wrapper = mount(App)

// console.log(wrapper.element)

// const vm = wrapper.vm

// console.log(vm.$data)

describe('Se probará la calidad de los productos', () => {
    test('Calidad del huevo', () => {
        expect(huevo().estado[0]).toBe('fresco')
    });

    test('Calidad de la espinaca', () => {
        expect(espinaca()).toEqual({
            estado: 1,
            color: "verde"
        })
    });
});