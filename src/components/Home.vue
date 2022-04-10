<template>
  <div>
    <h1>欢迎学习vue3全栈课程-{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>

</style>
