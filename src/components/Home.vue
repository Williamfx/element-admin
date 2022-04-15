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
        default-active="2"
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
          <div class="menu-fold" @click="toggle"><i class="iconfont">&#xe669;</i></div>    
          <div class="bread">面包屑</div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="noticeCount" class="notice">
              <i class="iconfont">&#xe60d;</i>
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
export default {
  name:'Home',
  components: {TreeMenu},
  data() {
    return {
      isCollapse: false,
      userInfo: this.$store.state.userInfo,
      noticeCount: 0,
      userMenu: []
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
        console.log(list)
      }catch(error){
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* Project id 3330445 */
  src: url('//at.alicdn.com/t/font_3330445_w1l1lm502qj.woff2?t=1650003668721') format('woff2'),
       url('//at.alicdn.com/t/font_3330445_w1l1lm502qj.woff?t=1650003668721') format('woff'),
       url('//at.alicdn.com/t/font_3330445_w1l1lm502qj.ttf?t=1650003668721') format('truetype');
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
