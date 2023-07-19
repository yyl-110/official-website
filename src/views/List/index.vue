<template>
  <div class="listWrap">
    <common-banner />
    <div class="content">
      <div class="nav">
        <div class="nav_title">{{ mainTitle }}</div>
        <div class="line"></div>
        <div class="nav_list">
          <div :class="['nav_item', activeIndex === index ? 'active' : 'hover']" v-for="(item, index) in navList"
            :key="item.id" @click="selectTab(index, item.id)">
            <img src="../../assets/image/circle.png" alt="" class="circle">
            <span>{{ item.name }}</span> <img src="../../assets/image/point.png" alt="" class="arrow">
          </div>
        </div>
      </div>
      <div class="content_right">
        <div class="breadcrumb" v-if="linkType !== '3' && navList.length">
          <div class="title">{{ mainTitle }}</div>
          <div class="right_bread"><span>当前位置：</span> <span style="" class="current_asideNav"><span
                style="cursor: pointer;">
                {{ mainTitle }}
              </span> <span class="arrow">&gt;</span> <span style="cursor: pointer;">
                {{ navList[activeIndex].name }}
              </span></span></div>
        </div>
        <div class="lists">
          <div style="flex: 1 1 0%;">
            <div class="detail_list" v-for="item in articleList" v-if="linkType === '2' && articleList.length">
              <div class="title">
                <span class="dot"></span>
                <span class="list_content">招募 | 自然教育师学员</span>
              </div>
              <div class="date">2023-07-06</div>
            </div>
            <!-- 一条数据 -->
            <div class="detail" v-if="linkType === '3' && articleList.length">
              <div class="title">基地介绍</div>
              <div class="info">
                <div class="pub_date"><span>发布日期: 2023-07-06 14:09:26</span></div>
                <div class="source"><span>来源: 研发部门</span></div>
                <div class="views"><span>访问次数: 252</span></div>
              </div>
              <div class="img_txt">
                p盐城珍禽保护区位于中国东部沿海，是东亚——澳大利西亚候鸟迁徙路线上重要的栖息地，享有“国家重要湿地基因库”之称。该保护区重点保护以丹顶鹤为代表的湿地珍稀野生动物及其赖以生存的滨海湿地生态系统。
              </div>
            </div>
            <div class="empty" v-if="articleList.length === 0">
              暂无数据～
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination background layout="prev, pager, next,sizes,total" :total="50" class="mt-4"
            :page-sizes="[10, 20, 30, 40]" :pager-count="3" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import CommonBanner from '@/components/CommonBanner.vue'
import { getLeftNavList, getArticleList } from '@/api/index'
export default {
  components: { Footer, CommonBanner },
  data () {
    return {
      code: '',
      activeIndex: 0,
      mainTitle: '',
      subTitle: '',
      id: '',
      navList: [],
      pageSize: 1,
      pageNum: 5,
      articleList: [],
      linkType: '2' // 右侧内容的形式 2 列表 3 文章 4 表格 7 视频列表
    }
  },
  created () {
    // this.code = this.$route.query.code
    // this.mainTitle = this.$route.query.mainTitle
    this.id = this.$route.query.id
    this.getNavList()
  },
  methods: {
    /* 左侧菜单栏 */
    async getNavList () {
      const res = await getLeftNavList({ columnId: this.id })
      if (res.code === 0) {
        this.navList = res.data.list
        this.mainTitle = res.data.name
        this.code = res.data.code

        /* 判断是点击的子菜单 */
        if (this.navList.length) {
          const selectIndex = this.navList.findIndex(i => i.id === Number(this.id))
          if (selectIndex > -1) {
            this.activeIndex = selectIndex
            this.getList(this.navList[selectIndex].id)
            this.linkType =this.navList[selectIndex].linkType
          } else {
            this.getList(this.navList[0].id)
            this.linkType =this.navList[0].linkType
          }
        }
      }
    },

    /**
     * 获取文章列表
     * @return {*}
     */
    async getList (columnId) {
      const res = await getArticleList({ columnId, pageSize: this.pageSize, pageNum: this.pageNum })
      if (res.code === 0) {
        this.articleList = res.data.rows
      }
    },
    selectTab (index, tabId) {
      this.activeIndex = index
      this.getList(tabId)
    }
  },
  watch: {
    '$route' (val) {
      // this.code = this.$route.query.code
      // this.mainTitle = this.$route.query.mainTitle
      this.id = this.$route.query.id
      this.activeIndex = 0
      this.pageSize = 1
      this.subTitle = ''
      this.mainTitle = ''
      this.navList = []
      this.articleList = []
      this.getNavList()
    }
  }
}
</script>

