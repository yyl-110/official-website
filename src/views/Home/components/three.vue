<template>
  <div class="three">
    <cardTitle title="景点介绍" />
    <el-carousel class="carousel" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="imgList">
          <div class="imgwrap">
            <img src="../../../assets/image/jd1.png" alt="" class="img">
            <div class="content">
              <h1>洋沙湖欢乐水世界</h1>
              <div class="info">
                洋沙湖红色文化小镇，位于洋沙湖国家湿地公园东部，临湖而建，占地面积近6000平方米，街区长约300米，是一个集党性教育、红色文化教育、爱国主义教育、思想道德教育于一体的红色文化小镇。小镇分为“建党”和“建军”两个主题版块，分别记录了中国共产党和中国人民解放军自成立以来的光辉历程，并拥有与之配套的多个党建活动室和会议室。是我省重要的红色文化研学和党建教育基地。
              </div>
              <div class="more">
                MORE <img src="../../../assets/image/right.png" alt="">
              </div>
            </div>
          </div>
          <div class="imgwrap">
            <img src="../../../assets/image/jd2.png" alt="" class="img">
            <div class="content">
              <h1>洋沙湖欢乐水世界</h1>
              <div class="info">
                洋沙湖红色文化小镇，位于洋沙湖国家湿地公园东部，临湖而建，占地面积近6000平方米，街区长约300米，是一个集党性教育、红色文化教育、爱国主义教育、思想道德教育于一体的红色文化小镇。小镇分为“建党”和“建军”两个主题版块，分别记录了中国共产党和中国人民解放军自成立以来的光辉历程，并拥有与之配套的多个党建活动室和会议室。是我省重要的红色文化研学和党建教育基地。
              </div>
              <div class="more">
                MORE <img src="../../../assets/image/right.png" alt="">
              </div>
            </div>
          </div>
          <div class="imgwrap">
            <img src="../../../assets/image/jd3.png" alt="" class="img">
            <div class="content">
              <h1>洋沙湖欢乐水世界</h1>
              <div class="info">
                洋沙湖红色文化小镇，位于洋沙湖国家湿地公园东部，临湖而建，占地面积近6000平方米，街区长约300米，是一个集党性教育、红色文化教育、爱国主义教育、思想道德教育于一体的红色文化小镇。小镇分为“建党”和“建军”两个主题版块，分别记录了中国共产党和中国人民解放军自成立以来的光辉历程，并拥有与之配套的多个党建活动室和会议室。是我省重要的红色文化研学和党建教育基地。
              </div>
              <div class="more">
                MORE <img src="../../../assets/image/right.png" alt="">
              </div>
            </div>
          </div>
          <div class="imgwrap">
            <img src="../../../assets/image/jd3.png" alt="" class="img">
            <div class="content">
              <h1>洋沙湖欢乐水世界</h1>
              <div class="info">
                洋沙湖红色文化小镇，位于洋沙湖国家湿地公园东部，临湖而建，占地面积近6000平方米，街区长约300米，是一个集党性教育、红色文化教育、爱国主义教育、思想道德教育于一体的红色文化小镇。小镇分为“建党”和“建军”两个主题版块，分别记录了中国共产党和中国人民解放军自成立以来的光辉历程，并拥有与之配套的多个党建活动室和会议室。是我省重要的红色文化研学和党建教育基地。
              </div>
              <div class="more">
                MORE <img src="../../../assets/image/right.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import cardTitle from './cardTitle.vue';
export default {
  components: { cardTitle }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1023px) {
  .carousel {
    width: 80%;
    margin: 300px auto 0;
  }

  .imgList {

    .imgwrap {
      &:not(:last-child) {
        margin-right: 29px;
      }

      .content {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        color: #fff;
        background-color: rgba(60, 180, 214, 0.9);
        padding-top: 100px;
        padding: 100px 30px 0;
        opacity: 0;

        .info {
          font-size: 14px;
          line-height: 24px;
          margin-top: 30px;
        }

        .more {
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 24px;
          position: absolute;
          bottom: 30px;

          img {
            width: 19px;
          }
        }
      }
    }
  }

}

/* mibile */
@media screen and (max-width: 1023px) {
  .three {
    .carousel {
      width: 80%;
      margin: 200px auto 0;
    }

    .imgList {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      .imgwrap {
        width: 45% !important;
        height: 50% !important;
        display: inline-block;

        .content {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 120px;
          background-color: rgba(0, 0, 0, .4);
          color: #fff;
          padding: 5px;

          h1 {
            font-size: 18px;
          }

          .more {
            display: flex;
            align-items: center;
            font-size: 14px;
            justify-content: flex-end;
            margin-top: 5px;

            img {
              width: 20px;
            }
          }

          .info {
            font-size: 14px;

            // 文本长度处理 begin
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            margin-top: 10px;
          }
        }

        &:nth-child(3) {
          .img {
            margin-top: 20px;
          }
        }

        &:nth-child(4) {
          .img {
            margin-top: 20px;
          }
        }
      }
    }
  }
}


::v-deep.carousel {
  overflow: hidden;
  padding-bottom: 100px;
  height: 610px;

  .el-carousel__container {
    height: 510px !important;
  }

  .el-carousel__indicators--horizontal {
    bottom: 0;
    .el-carousel__indicator--horizontal {
      padding: 0 10px;
    }
    .el-carousel__button {
      width: 8px;
      height: 8px;
      background-color: #3cb4d6;
    }
  }
}

.three {
  width: 100%;
  height: 100%;

  .imgList {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    .imgwrap {
      width: 25%;
      height: 100%;
      position: relative;


      &:hover {
        .content {
          transition: opacity 0.5s;
          opacity: 1;
        }
      }



      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>