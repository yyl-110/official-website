<template>
  <div class="siven">
    <CardTitle title="图片鉴赏" />
    <div class="content">
      <el-carousel class="carousel" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="imgList">
            <div class="imgwrap" v-for="item in 5">
              <img :src="require(`../../../assets/image/p${item}.png`)" alt="" class="img">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import CardTitle from './cardTitle.vue';
export default {
  components: { CardTitle }
}
</script>

<style lang="scss" scoped>
.siven {
  width: 100%;
  height: 100%;
  padding-top: 80px;

  /* mobile */
  @media screen and (max-width: 768px) {
    .content {
      width: 90%;
      margin: 0 auto;
      padding-top: 200px;

      .imgList {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .imgwrap {
          width: 20%;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }


  /* pc */
  @media screen and (min-width: 768px) {

    .content {
      width: 90%;
      margin: 0 auto;
      padding-top: 240px;

      .imgList {
        width: 100%;
        display: flex;
        align-items: center;

        .imgwrap {
          width: 20%;
          height: 470px;
          flex-shrink: 0;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  ::v-deep.carousel {
    height: 470px;
    width: 100%;
    padding: 0 120px;

    .el-carousel__arrow {
      width: 50px;
      height: 50px;
      background: #3CB4D6;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0;

      &.el-carousel__arrow--left {
        left: -80px;
      }

      &.el-carousel__arrow--right {
        right: -80px;
      }
    }

    .el-carousel__container {
      height: 470px !important;
    }

    .el-carousel__indicators {
      display: none;
    }

  }
}

::v-deep.carousel {
  .el-carousel__arrow {
    // display: block !important;
  }

  .el-carousel__indicators {
    display: none;
  }

}
</style>