<style lang="scss" scoped>
.listWrap {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  padding-bottom: 220px;

  /* mobile */
  @media screen and (max-width: 1023px) {
    .content {
      padding: 10px !important;
      box-sizing: border-box;

      .content_right {
        margin-left: 10px !important;
      }

      .detail {
        .info {
          padding: 10px 20px !important;
          display: flex;
          flex-wrap: wrap;
          height: auto !important;
          justify-content: space-between !important;
          line-height: 24px !important;

          div {
            min-width: 120px;
          }
        }
      }

      .detail_list {

        .list_content {
          padding-right: 20px !important;
        }

        .title {
          max-width: 250px !important
        }
      }

      .breadcrumb {
        .title {
          display: none;
        }
      }

      .nav {
        width: 130px !important;

        .nav_title {
          font-size: 18px !important;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          height: 70px !important;
        }
      }
    }
  }

  /* pc */
  // @media screen and (min-width: 1023px) {

  .content {
    display: flex;
    padding: 25px 260px 0;
    align-items: flex-start;
    justify-content: space-between;

    .nav {
      width: 280px;
      height: auto;
      background: #fff;

      .nav_title {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 24px;
        background-color: #3cb4d6;
        border-bottom: 2px solid #fff;
      }

      .nav_list {
        width: 100%;
        height: auto;
        background: #f2f2f2;
        display: flex;
        flex-direction: column;

        .nav_item {
          color: #333;
          font-size: 16px;
          height: 55px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          cursor: pointer;

          &.hover {
            &:hover {
              color: #fff;
              background-color: #3cb4d6;
            }
          }

          .arrow {
            width: 12px;
            height: 12px;
            margin-left: auto;
          }

          .circle {
            width: 12px;
            height: 12px;
            margin-right: 10px;
          }

          &.active {
            color: #fff;
            background-color: #3cb4d6;
          }
        }
      }
    }

    .content_right {
      flex: 1;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      min-height: 600px;
      height: auto;
      width: 100%;
      overflow-x: auto;

      .detail {
        width: 100%;
        flex: 1;

        .img_txt {
          font-size: 16px;
          color: #333;
        }

        .title {
          color: #333;
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          text-align: center;
          height: 50px;
          justify-content: center;
        }

        .info {
          height: 60px;
          line-height: 45px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 20px;
          background: #daecfb;
          font-size: 14px;
          padding: 0 100px;
          line-height: 60px;
        }
      }

      .empty {
        width: 100%;
        padding: 50px 0;
        text-align: center;
        font-size: 18px;
        color: #999;
      }

      .breadcrumb {
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;

        .title {
          font-size: 18px;
          color: #3cb4d6;
          font-weight: 700;
          padding-left: 10px;
          border-left: 16px solid #3cb4d6;
        }

        .right_bread {
          font-size: 16px;
          color: #666;
          margin-left: auto;

          .arrow {
            padding: 0 8px;
            box-sizing: border-box;
          }
        }
      }

      .pagination {
        font-size: 16px;
        color: #999;
        font-weight: 400;
        line-height: 40px;
        display: flex;
        text-align: center;
        justify-content: flex-end;
      }

      .lists {
        flex: 1;
        height: auto;
        display: flex;
        flex-direction: column;

        .detail_list {
          width: 100%;
          height: 50px;
          background: #fff;
          justify-content: space-between;
          box-sizing: border-box;
          border-bottom: 1px solid #ddd;
          cursor: pointer;
          display: flex;
          align-items: center;

          .date {
            font-size: 16px;
            color: #999;
            display: inline-block;
          }

          .title {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 16px;
            color: #333;
            flex-shrink: 0;
            max-width: 830px;

            .list_content {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-right: 100px;
            }

            .dot {
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #3cb4d6;
              margin-right: 16px;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
}

// }
</style>