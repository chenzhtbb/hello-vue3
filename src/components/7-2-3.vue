<template>
    <h1>7.2.3 v-model 参数</h1>
    <p>在 Vue 中，v-model 是一个语法糖，它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。</p>
    <p>默认情况下，v-model 通过 v-bind 绑定 value 属性，通过 v-on 绑定 input 事件。</p>
    <p>首先让我们回忆一下 v-model 在原生元素上的用法：</p>
    <n-code language="html" :code="code1"></n-code>
    <p>在代码背后，模板编译器会对 v-model 进行更冗长的等价展开。因此上面的代码其实等价于下面这段：</p>
    <n-code language="html" :code="code2"></n-code>
    <p>实际上，在任意组件中我们都可以自定义 v-model 指令绑定的属性和事件。而当使用在一个组件上时，v-model 会被展开为如下的形式：</p>
    <n-code language="js" :code="code3"></n-code>
    <p>要让这个例子实际工作起来，&lt;CustomInput&gt; 组件内部需要做两件事：</p>
    <ol>
        <li>将内部原生 &lt;input&gt; 元素的 value attribute 绑定到 modelValue prop</li>
        <li>当原生的 input 事件触发时，触发一个携带了新值的 update:modelValue 自定义事件</li>
    </ol>
    <p>这里是相应的代码：</p>
    <n-code language="html" :code="code5"></n-code>
    <n-code language="js" :code="code4"></n-code>
    <p>进阶是写法是使用计算属性：</p>
    <n-code language="html" :code="code6"></n-code>
    <n-code language="js" :code="code7"></n-code>
    <p>再进一步，你可以封装一个高阶函数在自定义组件中实现 v-model。由于高阶函数已经超纲，感兴趣的同学可以自行扩展。</p>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const code1 = `<input v-model="searchText" />`

const code2 = `<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>`

const code3 = `<CustomInput
  :model-value="searchText"
  @update:model-value="newValue => searchText = newValue"
/>`

const code4 = `
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
<\/script>`

const code5 = `
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>`

const code6 = `<template>
  <input v-model="value" />
</template>`

const code7 = `<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
<\/script>`
</script>