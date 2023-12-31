<template>
  <div class="one">
    <el-carousel class="carousel" height="100%">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl | imgFilter" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="intron">
      <div class="left">
        <img src="../../../assets/image/gg.png" alt="">
        <span>{{ $t('common.nav_title1') }}</span>
      </div>
      <div class="line"></div>
      <div class="list">
        <vue-seamless-scroll v-if="tempArray.length >= 1" :data="tempArray" class="seamless-warp"
          :class-option="defaultOption">
          <div class="info" v-for="item in tempArray" :key="item.noticeId" @click="goTo(item)">
            <div class="content" v-html="$i18n.locale === 'zh' ? item.noticeTitle : item.enNoticeTitle">
            </div>
            <div class="time">{{ item.createTime }}</div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import { getNoticeList } from '../../../api'
export default {
  components: {

    vueSeamlessScroll
  },
  filters: {
    imgFilter (val) {
      return process.env.VUE_APP_PUBLIC_URL + val
    }
  },
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      tempArray: [],
    }
  },
  created () {
    this.getNotice()
  },

  computed: {
    defaultOption () {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: false, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }

  },
  methods: {
    goTo (item) {
      const routeUrl = this.$router.resolve({
        path: '/notice',
        query: {
          id: item.noticeId
        }
      })
      window.open(routeUrl.href, "_blank");
    },
    async getNotice () {
      const res = await getNoticeList()
      if (res.code === 0) {
        this.tempArray = res.data
      }
    }
  }

}
</script>

<style lang="scss" scoped>
::v-deep.el-carousel__container {
  height: 100%;
}
.one {
  width: 100%;
  height: 100%;
  position: relative;
  .carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    .el-carousel__container {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

/* 移动端 */
@media screen and (max-width: 1023px) {
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    .intron {
      width: 80%;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      padding: 10px;
      display: flex;
      flex-direction: column;

      .line {
        width: 80%;
        height: 1px;
        background: #999999;
        opacity: 0.5;
        margin: 10px 0px;
      }

      .list {
        flex: 1;
        overflow-y: hidden;
      }

      .info {
        width: 100%;

        .content {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          width: 100%;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //当属性值为2，表示超出3行隐藏
        }

        .time {
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
          color: #A0A0A0;
          margin-top: 5px;
        }
      }


      .left {
        display: flex;
        align-items: center;

        img {
          width: 30px;
        }

        span {
          font-size: 24px;
          font-weight: 400;
          color: #3CB4D6;
          flex-shrink: 0;
          margin-left: 10px;
        }
      }
    }

  }
}

/* pc */
@media screen and (min-width: 1023px) {
  .one {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 80px;
    box-sizing: border-box;

    .intron {
      display: flex;
      align-items: center;
      width: 80%;
      height: 100px;
      background-color: #fff;
      margin: 0 auto;
      padding-left: 30px;
      padding-right: 30px;

      .list {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        overflow-y: hidden;
      }

      .info {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .content {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .time {
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
          color: #A0A0A0;
          margin-top: 5px;
        }
      }

      .line {
        width: 1px;
        height: 50px;
        background: #999999;
        opacity: 0.5;
        margin: 0 30px;
      }

      .left {
        display: flex;
        align-items: center;

        img {
          width: 40px;
          height: 35px;
        }

        span {
          font-size: 30px;
          font-weight: 400;
          color: #3CB4D6;
          flex-shrink: 0;
          margin-left: 15px;
        }
      }
    }

  }
}
</style>