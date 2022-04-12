<template>
  <div class="welcome">
    <h1>欢迎来到主界面-{{msg}}</h1>
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<!-- 
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const count = ref(0)
</script>
-->

<script>
export default {
    name: 'welcome',
}
</script>

<style scoped>

</style>
