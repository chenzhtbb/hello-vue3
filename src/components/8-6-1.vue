<template>
    <h1>8.6.1 重定向</h1>
    <p>重定向也是通过 routes 配置来完成，下面例子是从 /home 重定向到 /：</p>
    <n-code word-wrap language="js" :code="code1"></n-code>
    <p>重定向的目标也可以是一个命名的路由：</p>
    <n-code word-wrap language="js" :code="code2"></n-code>
    <p>甚至是一个方法，动态返回重定向目标：</p>
    <n-code word-wrap language="js" :code="code3"></n-code>
    <p>在写 redirect 的时候，可以省略 component 配置，因为它从来没有被直接访问过，所以没有组件要渲染。唯一的例外是嵌套路由：如果一个路由记录有 children 和 redirect 属性，它也应该有 component 属性。</p>
    <h2>相对重定向</h2>
    <p>也可以重定向到相对位置：</p>
    <n-code word-wrap language="js" :code="code4"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `const routes = [{ path: '/home', redirect: '/' }]`
const code2 = `const routes = [{ path: '/home', redirect: { name: 'homepage' } }]`
const code3 = `const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return { path: '/search', query: { q: to.params.searchText } }
    },
  },
  {
    path: '/search',
    // ...
  },
]`
const code4 = `const routes = [
  {
    // 将总是把/users/123/posts重定向到/users/123/profile。
    path: '/users/:id/posts',
    redirect: to => {
      // 该函数接收目标路由作为参数
      // 相对位置不以\`/\`开头
      // 或 { path: 'profile'}
      return 'profile'
    },
  },
]`
</script>