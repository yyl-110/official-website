<template>
  <div class="six">
    <CardTitle title="旅游服务" />
    <div class="content">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.imgUrl" alt="">
        <p class="text">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from './cardTitle.vue';
export default {
  components: { CardTitle },
  data () {
    return {
      list: [
        { imgUrl: require('../../../assets/image/mpyd.png'), title: '门票预订' },
        { imgUrl: require('../../../assets/image/jtzn.png'), title: '交通指南' },
        { imgUrl: require('../../../assets/image/cyfw.png'), title: '餐饮服务' },
        { imgUrl: require('../../../assets/image/jdzs.png'), title: '酒店住宿' },
        { imgUrl: require('../../../assets/image/xxyl.png'), title: '休闲娱乐' },
        { imgUrl: require('../../../assets/image/lygl.png'), title: '旅游攻略' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.six {
  width: 100%;
  height: 100%;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    .content {
      padding-top: 100px;
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item {
        width: 45%;
        height: 226px;
        background: #3CB4D6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 65px;
          height: 65px;
        }

        .text {
          margin-top: 30px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #fff;
        }

        &:not(:first-child, :nth-child(2)) {
          margin-top: 10px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      padding-top: 350px;
      width: 80%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;


      .item {
        width: 226px;
        height: 226px;
        background: #3CB4D6;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.3s ease-in;

        &:hover {
          opacity: .8;
        }

        img {
          width: 65px;
          height: 65px;
        }

        .text {
          margin-top: 35px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #fff;
        }
      }
    }
  }
}</style>