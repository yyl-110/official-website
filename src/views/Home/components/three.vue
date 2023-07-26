<template>
  <div class="three">
    <cardTitle :title="$t('common.nav_title3')" />
    <el-carousel class="carousel" :autoplay="false">
      <el-carousel-item v-for="(item, index) in arrList" :key="index">
        <div class="imgList">
          <div class="imgwrap" v-for="val in item" :key="val.id" @click="goToDetail(val.id)">
            <img :src="val.imgUrl | imgFilter" alt="" class="img">
            <div class="content">
              <h1>{{ val.title }}</h1>
              <div class="info">
                {{ val.introduction }}
              </div>
              <div class="more">
                {{ $t('common.more') }} <img src="../../../assets/image/right.png" alt="">
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
import _ from 'lodash'
export default {
  components: { cardTitle },
  props: {
    attractions: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    imgFilter (val) {
      return process.env.VUE_APP_PUBLIC_URL + val
    }
  },
  computed: {
    arrList () {
      return _.chunk(this.attractions, 4);
    }
  },
  methods: {
    goToDetail (id) {
      const routeUrl = this.$router.resolve({
        path: '/detail',
        query: {
          id
        }
      })
      window.open(routeUrl.href, "_blank");
    }
  }
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