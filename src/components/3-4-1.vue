<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-10-07 09:58:28
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-11 22:48:34
 * @FilePath: /hello-vue3/src/components/3-4-1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>3.4.1 v-model 指令</h1>
  <p><n-text type="primary">v-bind</n-text> 指令绑定的属性是单向的，变量单向传递到属性中，例如下面的例子</p>
  <n-code word-wrap language="html" :code="`<p>Message is: {{ msg }}</p>
<input :value='msg'>`"></n-code>
  <p>Message is: {{ msg }}</p>
  <input :value="msg">
  <p>为了让修改界面表单能够同步到变量中，我们需要在表单输入元素或组件上创建双向绑定。仅限：<n-text code>&lt;input&gt;</n-text>、<n-text code>&lt;select&gt;</n-text>、<n-text
      code>&lt;textarea&gt;</n-text>、<n-text code>components（自定义组件，实际上可以表示任意元素或组件）</n-text></p>
  <p> <n-text type="primary">v-model</n-text> 指令帮我们将表单输入框的内容同步给 JavaScript 中相应的变量。</p>
  <p>例如有下述<n-text code>&lt;input&gt;</n-text>标签</p>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code word-wrap language="html" :code="code1"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code word-wrap language="js" :code="`<script setup>
import { ref } from 'vue';

const message = ref('')
</script>`"></n-code>
    </n-tab-pane>
  </n-tabs>
  <div>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </div>
  <p>或是<n-text code>&lt;textarea&gt;</n-text>标签</p>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code word-wrap language="html" :code="code2"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code word-wrap language="js" :code="`<script setup>
import { ref } from 'vue';

const mulMessage = ref('')
</script>`"></n-code>
    </n-tab-pane>
  </n-tabs>
  <div>
    <p :style="style1">Multiline Message is: {{ mulMessage }}</p>
    <textarea v-model="mulMessage" placeholder="edit me"></textarea>
    <br>
    <button @click="switchStyle = !switchStyle">换行效果</button>
  </div>
  <p>或是<n-text code>&lt;select&gt;</n-text>标签</p>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code word-wrap language="html" :code="code3"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code word-wrap language="js" :code="`<script setup>
import { ref } from 'vue';

const selected = ref('')
</script>`"></n-code>
    </n-tab-pane>
  </n-tabs>
  <div>
    <p>Selected: {{ selected }}</p>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
defineOptions({
    inheritAttrs: false
})
const msg = ref('我有默认值')
const message = ref('')
const code1 = `<p>Message is: {{ message }}</p>
<input v-model='message' placeholder='edit me' />`
const mulMessage = ref('')
const code2 = `<p>Multiline Message is: {{ mulMessage }}</p>
<textarea v-model="mulMessage" placeholder="edit me"></textarea>`
const switchStyle = ref(false)
const style1 = computed(() => {
  return {
    'white-space': switchStyle.value ? 'normal' : 'pre-line'
  }
})
const selected = ref('')
const code3 = `<p>Selected: {{ selected }}</p>
<select v-model="selected">
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>`
</script>