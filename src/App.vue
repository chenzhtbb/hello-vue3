<template>
  <div>
    <n-config-provider :locale="zhCN" :hljs="hljs">
      <n-global-style />
      <div class="main box">
        <n-grid x-gap="12" :cols="2">
          <n-grid-item>
            <n-cascader v-model:value="selectDemo" check-strategy="child" :options="options" placeholder="请选择要查看的演示项目" />
          </n-grid-item>
        </n-grid>
      </div>
      <n-divider title-placement="center">{{ selectDemoText }}</n-divider>
      <div class="main footer">
        <component :is="autoImportComponent" v-model="selectDemo" />
      </div>
    </n-config-provider>
  </div>
</template>

<script setup>
import { zhCN } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import { onMounted, watch, ref, computed, defineAsyncComponent } from 'vue';
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('html', html)

const __ROUTER_STORE__ = '__ROUTER_STORE__'

const selectDemo = ref(null)

const selectDemoText = computed(() => {
  return selectDemo.value ? `演示项目 ${(selectDemo.value).replace(/-/g, '.')}` : null
})

const autoImportComponent = computed(() => {
  return !selectDemo.value ? null : defineAsyncComponent(() => import(`@/components/${selectDemo.value}.vue`))
})

watch(selectDemo, (newVal) => {
  localStorage.setItem(__ROUTER_STORE__, newVal)
})

