import { createApp } from 'vue'
import App from './App.vue'
import {
  // create naive ui
  create,
  // component
  NButton,
  NGrid,
  NGridItem,
  NCode,
  NDivider,
  NText,
  NBlockquote,
  NA,
  NTabs,
  NTabPane,
  NImage,
  NSwitch,
  NTable,
  NSpace,
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NGrid,
    NGridItem,
    NCode,
    NDivider,
    NText,
    NBlockquote,
    NA,
    NTabs,
    NTabPane,
    NImage,
    NSwitch,
    NTable,
    NSpace,
  ]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')

