import MyCalc from "../components/MyCalc.vue"
import { describe } from "@jest/globals" 
import { test } from "@jest/globals"
import { mount } from "@vue/test-utils"
import { expect } from "@jest/globals"


describe('Test for MyCalc', ()=>{

    test("test operand1", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.setValue("1")
        expect(wrapper.vm.operand1).toBe(1)
    }),

    test("test operand2", ()=>{
        const wrapper = mount(MyCalc)
        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("1")
        expect(wrapper.vm.operand2).toBe(1)
    }),

    test("test sum", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "1"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("4")
        
        const btn = wrapper.find('button[name="+"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(5)

    }),

    test("test substract", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "4"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("2")
        
        const btn = wrapper.find('button[name="-"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(2)

    }),

    test("test divide", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "4"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("2")
        
        const btn = wrapper.find('button[name="/"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(2)

    }),

    test("test divide error", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "4"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("0")
        
        const btn = wrapper.find('button[name="/"]')
        btn.trigger("click")

        expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')

    }),

    test("test multiplay", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "4"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("2")
        
        const btn = wrapper.find('button[name="*"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(8)

    }),

    test("test integerDivision", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "50"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("54")
        
        const btn = wrapper.find('button[name="%"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(50)

    }),
    
    test("test exponentiation", ()=>{
        const wrapper = mount(MyCalc)
        const operand1 = wrapper.find("input[name=operand1]")
        operand1.element.value = "15"
        operand1.trigger("input")

        const operand2 = wrapper.find("input[name=operand2]")
        operand2.setValue("2")
        
        const btn = wrapper.find('button[name="**"]')
        btn.trigger("click")

        expect(wrapper.vm.result).toBe(225)

    })

    test("test checkbox", ()=>{

        const wrapper = mount(MyCalc, {
            data(){
                return {
                    checkbox: false
                }
            }
        }) 

        

        const checkbox = wrapper.find("input[name=checkbox]")
        checkbox.trigger("click")
        checkbox.setChecked(true)

        expect(wrapper.checkbox).toBe(true)

        //---------------------------------------------------------------------

        // const radiobtn1 = wrapper.find("input[name=operandInput1]")
        // radiobtn1.trigger("click")
        // radiobtn1.setChecked(true)

        // const checkboxKeyboard = wrapper.find("input[id=keyboardCheckbox]")
        // checkboxKeyboard.element.checked = false
        // checkboxKeyboard.trigger("click")
        // checkboxKeyboard.trigger("change")

        // const keyNum = wrapper.find("btn[id='1']")
        // keyNum.trigger("click")

        // const operand1 = wrapper.find("input[name=operand1]")
        // operand1.setValue("1")

        // expect(wrapper.vm.operand1).toBe(1)

    })
    
    // test("test del", ()=>{
    //     const wrapper = mount(MyCalc)
    //     const operand1 = wrapper.find("input[name=operand1]")
    //     operand1.element.value = "15"
    //     operand1.trigger("input")
        
    //     const btn = wrapper.find('button[name=del]')
    //     btn.trigger("click")

    //     expect(wrapper.vm.operand1).toBe(1)

    // })

})