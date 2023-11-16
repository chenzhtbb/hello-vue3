<template>
    <h1>7.1.1 全局注册</h1>
    <p>全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。</p>
    <p>全局注册的组件还可以用在 Vue.component 中。</p>
    <p>全局注册的组件名可以使用 kebab-case、camelCase、PascalCase 或者 <strong>使用 <code>defineOptions</code> 定义的组件名</strong>。</p>
    <p>现在，我们通过 npm 来安装 element-plus 组件库</p>
    <n-text code>npm install element-plus --save</n-text>
    <p>执行完上述指令后，在 main.js 文件中进行全局注册</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>在组件(所有 *.vue 文件都是一个Vue的组件 )中使用 element-plus 组件</p>
    <h2>element-plus 使用示例</h2>
    <h3>Button 组件</h3>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <h3>表单 组件</h3>
    <el-form :model="form" label-width="120px" style="width: 400px">
        <el-form-item label="Activity name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
            <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
defineOptions({
    inheritAttrs: false
})

const code1 = `import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')`

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const onSubmit = () => {
    console.log('submit!')
}
</script>