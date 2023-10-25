<template>
    <h1>7.2.1 props 参数传递</h1>
    <p>Props 是组件中非常重要的一个选项，用于父子组件间通信。</p>
    <p>如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到 props。</p>
    <p>Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给博客文章组件一个标题，我们必须在组件的 props 列表上声明它。</p>
    <p>这里要用到 <strong>defineProps</strong> 宏：</p>
    <n-code language="html" :code="code1"></n-code>
    <br>
    <n-code language="js" :code="code2"></n-code>
    <p>在上述代码中，我们使用 <strong>defineProps</strong> 宏来声明 props，这样就可以在组件中使用 props 了。</p>
    <p><strong>defineProps</strong> 是一个仅 <strong>&lt;script setup&gt;</strong> 中可用的编译宏命令，并不需要显式地导入。声明的 props
        会自动暴露给模板。<strong>defineProps</strong> 会返回一个对象，其中包含了可以传递给组件的所有 props：
    </p>

    <n-code language="js" :code="code3"></n-code>
    <p>Props 参数可以有两种声明方式：字符串数组和对象，例如：</p>
    <n-code language="js" :code="code4"></n-code>
    <p>一个组件可以有任意多的 props，如果使用字符串数组的形式声明，则所有 prop 都接受任意类型的值。</p>
    <p>如果使用对象的形式声明，并指定 type 的类型，则可以对传入参数的类型进行校验。type 的类型可以是：String, Number, Boolean, Object, Array, Function。</p>
    <h2>使用示例</h2>
    <p>代码中出现的第三方组件请自行引入</p>
    <p>在 components/BlogPost.vue 中编写如下代码：</p>
    <n-code language="html" :code="code5"></n-code>
    <n-code language="js" :code="code6"></n-code>
    <p>在 App.vue 中编写如下代码：</p>
    <n-code language="html" :code="code7"></n-code>
    <n-code language="js" :code="code8"></n-code>
    <p>编写完毕后即可查看效果，请自行更改传入参数的值和类型以加强学习。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const code1 = `<template>
    <h4>{{ title }}</h4>
</template>
`
const code2 = `
<script setup>
defineProps(['title'])
<\/script>`

const code3 = `
const props = defineProps(['title'])
console.log(props.title)`

const code4 = `
// 字符串数组
props: ['title', 'likes', 'content']

// 对象
props = {
    title: [String, Number],
    likes: {type: Number, default: 0},
    content: {type: String, default: '', required: true}
}
`

const code5 = `<template>
    <el-page-header>
        <template #content>
            <h3>{{ title }}</h3>
        </template>
    </el-page-header>
    <p style="float: right;">likes: {{ props.likes }}</p>
    <div v-html="content"></div>
</template>`

const code6 = `<script setup>
const props = defineProps({
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    content: { type: String, required: true }

})
<\/script>`

const code7 = `<template>
  <template v-for="post in posts">
    <blog-post :title="post.title" :likes="post.likes" :content="post.content"></blog-post>
    <el-divider />
  </template>
</template>`

const code8 = `<script setup>
import { ref } from 'vue';
import BlogPost from './components/BlogPost.vue'

const posts = ref([
{
    title: 'Hello World!',
    likes: 2,
    content: \`<h4>Hi there :</h4>
<p>This is Hello World page. Welcome!</p>\`
  },  {
    title: 'Hello Vue3!',
    likes: 87,
    content: \`<h4>Hi there :</h4>
<p>This is Hello Vue3 page. Welcome!</p>\`
  },  {
    title: 'Hello AI',
    likes: 99,
    content: \`<h4>Hi there :</h4>
<p>This is Hello AI page. Welcome!</p>\`
  },
])
<\/script>`
</script>