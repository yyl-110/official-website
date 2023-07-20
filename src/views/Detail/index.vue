<template>
  <div class="detail">
    <common-banner />
    <div class="detail_wrap">
      <div class="breadcrumb bread">
        <div class="right_bread"><span>当前位置：</span> <span style="" class="current_asideNav"><span @click="goTo"
              style="cursor: pointer;">
              {{ mainTitle }}
            </span> <span class="arrow">&gt;</span> <span style="cursor: pointer;">
              {{ subTitle }}
            </span></span></div>
      </div>
      <div class="content">
        <div class="title" style="height: 50px; text-align: center;">{{ pageData.title }}</div>
        <div class="info">
          <div class="pub_date"><span>发布日期: {{ pageData.createTime }}</span></div>
          <div class="source"><span>来源: {{ pageData.deptName }}</span></div>
          <div class="views"><span>访问次数: {{ pageData.hotpots }}</span></div>
        </div>
        <div class="img_txt" v-html="pageContent"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { getArticleDetail } from '../../api';
import CommonBanner from '../../components/CommonBanner.vue';
import Footer from '../../components/Footer.vue';
export default {
  components: { CommonBanner, Footer },
  data () {
    return {
      pageData: {},
      navList: [],
      ids: [],
      mainTitle: '',
      subTitle: ''

    }
  },
  computed: {
    list () {
      return this.$store.state.homeNavList
    },
    pageContent(){
      return this.pageData.content.replace('src="', `src="${process.env.VUE_APP_PUBLIC_URL}`)
    }
  },
  methods: {
    async getArticleData () {
      const res = await getArticleDetail({ id: this.$route.query.id })
      if (res.code === 0) {
        this.pageData = res.data
        this.ids = res.data.columnId.split(',')
      }
    },
    goTo () {
      const index = Number(localStorage.getItem('navIndex') || 0)
      if (index === 0) {
        this.$router.push('/')
      } else {
        this.list[index]
        this.$router.push({
          path: '/list',
          query: {
            code: this.list[index].code,
            id: this.list[index].id
          }
        })
      }
    }
  },
  created () {
    this.getArticleData()
  },
  watch: {
    list: {
      handler: function (val) {
        const index = Number(localStorage.getItem('navIndex') || 0)
        const name = val[index].name
        this.mainTitle = name
        setTimeout(() => {
          const id = this.ids[1]
          const item = val[index].list.find(i => i.id === Number(id)) || {}
          try {
            this.subTitle = item.name
          } catch (error) {
            console.log('error:', error)
          }
        }, 300);
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  padding-bottom: 220px;

  /* mobile */
  @media screen and (max-width: 1023px) {
    .content {
      padding: 10px !important;

      .title {
        font-size: 14px !important;
      }

      .img_txt {
        margin-top: 20px !important;
      }

      .info {
        font-size: 12px !important;
        flex-direction: column;
        height: auto !important;
        line-height: 24px !important;
        align-items: flex-start !important;
        padding: 0 10px !important;

        div {
          white-space: nowrap;
        }
      }
    }

    .breadcrumb {
      padding: 20px !important;
      height: 24px !important;

      .right_bread {
        font-size: 12px !important;
        margin-left: 0 !important;
      }

    }
  }

  .breadcrumb {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;

    .right_bread {
      font-size: 16px;
      color: #666;

      .arrow {
        padding: 0 8px;
        box-sizing: border-box;
      }
    }

    &.bread {
      padding: 0 360px;
      border: 0 !important;
    }
  }

  .content {
    padding: 0 360px;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    position: relative;

    .title {
      color: #333;
      font-size: 24px;
      font-weight: 700;
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }

    .info {
      width: 100%;
      height: 45px;
      background: #daecfb;
      font-size: 14px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 350px;

      div {
        white-space: nowrap;
      }
    }

    .img_txt {
      font-size: 16px;
      color: #333;
      padding-bottom: 150px;
      padding-top: 20px;
    }
  }
}
</style>