onMounted(() => {
  const select = localStorage.getItem(__ROUTER_STORE__)
  if (select) {
    selectDemo.value = select
  }
})

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
            label: '3.5.3 v-if 对比 v-show'
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
  },
  //{
  // value: '4',
  // label: '第4章',
  // children: [
  //   {
  //     value: '4-1',
  //     label: '4.1 绑定 HTML class',
  //     children: [
  //       {
  //         value: '4-1-1',
  //         label: '4.1.1 对象语法'
  //       },
  //       {
  //         value: '4-1-2',
  //         label: '4.1.2 数组语法'
  //       }
  //     ]
  //   }, {
  //     value: '4-2',
  //     label: '4.2 绑定内联样式',
  //     children: [
  //       {
  //         value: '4-2-1',
  //         label: '4.2.1 对象语法'
  //       },
  //       {
  //         value: '4-2-2',
  //         label: '4.2.2 数组语法'
  //       }
  //     ]
  //   },
  // ]
  // }, 
  {
    value: '5',
    label: '第5章',
    children: [
      {
        value: '5-1',
        label: '5.1 过滤器',
        children: [
          {
            value: '5-1-1',
            label: '5.1.1 字母过滤器'
          },
          {
            value: '5-1-2',
            label: '5.1.2 json 过滤器'
          },
          {
            value: '5-1-3',
            label: '5.1.3 限制过滤器'
          },
          {
            value: '5-1-4',
            label: '5.1.4 currency 过滤器'
          },
          {
            value: '5-1-5',
            label: '5.1.5 debounce 过滤器'
          }
        ]
      },
    ]
  }, {
    value: '7',
    label: '第7章',
    children: [
      {
        value: '7-1',
        label: '7.1 组件的注册',
        children: [
          {
            value: '7-1-1',
            label: '7.1.1 全局注册'
          }, {
            value: '7-1-1',
            label: '7.1.1 局部注册'
          },
        ]
      }, {
        value: '7-2',
        label: '7.2 组件的数据传递',
        children: [
          {
            value: '7-2-1',
            label: '7.2.1 props 参数'
          }, {
            value: '7-2-2',
            label: '7.2.2 组件通信'
          }, {
            value: '7-2-3',
            label: '7.2.3 v-model 参数'
          }, {
            value: '7-2-4',
            label: '7.2.4 Vue 3.0 中的 v-model 修饰符'
          },
        ]
      }, {
        value: '7-3',
        label: '7.3 插槽内容分发',
        children: [
          {
            value: '7-3-1',
            label: '7.3.1 插槽的基本用法'
          }, {
            value: '7-3-2',
            label: '7.3.2 插槽的作用域'
          }, {
            value: '7-3-3',
            label: '7.3.3 插槽的后备内容'
          }, {
            value: '7-3-4',
            label: '7.3.4 具名插槽'
          }, {
            value: '7-3-5',
            label: '7.3.5 作用域插槽'
          },
        ]
      }, {
        value: '7-4',
        label: '7.4 动态组件',
        children: [
          {
            value: '7-4-1',
            label: '7.4.1 动态组件的基础用法'
          }, {
            value: '7-4-2',
            label: '7.4.2 <keep-alive>'
          },
        ]
      }, {
        value: '7-5',
        label: '7.5 组件案例：完善标签页组件',
      }
    ]
  }, {
    value: '8',
    label: '第8章',
    children: [
      {
        value: '8-1',
        label: '8.1 vue-router 的基本用法',
        children: [
          {
            value: '8-1-1',
            label: '8.1.1 vue-router 的安装'
          }, {
            value: '8-1-2',
            label: '8.1.2 vue-router 的基本使用'
          }, {
            value: '8-1-3',
            label: '8.1.3 跳转'
          },
        ]
      }, {
        value: '8-2',
        label: '8.2 动态路由匹配',
        children: [
          {
            value: '8-2-1',
            label: '8.2.1 带参数的动态路由匹配'
          }, {
            value: '8-2-2',
            label: '8.2.2 响应参数变化'
          }, {
            value: '8-2-3',
            label: '8.2.3 参数全匹配'
          },
        ]
      }, {
        value: '8-3',
        label: '8.3 路由匹配的语法',
        children: [
          {
            value: '8-3-1',
            label: '8.3.1 自定义正则表达式'
          }, {
            value: '8-3-2',
            label: '8.3.2 可选参数'
          }, {
            value: '8-3-3',
            label: '8.3.3 可重复参数'
          },
        ]
      }, {
        value: '8-4',
        label: '8.4 嵌套路由',
      }, {
        value: '8-5',
        label: '8.5 命名路由',
      }, {
        value: '8-6',
        label: '8.6 重定向和别名',
        children: [
          {
            value: '8-6-1',
            label: '8.6.1 重定向'
          }, {
            value: '8-6-2',
            label: '8.6.2 别名'
          },
        ]
      }, {
        value: '8-7',
        label: '8.7 向路由组件传递参数',
        children: [
          {
            value: '8-7-1',
            label: '8.7.1 向路由组件传递参数的基本语法'
          }, {
            value: '8-7-2',
            label: '8.7.2 传递参数的模式'
          },
        ]
      },
    ]
  }, {
    value: '9',
    label: '第9章',
    children: [
      {
        value: '9-1',
        label: '9.1 Pinia 简介',
        children: [
          {
            value: '9-1-1',
            label: '9.1.1 状态管理模式'
          }, {
            value: '9-1-2',
            label: '9.1.2 安装 Pinia'
          }, {
            value: '9-1-3',
            label: '9.1.3 Pinia 的基本使用'
          },
        ]
      }, {
        value: '9-2',
        label: '9.2 Pinia 中的状态',
        children: [
          {
            value: '9-2-1',
            label: '9.2.1 单一状态树'
          }, {
            value: '9-2-2',
            label: '9.2.2 将 Pinia 状态加入 Vue 组件'
          }, {
            value: '9-2-3',
            label: '9.2.3 mapState 的使用'
          }, {
            value: '9-2-4',
            label: '9.2.4 组件的本地状态'
          },
        ]
      }, {
        value: '9-3',
        label: '9.3 Pinia 中的 getter',
        children: [
          {
            value: '9-3-1',
            label: '9.3.1 仓库的 getter'
          }, {
            value: '9-3-2',
            label: '9.3.2 属性式访问'
          }, {
            value: '9-3-3',
            label: '9.3.3 方法式访问'
          }, {
            value: '9-3-4',
            label: '9.3.4 mapGetter 的使用'
          },
        ]
      }, {
        value: '9-4',
        label: '9.4 Pinia 中的 mutation',
        children: [
          {
            value: '9-4-1',
            label: '9.4.1 mutation 的有效负载'
          }, {
            value: '9-4-2',
            label: '9.4.2 通过对象提交'
          }, {
            value: '9-4-3',
            label: '9.4.3 mutation 的同步'
          },
        ]
      }, {
        value: '9-5',
        label: '9.5 Pinia 中的 action',
        children: [
          {
            value: '9-5-1',
            label: '9.5.1 action 的基本使用'
          }, {
            value: '9-5-2',
            label: '9.5.2 调度 action'
          }, {
            value: '9-5-3',
            label: '9.5.3 组成 action'
          },
        ]
      }, {
        value: '9-6',
        label: '9.6 Pinia 中的模块',
      },
    ]
  }, {
    value: '10',
    label: '第10章',
    children: [
      {
        value: '10-1',
        label: '10.1 项目目录介绍',
        children: [
          {
            value: '10-1-1',
            label: '10.1.1 dist 文件夹'
          }, {
            value: '10-1-2',
            label: '10.1.2 node_modules 文件夹'
          }, {
            value: '10-1-3',
            label: '10.1.3 src 文件夹'
          },
        ]
      }, {
        value: '10-2',
        label: '10.2 前端页面开发',
        children: [
          {
            value: '10-2-1',
            label: '10.2.1 Vue 文件'
          }, {
            value: '10-2-2',
            label: '10.2.2 导入 import'
          },
        ]
      }, {
        value: '10-3',
        label: '10.3 项目目录介绍',
        children: [
          {
            value: '10-3-1',
            label: '10.3.1 项目打包'
          }, {
            value: '10-3-2',
            label: '10.3.2 项目部署'
          }, {
            value: '10-3-3',
            label: '10.3.3 通过 GitHub Action 自动部署'
          },
        ]
      },
    ]
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