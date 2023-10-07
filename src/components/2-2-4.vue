<template>
  <h1>2.2.4 数据</h1>
  <p>Vue 3 中所有的变量都应该使用下述的三个函数来创建</p>
  <h2>ref 函数</h2>
  <p>ref 函数接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 <n-text code>.value</n-text>。</p>
  <n-code language="js" :code="`// ref 函数可以接受任意类型的数据，JS 是弱类型语言，因此定义变量时不需要指定类型
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1`" />
  <h2>reactive 函数</h2>
  <p>reactive 函数返回一个对象的响应式代理。</p>
  <n-code language="js" :code="`// 在 JS 中 {} 表示定义了一个对象（类），采用 property:value 的形式定义对象的成员
const obj = reactive({ count: 0 })
obj.count++`" />
  <n-blockquote>可以使用 ref 函数对其进行的解包</n-blockquote>
  <n-code language="js" :code="`const count = ref(1)
/* 
这是定义对象的一个简化形式，当 property 的 value 是一个变量时，只需要写变量名即可。
JS 会自动翻译 property 为变量名，value 为变量值
*/
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 会更新 obj.count
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 也会更新 count ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3`" />
  <h2>toRefs 函数</h2>
  <p>toRefs 函数将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。</p>
  <n-code language="js" :code="`const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型：{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// 这个 ref 和源属性已经“链接上了”
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3`" />
</template>

<script setup></script>