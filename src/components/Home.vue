<template>
  <div class="basic-layout">
    <div :class="['nav-side',isCollapse?'fold':'unfold']">
      <!-- 系统LOGO -->
      <div class="logo">
        <img src="./../assets/logo.png" alt="">
        <span>Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        :default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
        class="nav-menu"
      >
      <tree-menu :userMenu="userMenu"></tree-menu>
      </el-menu>
    </div>
    <div :class="['content-right',isCollapse?'fold':'unfold']">
      <div class="nat-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle">
            <i class="el-icon-s-fold" :size="20"></i>
            </div>
          <div class="bread">
            <BreadCrumb />
          </div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="noticeCount>0?true:false" class="notice">
              <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown @command="handleLogout">
            <el-button class="userlink">
              {{userInfo.userName}}
              <el-icon class="el-icon--right"></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱：{{userInfo.userEmail}}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TreeMenu from './TreeMenu.vue'
import BreadCrumb from './BreadCrumb.vue'
export default {
  name:'Home',
  components: {TreeMenu,BreadCrumb},
  data() {
    return {
      isCollapse: false,
      userInfo: this.$store.state.userInfo,
      noticeCount: 0,
      userMenu: [],
      activeMenu: location.hash.slice(1)
    }
  },
  mounted() {
    this.getNoticeCount();
    this.getMenuList();
  },
  methods: {
    toggle(){
      this.isCollapse = !this.isCollapse;
    },
    handleLogout(key) {
      if(key == 'email') return;
      this.$store.commit('saveUserInfo','');
      this.userInfo = null;
      this.$router.push('/login');
    },
    async getNoticeCount() {
      try {
        const count = await this.$api.noticeCount()
        this.noticeCount = count;
      }catch(error){
        console.error(error)
      }
    },
    async getMenuList() {
      try {
        const list = await this.$api.getMenuList()
        this.userMenu = list;
      }catch(error){
        console.error(error)
      }
    }
  }
}

</script>

<style lang="scss">

@import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");
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
    overflow-y: hidden;
    overflow-x: hidden;
    transition: width .5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        width: 32px;
        height: 32px;
        margin: 0 16px;
      }
    }
    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
    &.fold {
      width: 64px;
    }
    &.unfold {
      width: 200px;
    }
  }
  .content-right {
    margin-left: 200px;
    &.fold {
      margin-left: 64px;
    }
    &.unfold {
      margin-left: 200px;
    }
    .nat-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-lfet {
          margin-right: 15px;
        }
        // justify-content: ;
      }
      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .userlink {
          cursor: pointer;
          color: #409eff;
          margin-top: 8px;
        }
      }
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
