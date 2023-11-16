<template>
    <h1>6.1.1 基于 class 的动画和过渡</h1>
    <p>在 vue 中，通常使用 &lt;transition&gt; 组件进行动画过渡，这对于组件的进入和离开非常有用，但也可以通过添加一个条件 class 类来激活动画，而无须挂载组件。例如：</p>
    <n-button @click="handler">点我有动画</n-button>
    <br>
    <br>
    <div class="ani-box" :class="{ donghua: isActivated }"></div>
    <p>代码如下：</p>
    <n-code language="html" :code="code1"></n-code>
    <n-code language="js" :code="code2"></n-code>
    <n-code language="html" :code="code3"></n-code>
    <p>当点击按钮时，会将 class donghua 添加给红色方块，并在 1s 后移除该class</p>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({
    inheritAttrs: false
})

const isActivated = ref(false)

const handler = () => {
    isActivated.value = true
    setTimeout(() => {
        isActivated.value = false
    }, 1000)
}

const code1 = `<template>
    <button @click="handler">点我有动画</button>
    <div class="ani-box" :class="{ donghua: isActivated }"></div>
</template>`
const code2 = `<script setup>
import { ref } from 'vue'
const isActivated = ref(false)
function handler() {
    isActivated.value = true
    setTimeout(function() {
        isActivated.value = false
    }, 1000)
}
<\/script>`
const code3 = `<style scoped>
.ani-box {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: red;
}

.donghua {
    animation: donghua 1s;
    transform: translateZ(0);
}

@keyframes donghua {

    10%,
    90% {
        transform: translateY(20px);
    }

    20%,
    80% {
        transform: translateY(-20px);
    }

    30%,
    70% {
        transform: translateX(20px);
    }

    40%,
    60% {
        transform: translateX(-20px);
    }
}
</style>`
</script>

<style scoped>
.ani-box {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: red;
}

.donghua {
    animation: donghua 1s;
    transform: translateZ(0);
}

@keyframes donghua {

    10%,
    90% {
        transform: translateY(20px);
    }

    20%,
    80% {
        transform: translateY(-20px);
    }

    30%,
    70% {
        transform: translateX(20px);
    }

    40%,
    60% {
        transform: translateX(-20px);
    }
}
</style>