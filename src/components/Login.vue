<template>
  <h1>欢迎来到登陆界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<!--
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
defineProps({
  msg: String
})

const count = ref(0)
const router = useRouter()
const goHome = ()=> {
    router.push('./welcome')
}
</script>
-->

<script>
import Welcome from './Welcome.vue'
export default {
    name: 'login',
    components: {Welcome},
    mounted() {
      /*
      this.$request({
        method: 'get',
        url: '/login',
        data: {
          name: 'jack'
        }
      }).then((res) => {
        console.log(res);
      })
      */
     this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then((res)=>{
       console.log(res)
     })
    },
    methods: {
        goHome() {
            this.$router.push('./welcome')
        }
    }
}
</script>
<style scoped>

</style>
