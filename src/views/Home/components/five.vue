<template>
  <div class="five">
    <CardTitle :title="$t('common.nav_title5')" />
    <div class="more" @click="goToMore">{{ $t('common.more') }}<img src="../../../assets/image/right.png" alt=""></div>
    <div class="content">
      <div class="nav">
        <div :class="['item', selectId === item.id ? 'active' : '']" v-for="item in navList" :key="item.id"
          @click="getSelectData(item.id)">{{ item.name }}
        </div>
      </div>
      <div class="cardList">
        <template v-if="articleList.length > 0">
          <div class="cardItem" v-for="item in articleList" :key="item.id" @click="goToDetail(item.id)">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="bot">
              <div class="line"></div>
              <div class="date">
                <div class="day">{{ item.createTime | formatDay }}</div>
                <div class="year">
                  <span>{{ item.createTime | formatMonth }}</span>
                  <img src="../../../assets/image/right_b.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="empty" v-else>暂无数据～</div>
      </div>
    </div>

  </div>
</template>

<script>
import { getArticleList, getData } from '../../../api';
import CardTitle from './cardTitle.vue';
import dayjs from 'dayjs'
export default {
  components: { CardTitle },
  data () {
    return {
      selectId: 0,
      navList: [],
      articleList: [],
      navId: 0
    }
  },
  created () {
    this.getTwoData()
  },
  filters: {
    formatMonth (val) {
      if (!val) return ''
      return dayjs(val).format('YYYY-MM')
    },
    formatDay (val) {
      if (!val) return ''
      return dayjs(val).day()
    }
  },
  methods: {
    goToMore () {
      this.$store.commit('setActiveNavIndex', 3)
      this.$router.push({
        path: '/list',
        query: { code: 'ly_lm_ddhwh', id: this.navId }
      })
    },
    /* 丹顶鹤文化 */
    async getTwoData () {
      const res = await getData({ code: 'ly_lm_ddhwh' })
      if (res.code === 0) {
        this.navList = res.data.list
        this.selectId = res.data.list[0].id
        this.navId = res.data.id
        this.getArticle(this.selectId)
      }
    },
    /* 获取文章列表 */
    async getArticle (id) {
      const res = await getArticleList({ columnId: id, pageSize: 3, pageNum: 1 })
      if (res.code === 0) {
        this.articleList = res.data.rows
      }
    },
    getSelectData (id) {
      this.selectId = id
      this.getArticle(id)
    },
    goToDetail (id) {
      const url = this.$router.resolve({
        path: '/detail',
        query: {
          id
        }
      })
      window.open(url.href, "_blank");
    }
  }
}
</script>

<style lang="scss" scoped>
.five {
  width: 100%;
  height: 100%;
  padding-top: 80px;

  .empty {
    padding: 40px 0;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* mobile */
  @media screen and (max-width: 768px) {
    .more {
      right: 30px;
      top: 110px;
    }

    .content {
      width: 90%;
      display: flex;
      flex-direction: column;
      padding-top: 100px;

      .cardList {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;

        .cardItem {
          background-color: #fff;
          border-radius: 10px;
          padding: 8px 10px;

          .bot {
            .line {
              width: 99%;
              height: 1px;
              background-color: #999;
              opacity: 0.3;
              margin: 8px auto;
            }

            .date {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              padding: 0 20px;

              .year {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;

                img {
                  width: 28px;
                }

                span {
                  font-weight: bold;
                }
              }

              .day {
                font-size: 36px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #3CB4D6;
              }
            }
          }



          .introduction {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            line-height: 26px;
            margin-top: 8px;
            // 文本长度处理 begin
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
          }

          .title {
            // 文本长度处理 begin
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: break-word;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            line-height: 32px;
          }

          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }

      .nav {
        display: flex;
        justify-content: center;

        .item {
          font-size: 18px;
          font-weight: normal;
          letter-spacing: 0px;
          color: #333;

          &:not(:first-child) {
            margin-left: 50px;
          }

          &.active {
            font-weight: bold;
            color: #3CB4D6;
          }
        }
      }

      .cardList {
        margin-top: 10px;
      }
    }
  }

  /* pc */
  @media screen and (min-width: 768px) {
    .more {
      right: 150px;
      top: 180px;
    }

    .content {
      padding-top: 240px;
      display: flex;
      width: 80%;

      .cardList {
        width: 100%;
        transition: all .2s;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cardItem {
          padding: 40px 34px 0;
          background-color: #fff;
          width: 380px;
          height: 490px;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;

          &:hover {
            transition: all .3s ease;
            box-shadow: 0 0 10px rgba(0, 0, 0, .2);
          }

          .bot {
            width: 100%;
            margin-top: 170px;

            .date {
              display: flex;
              align-items: center;
              height: 80px;

              .year {
                display: flex;
                -webkit-box-orient: vertical;
                flex-direction: column;
                -webkit-box-align: end;
                -ms-flex-align: end;
                align-items: flex-end;
                height: 100%;
                justify-content: space-around;
                margin-left: auto;

                span {
                  font-size: 16px;
                  color: #333;
                  font-weight: 700;
                }

                img {
                  width: 22px;
                  height: 10px;
                }
              }

              .day {
                color: #3cb4d6;
                font-size: 70px;
                font-weight: 700;
              }
            }

            .line {
              height: 1px;
              background-color: hsla(0, 0%, 60%, .3);
            }
          }

          .title {
            width: 100%;
            font-size: 16px;
            font-weight: 700;
            color: #333;
            line-height: 36px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            cursor: pointer;
            transition: all .2s;
          }

          .introduction {
            width: 100%;
            font-size: 14px;
            font-weight: 400;
            color: #999;
            line-height: 26px;
            margin-top: 10px;
            flex: 1;
          }
        }
      }


      .nav {
        width: 20%;
        flex-shrink: 0;

        .item {
          font-size: 18px;
          font-weight: normal;
          letter-spacing: 0px;
          color: #333;
          margin-top: 100px;
          cursor: pointer;

          &.active {
            font-weight: bold;
            color: #3CB4D6;
          }
        }
      }

      .cardList {
        flex: 1;
        flex-shrink: 0;
      }
    }
  }

  .content {
    margin: 0 auto;
  }


  .more {
    width: 110px;
    height: 40px;
    background: #3CB4D6;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    color: #fff;

    img {
      width: 28px;
      margin-left: 5px;
    }
  }
}
</style>