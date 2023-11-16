<template>
  <h1>6.2.2 CSS 过渡与动画</h1>
  <h2>CSS 过渡 class</h2>
  <p>一共有 6 个应用于进入与离开过渡效果的 CSS class。</p>
  <n-image :src="img1"></n-image>
  <ol>
    <li><n-text code>v-enter-from</n-text>：进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。</li>
    <li><n-text code>v-enter-active</n-text>：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。这个 class
      可以被用来定义进入动画的持续时间、延迟与速度曲线类型。</li>
    <li><n-text code>v-enter-to</n-text>：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 <n-text code>v-enter-from</n-text>
      被移除的同时)，在过渡或动画完成之后移除。</li>
    <li><n-text code>v-leave-from</n-text>：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除。</li>
    <li><n-text code>v-leave-active</n-text>：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。这个 class
      可以被用来定义离开动画的持续时间、延迟与速度曲线类型。</li>
    <li><n-text code>v-leave-to</n-text>：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 <n-text code>v-leave-from</n-text>
      被移除的同时)，在过渡或动画完成之后移除。</li>
  </ol>
  <p><n-text code>v-enter-active</n-text> 和 <n-text code>v-leave-active</n-text>
    给我们提供了为进入和离开动画指定不同速度曲线的能力，我们将在下面的小节中看到一个示例。</p>
  <h2>为过渡效果命名</h2>
  <p>我们可以给 <n-text code>&lt;Transition&gt;</n-text> 组件传一个 <n-text code>name</n-text> prop 来声明一个过渡效果名：</p>
  <n-code language="html" :code="code1"></n-code>
  <p>对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 v 作为前缀。比如，上方例子中被应用的 class 将会是 <n-text code>fade-enter-active</n-text> 而不是
    <n-text code>v-enter-active</n-text>。这个“fade”过渡的 class 应该是这样：
  </p>
  <n-code language="html" :code="code2"></n-code>
  <h2>CSS 的 transition</h2>
  <p><n-text code>&lt;Transition&gt;</n-text> 一般都会搭配原生 CSS 过渡一起使用，正如你在上面的例子中所看到的那样。这个 <n-text code>transition</n-text> CSS
    属性是一个简写形式，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和速度曲线。</p>
  <p>下面是一个更高级的例子，它使用了不同的持续时间和速度曲线来过渡多个属性：</p>
  <n-code language="html" :code="code3"></n-code>
  <br>
  <n-button @click="show = !show">点我有动画</n-button>
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>
  <h2>CSS 的 animation</h2>
  <p>原生 CSS 动画和 CSS transition 的应用方式基本上是相同的，只有一点不同，那就是 *-enter-from 不是在元素插入后立即移除，而是在一个 animationend 事件触发时被移除。</p>
  <p>对于大多数的 CSS 动画，我们可以简单地在 *-enter-active 和 *-leave-active class 下声明它们。下面是一个示例：</p>
  <n-code language="html" :code="code4"></n-code><br>
  <n-button @click="show = !show">点我有动画</n-button>
  <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      Hello here is some bouncy text!
    </p>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '../assets/img/transition-classes.png'
defineOptions({
  inheritAttrs: false
})
const show = ref(true)
const code1 = `<Transition name="fade">
  ...
</Transition>`

const code2 = `.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}`

const code3 = `<Transition name="slide-fade">
  <p v-if="show">hello</p>
</Transition>

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}`

const code4 = `<Transition name="bounce">
  <p v-if="show" style="text-align: center;">
    Hello here is some bouncy text!
  </p>
</Transition>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}`
</script>

<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}</style>