<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    name: 'BreadCrumb.vue',
    computed: {
        bredList() {
            return this.$route.matched;
        }
    },
    mounted() {
        console.log('routes=>',this.$route)
    }
}
</script>