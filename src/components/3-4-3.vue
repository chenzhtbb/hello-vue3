<template>
  <h1>3.4.3 双向绑定实例：制作问卷</h1>
  <p>使用 <n-text type="primary">v-model</n-text> 指令进行双向绑定，制作一份实时显示各个表单控件元素中所填数据的问卷。</p>
  <n-tabs>
    <n-tab-pane name="fun1" tab="template">
      <n-code show-line-numbers language="html" :code="code1"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun2" tab="script">
      <n-code show-line-numbers language="js" :code="code2"></n-code>
    </n-tab-pane>
    <n-tab-pane name="fun3" tab="演示效果">
      <div>
        <input type="text" v-model="name" placeholder="请输入姓名">
      </div>
      <br>
      <div>
        <span>选择性别: </span>
        <label for="M">男</label>
        <input type="radio" id="M" value="男" v-model="sex">
        <label for="F">女</label>
        <input type="radio" id="F" value="女" v-model="sex">
      </div>
      <br>
      <div>
        <span>选择语言: </span>
        <label for="HTML">HTML</label>
        <input type="checkbox" id="HTML" value="HTML" v-model="lang">
        <label for="CSS">CSS</label>
        <input type="checkbox" id="CSS" value="CSS" v-model="lang">
        <label for="JavaScript">JavaScript</label>
        <input type="checkbox" id="JavaScript" value="JavaScript" v-model="lang">
      </div>
      <br>
      <div>
        <span>选择框架: </span>
        <select v-model="selected">
          <option value disabled selected>请选择框架</option>
          <option>Vue 3</option>
          <option>Vue 2</option>
        </select>
      </div>
      <div>
        <p>备注: </p>
        <textarea v-model="remark" placeholder="请输入备注"></textarea>
      </div>
      <div>
        <p>表单问卷</p>
        <p>姓名：{{ name }}</p>
        <p>性别：{{ sex }}</p>
        <p>语言：{{ lang }}</p>
        <p>框架：{{ selected }}</p>
        <p>备注：</p>
        <p style="white-space: pre-line;">{{ remark }}</p>
      </div>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('')
const sex = ref('')
const lang = ref([])
const selected = ref('')
const remark = ref('')

const code1 = `<template>
  <div>
    <input type="text" v-model="name" placeholder="请输入姓名">
  </div>
  <br>
  <div>
    <span>选择性别: </span>
    <label for="M">男</label>
    <input type="radio" id="M" value="男" v-model="sex">
    <label for="F">女</label>
    <input type="radio" id="F" value="女" v-model="sex">
  </div>
  <br>
  <div>
    <span>选择语言: </span>
    <label for="HTML">HTML</label>
    <input type="checkbox" id="HTML" value="HTML" v-model="lang">
    <label for="CSS">CSS</label>
    <input type="checkbox" id="CSS" value="CSS" v-model="lang">
    <label for="JavaScript">JavaScript</label>
    <input type="checkbox" id="JavaScript" value="JavaScript" v-model="lang">
  </div>
  <br>
  <div>
    <span>选择框架: </span>
    <select v-model="selected">
      <option value disabled selected>请选择框架</option>
      <option>Vue 3</option>
      <option>Vue 2</option>
    </select>
  </div>
  <div>
    <p>备注: </p>
    <textarea v-model="remark" placeholder="请输入备注"></textarea>
  </div>
  <div>
    <p>表单问卷</p>
    <p>姓名：{{ name }}</p>
    <p>性别：{{ sex }}</p>
    <p>语言：{{ lang }}</p>
    <p>框架：{{ selected }}</p>
    <p>备注：</p>
    <p style="white-space: pre-line;">{{ remark }}</p>
  </div>
</template>`

const code2 = `<script setup>
import { ref } from 'vue';

const name = ref('')
const sex = ref('')
const lang = ref([])
const selected = ref('')
const remark = ref('')

<\/script>
`
</script>