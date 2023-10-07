<template>
  <n-config-provider :locale="zhCN" :hljs="hljs">
    <n-global-style />
    <div class="main box">
      <n-grid x-gap="12" :cols="2">
        <n-grid-item>
          <n-cascader v-model:value="selectDemo" check-strategy="child" :options="options" placeholder="请选择要查看的演示项目" />
        </n-grid-item>
        <n-grid-item>
          <!-- <n-button type="info" @click="showCodePanel">代码面板</n-button> -->
        </n-grid-item>
      </n-grid>
    </div>
    <n-divider title-placement="center">{{ selectDemoText }}</n-divider>
    <div class="main footer">
      <component :is="autoImportComponent" v-model="selectDemo" />
    </div>
  </n-config-provider>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import {
  NConfigProvider,
  zhCN,
  NGlobalStyle,
  NCascader,
} from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('html', html)

const selectDemo = ref(null)
const selectDemoText = computed(() => {
  return selectDemo.value ? `演示项目 ${(selectDemo.value).replace(/-/g, '.')}` : null
})
const autoImportComponent = computed(() => {
  return !selectDemo.value ? null : defineAsyncComponent(() => import(`@/components/${selectDemo.value}.vue`))
})

const showCodePanel = () => {

}

const options = [
  {
    value: '0',
    label: '常见错误',
    children: [
      {
        value: 'err-1',
        label: '项目起步'
      }
    ]
  },
  {
    value: '1',
    label: 'JavaScript 基础知识',
    children: [
      {
        value: 'js-1',
        label: '1 输出'
      },
      {
        value: 'js-2',
        label: '2 语法'
      },
      {
        value: 'js-3',
        label: '3 变量'
      },
      {
        value: 'js-4',
        label: '4 对象'
      },
      {
        value: 'js-5',
        label: '5 数组'
      },
      {
        value: 'js-6',
        label: '6 其他'
      },
    ]
  }, {
    value: '2',
    label: '第2章',
    children: [
      {
        value: '2-2',
        label: '2.2 Vue 实例和数据绑定',
        children: [
          {
            value: '2-2-1',
            label: '2.2.1 构建 Vue 3.0 项目'
          }, {
            value: '2-2-2',
            label: '2.2.2 项目实例：Hello Vue3'
          }, {
            value: '2-2-3',
            label: '2.2.3 setup 函数与生命周期'
          }, {
            value: '2-2-4',
            label: '2.2.4 数据'
          }, {
            value: '2-2-5',
            label: '2.2.5 数据实例：显示响应式对象'
          }, {
            value: '2-2-6',
            label: '2.2.6 方法'
          }, {
            value: '2-2-7',
            label: '2.2.7 方法实例：修改响应式对象的值'
          },
        ]
      },
    ]
  }, {
    value: '3',
    label: '第3章',
    children: [
      {
        value: '3-1',
        label: '3.1 插值绑定',
        children: [
          {
            value: '3-1-1',
            label: '3.1.1 文本插值与表达式'
          }, {
            value: '3-1-2',
            label: '3.1.2 过滤器'
          }, {
            value: '3-1-3',
            label: '3.1.3 HTML 插值'
          }
        ]
      },
      {
        value: '3-2',
        label: '3.2 计算属性',
        children: [
          {
            value: '3-2-1',
            label: '3.2.1 计算属性的概念'
          },
          {
            value: '3-2-2',
            label: '3.2.2 计算属性'
          },
          {
            value: '3-2-3',
            label: '3.2.3 侦听属性'
          },
        ]
      },
      {
        value: '3-3',
        label: '3.3 v-bind 属性绑定',
        children: [
          {
            value: '3-3-1',
            label: '3.3.1 v-bind 指令'
          },
          {
            value: '3-3-2',
            label: '3.3.2 绑定 class、style 与 prop'
          },
        ]
      },
      {
        value: '3-4',
        label: '3.4 v-model 双向绑定',
        children: [
          {
            value: '3-4-1',
            label: '3.4.1 v-model 指令'
          },
          {
            value: '3-4-2',
            label: '3.4.2 v-model 与修饰符'
          },
          {
            value: '3-4-3',
            label: '3.4.3 双向绑定实例：制作问卷'
          },
        ]
      },
      {
        value: '3-5',
        label: '3.5 v-if/v-show 条件渲染',
        children: [
          {
            value: '3-5-1',
            label: '3.5.1 v-if、v-else-if、v-else 指令'
          },
          {
            value: '3-5-2',
            label: '3.5.2 v-show 指令'
          },
          {
            value: '3-5-3',
            label: '3.5.3 v-if 对比 v-show 指令'
          },
        ]
      },
      {
        value: '3-6',
        label: '3.6 v-for 列表渲染',
        children: [
          {
            value: '3-6-1',
            label: '3.6.1 v-for 指令'
          },
          {
            value: '3-6-2',
            label: '3.6.2 在 v-for 里使用对象'
          },
          {
            value: '3-6-3',
            label: '3.6.3 列表的更新'
          },
          {
            value: '3-6-4',
            label: '3.6.4 列表渲染的 key'
          },
          {
            value: '3-6-5',
            label: '3.6.5 v-for 与 v-if 指令共用'
          },
        ]
      },
      {
        value: '3-7',
        label: '3.7 v-on 事件绑定',
        children: [
          {
            value: '3-7-1',
            label: '3.7.1 v-on 指令'
          },
          {
            value: '3-7-2',
            label: '3.7.2 事件修饰符'
          }
        ]
      },
    ]
  }, {
    value: '4',
    label: '第4章',
    children: []
  }, {
    value: '5',
    label: '第5章',
    children: []
  }, {
    value: '7',
    label: '第7章',
    children: []
  }, {
    value: '8',
    label: '第8章',
    children: []
  }, {
    value: '9',
    label: '第9章',
    children: []
  }, {
    value: '10',
    label: '第10章',
    children: []
  },
]
</script>

<style scoped>
.main {
  padding-left: 100px;
}

.box {
  padding-top: 50px;
}

.footer {
  padding-bottom: 50px;
}
</style>

<style>
.n-code {
  font-size: 18px !important;
}

img {
  border: 1px solid purple;
  max-height: 20vh;
}
</style>