<template>
  <div class="common_banner">
    <div class="mask"></div>
    <div class="app_introduce">
      <div class="title">江苏盐城湿地珍禽自然保护区科普宣教</div>
      <div class="title_en">SCIENCE POPULARIZATION AND EDUCATION OF YANCHENG WETLAND RARE BIRD NATURE RESERVE IN JIANGSU
        PROVINCE</div>
      <div class="aim"><span>——</span> <span>用真心服务于自然科学爱好者</span></div>
    </div>
  </div>
</template>

<script>
export default {

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
    background: url('../assets/image/main-bg2.png') no-repeat bottom;
    background-size: cover;
    position: relative;


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