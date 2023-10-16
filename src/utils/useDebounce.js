/*
 * @Author: chenzhtbb chenzhtbb@163.com
 * @Date: 2023-10-11 18:30:22
 * @LastEditors: chenzhtbb chenzhtbb@163.com
 * @LastEditTime: 2023-10-13 13:34:06
 * @FilePath: /hello-vue3/src/utils/common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'

export default () => {
    const timer = ref(null)

    const cancel = () => {
        if (!timer.value) {
            return
        }
        clearTimeout(timer.value)
        timer.value = null
    }

    const debounce = (fn, delay = 300) => {
        return (...args) => {
            cancel()
            timer.value = setTimeout(() => {
                fn.apply(this, args)
                timer.value = null
            }, delay)
        }
    }

    return {
        cancel,
        debounce,
    }
}