<!--
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-11 11:14:35
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-13 15:38:30
 * @FilePath: /hello-vue3/src/components/5-1-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>5.1.1 字母过滤器</h1>
    <p>字母过滤器分为 capitalize 过滤器、uppercase 过滤器以及 lowercase 过滤器</p>
    <h2>capitalize 过滤器</h2>
    <p>假设有以下 input 标签使用 v-model 绑定 str1 对象</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <input type="text" v-model="str1">
    <p>str1: {{ str1 }}</p>
    <p>上方的 v-model 指令等价于下方的 v-bind 和 v-on 指令结合</p>
    <n-code word-wrap language="html" :code="code2"></n-code>
    <input type="text" :value="str2" @input="$e => str2 = $e.target.value">
    <p>str2: {{ str2 }}</p>
    <p>为了实现 capitalize 过滤器，应采用修改 v-on 绑定实现</p>
    <n-code word-wrap language="html" :code="code3"></n-code>
    <input type="text" :value="str3" @input="$e => str3 = capitalize($e.target.value)">
    <p>str3: {{ str3 }}</p>
    <p>str3 被赋值前首先会经过一个函数进行处理，这个函数 capitalize 实现了过滤器功能，将首字母过滤为大写字母。</p>
    <p>函数 capitalize 的实现如下：</p>
    <n-code word-wrap language="js" :code="code4"></n-code>

    <h2>uppercase 过滤器</h2>
    <p>为了实现 uppercase 过滤器，应采用修改 v-on 绑定实现</p>
    <n-code word-wrap language="html" :code="code5"></n-code>
    <input type="text" :value="str4" @input="$e => str4 = uppercase($e.target.value)">
    <p>str4: {{ str4 }}</p>
    <p>str4 被赋值前首先会经过一个函数进行处理，这个函数 uppercase 实现了过滤器功能，将首字母过滤为大写字母。</p>
    <p>函数 uppercase 的实现如下：</p>
    <n-code word-wrap language="js" :code="code6"></n-code>
    
    <h2>lowercase 过滤器</h2>
    <p>为了实现 lowercase 过滤器，应采用修改 v-on 绑定实现</p>
    <n-code word-wrap language="html" :code="code7"></n-code>
    <input type="text" :value="str5" @input="$e => str5 = lowercase($e.target.value)">
    <p>str5: {{ str5 }}</p>
    <p>str5 被赋值前首先会经过一个函数进行处理，这个函数 lowercase 实现了过滤器功能，将首字母过滤为大写字母。</p>
    <p>函数 lowercase 的实现如下：</p>
    <n-code word-wrap language="js" :code="code8"></n-code>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
    inheritAttrs: false
})

const str1 = ref('')
const str2 = ref('')
const str3 = ref('')
const str4 = ref('')
const str5 = ref('')

const code1 = `<input type="text" v-model="str1">`
const code2 = `<input type="text" :value="str2" @input="$e => str2 = $e.target.value">`
const code3 = `<input type="text" :value="str3" @input="$e => str3 = capitalize($e.target.value)">`
const code4 = `// 首字母大写过滤器
function capitalize(value) {
    if (!value) return ''
    // value 转换为字符串
    value = value.toString()
    // charAt 表示取出第i号位置的字符
    // toUpperCase 表示将字符转换为大写
    // slice 表示从第i号位置开始，返回一个新的数组对象
    // 由于这个对象是字符串，实际上是从第i号位置开始，放回一个新的字符串
    return value.charAt(0).toUpperCase() + value.slice(1)
}`
const code5 = `<input type="text" :value="str4" @input="$e => str4 = uppercase($e.target.value)">`
const code6 = `// 大写字母过滤器
function uppercase(value){
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase() 
}
`
const code7 = `<input type="text" :value="str5" @input="$e => str5 = lowercase($e.target.value)">`

const code8 = `// 小写字母过滤器
function lowercase(value){
    if (!value) return ''
    value = value.toString()
    return value.toLowerCase() 
}`
// 首字母大写过滤器
function capitalize(value) {
    if (!value) return ''
    // value 转换为字符串
    value = value.toString()
    // charAt 表示取出第i号位置的字符
    // toUpperCase 表示将字符转换为大写
    // slice 表示从第i号位置开始，返回一个新的数组对象
    // 由于这个对象是字符串，实际上是从第i号位置开始，放回一个新的字符串
    return value.charAt(0).toUpperCase() + value.slice(1)
}
// 大写字母过滤器
function uppercase(value){
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase() 
}
// 小写字母过滤器
function lowercase(value){
    if (!value) return ''
    value = value.toString()
    return value.toLowerCase() 
}
</script>