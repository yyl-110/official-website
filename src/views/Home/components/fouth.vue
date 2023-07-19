<template>
  <div class="fouth">
    <cardTitle title="旅游区动态" type="wight" />
    <div class="more">更多<img src="../../../assets/image/right_b.png" alt=""></div>
    <div class="content">
      <div class="nav">
        <div :class="['item', selectIndex === index ? 'active' : '']" v-for="(item, index) in navList" :key="index">{{
          item
        }}</div>
      </div>
      <div class="cardWrap">
        <el-row :gutter="50" class="pc">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in 4">
            <div class="cardItem" :style="{ marginTop: index > 1 ? '50px' : '' }">
              <div class="leftTime">
                <div class="month">07-25</div>
                <div class="year">2023</div>
              </div>
              <div class="info">
                <div class="title">习近平:在第+四届全国人民代表大会第表大会一次会议上的讲话四届全国人民代表大会第表大会一次会议上的讲话四届全国人民代表大会第表大会一次会议上的讲话</div>
                <div class="desc">江苏盐城国家级珍禽自然保护区，地处江苏中部沿海，是我国最大的滩涂湿地保护</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="50" class="mobile">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in 2">
            <div class="cardItem" :style="{ marginTop: index > 0 ? '25px' : '' }">
              <div class="leftTime">
                <div class="month">07-25</div>
                <div class="year">2023</div>
              </div>
              <div class="info">
                <div class="title">习近平:在第+四届全国人民代表大会第表大会一次会议上的讲话</div>
                <div class="desc">江苏盐城国家级珍禽自然保护区，地处江苏中部沿海，是我国最大的滩涂湿地保护</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import cardTitle from './cardTitle.vue'
export default {
  components: { cardTitle },
  data () {
    return {
      navList: [
        '通知公告',
        '新闻咨询',
        '主题活动',
        '专题报道',
      ],
      selectIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
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
    align-items: center;

    .pc {
      display: none;
    }

    .mobile {
      display: block;
    }

    .cardWrap {
      margin-top: 20px;

      .cardItem {
        padding: 10px;

        .info {
          margin-left: 10px;
        }
      }
    }

    .nav {
      display: flex;

      .item {
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #ffffff;

        &:not(:first-child) {
          margin-left: 50px;
        }

        &.active {
          font-weight: bold;
        }
      }
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
    width: 80%;
    display: flex;
    align-items: center;

    .mobile {
      display: none;
    }

    .pc {
      display: block;
    }

    .cardWrap {
      width: 80%;

      .cardItem {
        padding: 30px;

        .info {
          margin-left: 30px;
        }
      }
    }

    .nav {
      width: 20%;

      .item {
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #ffffff;
        margin-top: 100px;
        cursor: pointer;

        &.active {
          font-weight: bold;
        }
      }
    }
  }
}

.fouth {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;

  .more {
    width: 110px;
    height: 40px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    justify-content: center;
    position: absolute;
    cursor: pointer;
    img {
      width: 28px;
      margin-left: 5px;
    }
  }

  .content {
    margin: 0 auto;
    padding-top: 180px;

    .cardItem {
      width: 100%;
      height: 209px;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-shrink: 0;

      .info {
        flex: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;

        .title {
          flex: 1;
          font-size: 18px;
          font-weight: bold;
          line-height: 36px;
          letter-spacing: 0px;
          color: #333333;
          // 文本长度处理 begin
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal !important;
          word-wrap: break-word;
          // 文本长度处理 ending
        }

        .desc {
          font-size: 16px;
          font-weight: normal;
          line-height: 30px;
          letter-spacing: 0px;
          color: #666666;
          margin-top: 14px;
          // 文本长度处理 begin
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal !important;
          word-wrap: break-word;
          // 文本长度处理 ending
        }
      }


      .leftTime {
        flex-shrink: 0;

        .month {
          font-size: 30px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
        }

        .year {
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>