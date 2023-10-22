<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-11 16:13:03
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-16 14:20:40
 * @FilePath: /hello-vue3/src/components/5-1-5.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>5.1.5 debounce 过滤器 （防抖）</h1>
    <p>debounce 过滤器的回调函数会延迟到这个调用之后 X 毫秒执行，如果响应函数在延迟执行之前再次被调用，则延迟时间会被重置为 X 毫秒。本节算法是 debounce 的高阶函数实现。</p>
    <n-button @click="dialog0('按下立即弹窗')">按下立即弹窗</n-button>
    <br>
    <br>
    <n-button @click="dialog2('按下 2s 后弹窗')">按下 2s 后弹窗</n-button>

    <p>debounce 过滤器的实现如下：</p>
    <n-code language="js" :code="code1"></n-code>
    <p>在 Vue 中的调用方式如下：</p>
    <n-code language="js" :code="code2"></n-code>
</template>

<script setup>
import useDebounce from '@/utils/useDebounce.js'
defineOptions({
    inheritAttrs: false
})
const { debounce } = useDebounce()
const dialog = function (msg) {
    alert(msg);
}
const dialog0 = debounce(dialog, 0)
const dialog2 = debounce(dialog, 2000)

const code1 = `// src/utils/useDebounce.js
import { ref } from 'vue'

export default () => {
    const timer = ref(null)

    const cancel = () => {
        if (!timer.value) {
            return
        }
        clearTimeout(timer.value)
        timer.value = null
    }

    const debounce = (fn, delay = 300) => {
        return (...args) => {
            cancel()
            timer.value = setTimeout(() => {
                fn.apply(this, args)
                timer.value = null
            }, delay)
        }
    }

    return {
        cancel,
        debounce,
    }
}`

const code2 = `
import useDebounce from '@/utils/useDebounce.js'

const { debounce } = useDebounce()
const dialog = function (msg) {
    alert(msg);
}
const dialog0 = debounce(dialog, 0)
const dialog2 = debounce(dialog, 2000)
`
</script>