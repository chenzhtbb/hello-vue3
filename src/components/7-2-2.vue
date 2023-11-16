<template>
    <h1>7.2.2 组件通信</h1>
    <p>在 Vue 中，父子组件的关系可以总结为 props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。</p>
    <p>Props 的数据流是单向的，父组件通过 props 向子组件传递数据，子组件不能直接修改 props 数据以达到父子组件通信的目的</p>
    <p>子组件通过事件与父组件通信，事件可以是标准事件也可以是自定义事件。但是都需要在 <strong>defineEmits</strong> 中声明。</p>
    <p>子组件可以通过 $emit 方法向直接父组件触发事件以传递数据。</p>
    <p>或是利用 <strong>defineEmits</strong> 来触发事件</p>
    <p>以 7.2.1 节中<strong>使用示例</strong>代码为运行基础：</p>
    <p>在 components/BlogPost.vue 中编写代码</p>
    <n-code word-wrap language="html" :code="code1"></n-code>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>在 App.vue 中编写代码</p>
    <n-code word-wrap language="html" :code="code3"></n-code>
    <n-code word-wrap language="js" :code="code4"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<template>
    <el-page-header>
        <template #content>
            <h3>{{ title }}</h3>
        </template>
    </el-page-header>
    <p style="float: right;">likes: {{ props.likes }}</p>
    <el-button @click="onMinus" type="primary" :icon="Minus" circle />
    <span>&nbsp;&nbsp;字体&nbsp;&nbsp;</span>
    <el-button @click="$emit('size-plus')" type="primary" :icon="Plus" circle />
    <div :style="{ 'font-size': size + 'px' }" v-html="content"></div>
</template>`

const code2 = `<script setup>
import {
    Minus,
    Plus
} from '@element-plus/icons-vue'
const props = defineProps({
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    size: { type: Number, default: 16 },
    content: { type: String, required: true }
})
const emits = defineEmits(['size-plus', 'size-minus'])

function onMinus() {
    emits('size-minus')
}
<\/script>`

const code3 = `<template>
  <template v-for="post in posts">
    <blog-post @size-plus="post.size++" @size-minus="minusHandler(post)" :title="post.title" :likes="post.likes"
      :content="post.content" :size="post.size"></blog-post>
    <el-divider />
  </template>
</template>`

const code4 = `<script setup>
import { ref } from 'vue';
import BlogPost from './components/BlogPost.vue'

const posts = ref([
  {
    title: 'Hello World!',
    likes: 2,
    size: 10,
    content: \`<h4>Hi there :</h4>
<p>This is Hello World page. Welcome!</p>\`
  }, {
    title: 'Hello Vue3!',
    likes: 87,
    size: 10,
    content: \`<h4>Hi there :</h4>
<p>This is Hello Vue3 page. Welcome!</p>\`
  }, {
    title: 'Hello AI',
    likes: 99,
    size: 10,
    content: \`<h4>Hi there :</h4>
<p>This is Hello AI page. Welcome!</p>\`
  },
])

function minusHandler(post) {
  post.size--
}
<\/script>`
</script>