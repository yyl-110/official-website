<template>
  <div class="common_banner">
    <el-carousel class="carousel" height="100%">
      <el-carousel-item v-for="item in (bannerList.length ? bannerList : list)" :key="item.id">
        <img :src="item.imgUrl | imgFilter" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="mask"></div>
  </div>
</template>

<script>
import { getData } from '../api'

export default {
  data () {
    return {
      list: []
    }
  },
  filters: {
    imgFilter (val) {
      return process.env.VUE_APP_PUBLIC_URL + val
    }
  },
  computed: {
    bannerList () {
      let bannerList = []
      try {
        bannerList = JSON.parse(localStorage.getItem('bannerList'))
      } catch (error) {
        bannerList = []
      }
      return bannerList || []
    }
  },
  methods: {
    async getBanner () {
      const res = await getData({ code: 'ly_lm_dbdh' })
      if (res.code === 0) {
        this.list = res.data.list
        localStorage.setItem('bannerList', JSON.stringify(this.list))
      }
    },
  },
  created () {
    try {
      const list = JSON.parse(localStorage.getItem('bannerList')) || []
      if (list.length === 0) {
        this.getBanner()
      }
    } catch (error) {
      this.getBanner()
      console.log('error:', error)
    }
  },

}
</script>

<style lang="scss" scoped>
/* pc */
@media screen and (min-width: 1023px) {
  .common_banner {
    height: 500px;

    .app_introduce {
      position: absolute;
      top: 180px;
      left: 205px;
      z-index: 3;

      .aim {
        font-size: 18px;
        color: #fff;
        margin-top: 20px;
      }

      .title_en {
        font-size: 12px;
        color: #f2f2f2;
        margin-top: 12px;
      }

      .title {
        height: 40px;
        font-size: 38px;
        color: #fff;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .common_banner {
    height: 260px;

    .app_introduce {
      position: absolute;
      top: 60px;
      left: 40px;
      z-index: 3;

      .aim {
        font-size: 14px;
        color: #fff;
        margin-top: 20px;
      }

      .title_en {
        font-size: 12px;
        color: #f2f2f2;
        margin-top: 12px;
      }

      .title {
        height: 40px;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
}

.common_banner {
  background-size: cover;
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


  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 76, 43, .1);
    z-index: 3;
  }
}
</style>