<template>
    <h1>7.4.1 动态组件的基本用法</h1>
    <p>Vue 支持动态组件，可以多个组件使用同一挂载点，根据条件动态的切换不同的组件。通过使用标签 &lt;component&gt; 绑定到 is 属性的值来判断挂载哪个组件。动态组件的基础用法如下代码所示：</p>
    <n-code language="html" :code="code1"></n-code>
    <br>
    <n-code language="js" :code="code2"></n-code>
    <el-card>
        <el-select v-model="selected">
            <el-option v-for="option in options" :key="option.value" :="option"></el-option>
        </el-select>
        <el-divider></el-divider>
        <component :is="selected"></component>
    </el-card>
    <p>或者，也可以利用 input 组件动态生成一个组件</p>
    <el-input v-model="val"></el-input>
    <el-button @click="update">生成</el-button>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
    inheritAttrs: false
})
const val = ref('')
function update(){
    selected.value = val.value
}
const selected = ref('')

const options = [
    { label: 'Button 组件', value: 'el-button' },
    { label: 'Input 组件', value: 'el-input' },
    { label: 'Select 组件', value: 'el-select' },
]

const code1 = `
<el-card>
    <el-select v-model="selected">
        <el-option v-for="option in options" :key="option.value" :="option"></el-option>
    </el-select>
    <el-divider></el-divider>
    <component :is="selected"></component>
</el-card>`
const code2 = `<script setup>
import { ref } from 'vue';

const selected = ref('')

const options = [
    { label: 'Button 组件', value: 'el-button' },
    { label: 'Input 组件', value: 'el-input' },
    { label: 'Select 组件', value: 'el-select' },
]

<\/script>`
</script>