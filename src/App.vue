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
        <!-- <component :is="autoImportComponent" v-model="selectDemo" /> -->
        <router-view></router-view>
      </div>
    </n-config-provider>
  </div>
</template>

<script setup>
import { zhCN } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import { onMounted, watch, ref, computed, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'
import router from './router/router'
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('bash', bash)

const __ROUTER_STORE__ = '__ROUTER_STORE__'

const selectDemo = ref(null)

const selectDemoText = computed(() => {
  return selectDemo.value ? `演示项目 ${(selectDemo.value).replace(/-/g, '.')}` : null
})

const r = useRouter()
watch(selectDemo, (newVal) => {
  localStorage.setItem(__ROUTER_STORE__, newVal)
  r.push(`/${newVal}`)
})

onMounted(() => {
  const select = localStorage.getItem(__ROUTER_STORE__)
  if (select) {
    selectDemo.value = select
  }
})

const options = computed(() => {
  return router
})
</script>

<style scoped>
.main {
  padding-left: 100px;
  padding-right: 100px;
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

.__code__ {
  background-color: var(--el-color-primary-light-9);
}

img {
  border: 1px solid purple;
  max-height: 20vh;
}

.n-image-preview {
  background-color: white;
}
</style>