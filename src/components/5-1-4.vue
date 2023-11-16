<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-11 15:24:11
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-16 14:18:42
 * @FilePath: /hello-vue3/src/components/5-1-4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
    <h1>5.1.4 currency 过滤器</h1>
    <p>currency 过滤器用于把数字转换为货币符号，默认货币符号上$</p>
    <input type="number" v-model.number="val">
    <p>转换为货币：{{ currency(val, flag, len) }}</p>
    <p>其中 flag 为货币符号，len 为小数位数</p>
    <span>货币符号: </span>
    <input type="test" v-model="flag">
    <span style="padding-left: 16px;">小数位数: </span>
    <input type="number" v-model.number="len">
    <p>currency 过滤器的实现如下</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const val = ref('')
const flag = ref('$')
const len = ref(2)

const code1 = `// currency 过滤器
function currency(value, flag = '$', len = 2) {
    if (!value) return ''
    let num = \`\${value}\`.split('.')
    let numArr = num[0].split('').reverse()
    for (let i = 0; i < numArr.length; i++) {
        if ((i + 1) % 4 == 0) {
            numArr.splice(i, 0, ',')
        }
    }
    numArr.reverse()
    return \`\${flag}\${numArr.join('')}\${(len > 0) ? '.' : ''}\${num[1] ? num[1].slice(0, len).padEnd(len, '0') : ''.padEnd(len, '0')}\`
}`
// currency 过滤器
function currency(value, flag = '$', len = 2) {
    if (!value) return ''
    let num = `${value}`.split('.')
    let numArr = num[0].split('').reverse()
    for (let i = 0; i < numArr.length; i++) {
        if ((i + 1) % 4 == 0) {
            numArr.splice(i, 0, ',')
        }
    }
    numArr.reverse()
    return `${flag}${numArr.join('')}${(len > 0) ? '.' : ''}${num[1] ? num[1].slice(0, len).padEnd(len, '0') : ''.padEnd(len, '0')}`
}
</script>