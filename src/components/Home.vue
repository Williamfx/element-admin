<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 系统LOGO -->
      <div class="log">
        <span>Manager</span>
        <img src="./../assets/logo.png" alt="">
      </div>
      <!-- 导航菜单 -->
      <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001529"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title><i class="iconfont">&#xe600;</i><span>系统管理</span></template>
          <el-menu-item index="1-1"><i class="iconfont">&#xe6b4;</i>用户管理</el-menu-item>
          <el-menu-item index="1-2"><i class="iconfont">&#xe610;</i>菜单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title><i class="iconfont">&#xe600;</i><span>审批管理</span></template>
          <el-menu-item index="2-1"><i class="iconfont">&#xe608;</i>休假申请</el-menu-item>
          <el-menu-item index="2-2"><i class="iconfont">&#xe760;</i>待我审批</el-menu-item>
        </el-sub-menu>
      </el-menu>
    
    </div>
    <div class="content-right">
      <div class="nat-top">
        <div class="bread">面包屑</div>
        <div class="user-">用户</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* Project id 3330445 */
  src: url('//at.alicdn.com/t/font_3330445_y82vvxpl5sm.woff2?t=1649987869365') format('woff2'),
       url('//at.alicdn.com/t/font_3330445_y82vvxpl5sm.woff?t=1649987869365') format('woff'),
       url('//at.alicdn.com/t/font_3330445_y82vvxpl5sm.ttf?t=1649987869365') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 10px;
}
.el-menu {
  .el-sub-menu__title {
    font-size: 18px;
  }
  ul{
    li {
      font-size: 18px;
    }
  }
}

.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width .5s;
    .log {
      span {
        font-size: 26px;
        position: relative;
        bottom: 10px;
      }
      img {
        width: 50px;
      }
    }
  }
  .content-right {
    margin-left: 200px;
    .nat-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 90px);
      .main-page {
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
