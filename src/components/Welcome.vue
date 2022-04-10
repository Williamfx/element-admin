<template>
  <h1>欢迎来到主界面-{{msg}}</h1>
  <!-- <el-button>去登陆</el-button> -->
  <router-link to="/login">去登录</router-link>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const count = ref(0)
</script>

<!-- 
<script>
export default {
    name: 'welcome',
    props: ['msg']
}
</script>
-->

<style scoped>

</style>
