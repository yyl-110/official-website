<template>
  <header :class="[activeIndex === 0 ? 'active' : '']">
    <div class="logo">
      <img :src="activeIndex === 0 ? require('../assets/image/logo.png') : require('../assets/image/logo2.png')" alt />
    </div>
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      :router="router" :text-color="activeIndex === 0 ? '#ffffff' : '#333333'" active-text-color="#ffffff">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">最近丹顶鹤</el-menu-item>
      <el-menu-item index="/news1">旅游区动态</el-menu-item>
      <el-menu-item index="/news2">丹顶鹤文化</el-menu-item>
      <el-menu-item index="/news3">旅游服务</el-menu-item>
      <el-menu-item index="/news4">联系我们</el-menu-item>
      <el-submenu index="2">
        <template slot="title">网站语言</template>
        <el-menu-item index="2-1" style="color:#333">中文</el-menu-item>
        <el-menu-item index="2-2" style="color:#333">英文</el-menu-item>
      </el-submenu>
    </el-menu>
    <button type="button" class="navbar_toggle"><span class="icon-bar"></span> <span class="icon-bar"></span> <span
        class="icon-bar"></span></button>
  </header>
</template>

<script>
import { getNavList } from '../api';
export default {

  data () {
    return {
      navList: [],
      activeIndex: 0,
      defaultActive: "/",
      router: true
    }
  },
  created () {
    this.handleGetNavList()
  },
  computed: {
    homeActiveIndex () {
      return this.$store.state.homeActiveIndex
    }
  },
  methods: {
    handleSelect (key) {
      this.isShow = this.defaultActive != key;
    },
    handleGetNavList: async () => {
      const res = await getNavList({ code: 'kp_lm_dbdh' })
      if (res.code === 0) {
        this.navList = res.data.list
      }
    }
  },
  watch: {
    // 监听store数据的变化
    homeActiveIndex (newValue) {
      this.activeIndex = newValue;
      // 在这里可以根据新的store数据进行相应的处理
    }
  }

}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1023px) {
  header {
    padding: 0 10px !important;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  height: 80px;
  left: 0;
  top: 0;
  z-index: 999999;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  transition: all 0.3s;

  &.active {
    border-bottom: 1px solid rgba(234, 234, 234, 0.3);
    background: transparent;
    box-shadow: none;
  }

  box-sizing: border-box;
  padding-left: 57px;

  .el-menu.el-menu--horizontal {
    border: none;
  }

  .navbar_toggle {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    .el-menu-demo {
      display: none;
    }

    .navbar_toggle {
      display: block !important;
      position: relative;
      padding: 9px 10px;
      background-color: transparent;
      background-image: none;
      border: 1px solid #ddd;
      border-radius: 4px;

      .icon-bar {
        background-color: #888;
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;

        &:not(:first-child) {
          margin-top: 4px;
        }
      }
    }
  }

  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal>.el-submenu .el-submenu__title:hover,
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
    background-color: #3CB4D6;
  }

  .el-menu--horizontal>.el-menu-item.is-active {
    border: none;
    background-color: #3CB4D6;
  }

  .el-menu-item {
    border-bottom: none !important;
  }

  .el-menu {
    background-color: transparent;
    height: 100%;

    &::after {
      display: none;
    }
  }

  .logo {
    cursor: pointer;
    width: 332px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>