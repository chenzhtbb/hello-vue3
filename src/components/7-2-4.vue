<template>
    <h1>7.2.4 Vue 3.0 中的 v-model 修饰符</h1>
    <p>在学习输入绑定时，我们知道了 v-model 有一些内置的修饰符，例如 .trim，.number 和 .lazy。在某些场景下，你可能想要一个自定义组件的 v-model 支持自定义的修饰符。</p>
    <p>我们来创建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值第一个字母转为大写：</p>
    <n-code language="js" :code="code1"></n-code>
    <p>组件的 v-model 上所添加的修饰符，可以通过 modelModifiers prop 在组件内访问到。在下面的组件中，我们声明了 modelModifiers 这个 prop，它的默认值是一个空对象：</p>
    <n-code language="html" :code="code2"></n-code>
    <n-code language="js" :code="code3"></n-code>
    <p>注意这里组件的 modelModifiers prop 包含了 capitalize 且其值为 true，因为它在模板中的 v-model 绑定 v-model.capitalize="myText" 上被使用了。</p>
    <p>有了这个 prop，我们就可以检查 modelModifiers 对象的键，并编写一个处理函数来改变抛出的值。在下面的代码里，我们就是在每次 &lt;input /&gt; 元素触发 input 事件时将值的首字母大写：</p>
    <n-code language="js" :code="code4"></n-code>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<MyComponent v-model.capitalize="myText" />`

const code2 = `<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>`

const code3 = `
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

defineEmits(['update:modelValue'])

console.log(props.modelModifiers) // { capitalize: true }
<\/script>`

const code4 = `
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
<\/script>`
</script>