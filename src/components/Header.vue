<template>
  <header :class="[activeIndex === 0 ? 'active' : '']">
    <div class="logo">
      <img src="../assets/image/logo.png" alt />
    </div>
    <div class="nav_header">
      <div class="tab">
        <div :class="['tab_r', activeIndex === 0 ? 'homeTab' : '']">
          <div :class="['tab_item', defaultActive === item.code ? 'current' : '']" v-for="(item, index) in navList"
            :key="item.id" @click="handleSelect(item.code, index, item.id)">
            <span>{{ item.name }}</span>
            <div class="tab_item_sub" v-if="item.list && item.list.length">
              <span style="display: flex; flex-direction: column;">
                <span class="tab_item_sub_txt" v-for="val in item.list" :key="val.id"
                  @click.stop="handleSubSelect(item.code, index, val.id, val.code)">{{ val.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="navbar_toggle" @click="show = !show"><span class="icon-bar"></span> <span
        class="icon-bar"></span> <span class="icon-bar"></span></button>
    <div class="navbar_collapse" v-if="show">
      <ul class="nav navbar_nav">
        <li v-for="item in navList" :key="item.id"><span :class="[defaultActive === item.code ? 'active' : '']"
            @click="handleSelect(item.code, index, item.id)">{{ item.name }}</span></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { getNavList } from '../api';
import i18n from "@/i18n" //根据项目对应真实路径
export default {

  data () {
    return {
      navList: [],
      activeIndex: 0,
      defaultActive: "ly_lm_wzsy", // 默认首页
      show: false,
      navSignList: [
        { name: '网站首页', value: 'ly_lm_wzsy', },
        { name: '走进丹顶鹤', value: 'ly_lm_zjddh', },
        { name: '旅游区动态', value: 'ly_lm_lyqdt', },
        { name: '丹顶鹤文化', value: 'ly_lm_ddhwh', },
        { name: '旅游服务', value: 'ly_lm_lyfw', },
        { name: '联系我们', value: 'ly_lm_lxwm', },
        { name: '网站语言', value: 'ly_lm_wzyy', },
      ],
      id: ''
    }
  },
  created () {
    /* 获取数据 */
    this.handleGetNavList()

    this.activeIndex = this.$store.state.homeActiveIndex

  },
  computed: {
    homeActiveIndex () {
      return this.$store.state.homeActiveIndex
    },
    activeNavKey () {
      const index = this.$store.state.activeNavIndex
      if (this.navList.length) {
        return this.navList[index].code
      }
      return 'ly_lm_wzsy'
    }
  },
  methods: {
    handleSelect (key, index, id) {
      this.id = id
      /* 中英文切换 */
      if (key === 'ly_lm_wzyy') {
        return
      }
      this.defaultActive = key
      let path = '/'
      if (key === 'ly_lm_wzsy') {
        path = `/`
      } else {
        path = `/list?code=${key}&id=${id}`
      }
      try {
        this.$store.commit('setActiveNavIndex', this.navSignList.findIndex(i => i.value === key))
        // localStorage.setItem('navIndex', this.navSignList.findIndex(i => i.value === key))
      } catch (error) {
        console.log('error:', error)
      }
      this.show = false
      this.$router.push(path)
    },
    handleSubSelect (key, index, id, subCode) {
      /* 中英文切换 */
      if (key === 'ly_lm_wzyy') {
        if (subCode === 'ly_lm_lyfw_zwwz') {
          i18n.locale = "zh" //
          localStorage.setItem('language', "zh")//在localStorage中存入设置
        }
        if (subCode === 'ly_lm_lyfw_ywwz') {
          i18n.locale = "en" //
          localStorage.setItem('language', "en")//在localStorage中存入设置
        }
        return
      }
      this.defaultActive = key
      let path = '/'
      if (key === 'ly_lm_wzsy') {
        path = `/`
      } else {
        path = `/list?code=${key}&id=${id}`
      }
      try {
        this.$store.commit('setActiveNavIndex', this.navSignList.findIndex(i => i.value === key))
      } catch (error) {
        console.log('error:', error)
      }
      this.show = false
      this.$router.push(path)
    },
    async handleGetNavList () {
      const res = await getNavList({ code: 'ly_lm_dbdh' })
      if (res.code === 0) {
        this.navList = res.data
        this.$store.commit('setNavList', res.data)

        const navCode = this.$route.query.code
        let navIndex = localStorage.getItem('navIndex') || 0
        if (navCode && this.navList.some(i => i.code === navCode)) {
          navIndex = this.navList.findIndex(i => i.code === navCode)
        }
        /* 设置全局nav */
        this.defaultActive = this.navList[navIndex].code
      }
    }
  },
  watch: {
    // 监听store数据的变化
    homeActiveIndex (newValue) {
      this.activeIndex = newValue;
      // 在这里可以根据新的store数据进行相应的处理
    },
    activeNavKey (val) {
      this.defaultActive = val
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

@media screen and (min-width: 1023px) {
  header {
    .nav_header {
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      position: relative;

      .tab {
        height: 80px;
        padding-right: 50px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
        transition: all .2s linear;

        .tab_r {
          flex: 1;
          height: 80px;
          width: 100%;
          background: #fff;
          justify-content: space-between;
          display: flex;
          align-items: center;

          &.homeTab {
            background-color: transparent;

            .tab_item {
              color: #fff;
            }
          }

          .tab_item {
            position: relative;
            cursor: pointer;
            color: #363636;
            font-size: 16px;
            height: 100%;
            padding: 0 14px;
            transition: all .2s linear;
            display: flex;
            align-items: center;

            &:hover {
              background-color: #3cb4d6;
              color: #fff;

              .tab_item_sub {
                display: block;
              }
            }

            .tab_item_sub {
              display: none;
              left: 0;
              top: 80px;
              width: auto;
              min-width: 160px;
              background: transparent;
              height: 100%;
              position: absolute;
              line-height: 60px;
              font-size: 16px;
              color: #fff;
              z-index: 999999999;

              .tab_item_sub_txt {
                cursor: pointer;
                padding: 0 12px;
                text-align: center;
                display: inline-flex;
                width: 100%;
                background: rgba(0, 0, 0, .8);
                white-space: nowrap;
                align-items: center;
                justify-content: center;
                line-height: 60px;
              }
            }

            &.current {
              color: #fff;
              background-color: #3cb4d6;
            }
          }
        }
      }
    }
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
  box-sizing: border-box;
  padding-left: 57px;


  &.active {
    border-bottom: 1px solid rgba(234, 234, 234, 0.3);
    background: transparent;
    box-shadow: none;
  }


  .navbar_toggle {
    display: none;
    cursor: pointer;
  }

  .navbar_collapse {
    display: none;
  }

  @media screen and (max-width: 1023px) {
    .nav_header {
      display: none;
    }

    .navbar_collapse {
      top: 80px;
      height: auto !important;
      position: absolute;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      overflow-y: auto;
      display: block;
      z-index: 1000;
      background: #fff;
      padding: 0;
      overflow-x: visible;
      border: none;
      border-top: 1px solid transparent;
      box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, .1);
      padding-top: 20px;

      .navbar_nav {
        width: 100%;
        float: none;
        display: inline-block;
        padding-bottom: 20px;

        li {
          cursor: pointer;
          float: none;
          text-align: center;
          width: 100%;
          margin: 0;
          position: relative;
          display: block;


          span {
            color: #000;
            padding: 0;
            line-height: 40px;
            font-size: 15px;
            display: block;

            &.active {
              color: #3CB4D6;
            }
          }
        }
      }
    }


    .navbar_toggle {
      display: block;
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