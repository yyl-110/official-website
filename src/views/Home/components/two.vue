<template>
  <div class="two">
    <cardTitle title="景区概括" />
    <div class="btn more">更多<img src="../../../assets/image/right.png" alt=""></div>
    <div class="left">
      <div class="bg"></div>
      <img src="../../../assets/image/two-bg.png" alt="">
    </div>
    <div class="content">
      <p class="text">
        盐城丹顶鹤湿地生态旅游区是全世界最大的丹顶鹤越冬地，我国最大的滩涂湿地保护区之一，也是国际濒危物种黑嘴鸥的重要繁殖地。丹顶鹤，候鸟，国家一级重点保护动物，全球易危物种，仅有2000多只，盐城保护区内丰足的食物、安全隐蔽的栖息环境成了丹顶鹤越冬的终点站，每年冬天，在此越冬的丹顶鹤多达800只左右，场面非常壮观，也频频引得四面八方的摄影者、爱鸟者前来观赏。除丹顶鹤外，保护区内还有白鹤、河鹿等多种珍稀动物，对物种保护和研究都极为重要，享有东部沿海“国家重要湿地基因库”之称，是国际重要鸟区、国际重要生物多样性富集的热点地区。同时，旅游区也是盐城自然保护区实践生态旅游和环境教育功能的平台，以保护区独特的湿地景观和丰富的鹤文化为资源，打造“东方湿地、仙鹤家园”为品牌，成为科普学习的重要场所。盐城丹顶鹤湿地生态旅游区位于黄尖镇新洋港望鹤路，占地约400公顷。区内有植物450种，鸟类有402种，两栖爬行类26种，鱼类284种，哺乳类31种。其中国家重点保护的一级野生动物有丹顶鹤、白头鹤、白鹤、东方白鹤、黑鹤、中华秋沙鸭、遗鸥、大鸨、白肩鹏、金鹏、白尾海鹏、糜鹿、中华朗、白朗共14种，二级国家重点保护野生动物有85种，如撞、黑脸琵警、大天鹅、小青脚、驾鸯、灰鹤等。设有丹顶鹤主题馆、望鹤亭、水禽湖、中国鹤园、丹顶鹤驯养中心、亲水木栈道、环湖游道、柳树林(观鸟巢)、槐树林(观林鸟)等景点，方便游客近距离观赏丹顶鹤。
      </p>
      <div class="btn">更多<img src="../../../assets/image/right.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import cardTitle from './cardTitle.vue';
export default {
  components: {
    cardTitle
  }
}
</script>

<style lang="scss" scoped>
/* mobile */
@media screen and (max-width: 1023px) {
  .two {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    position: relative;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #ffffff;
      width: 110px;
      height: 30px;
      background-color: #3cb4d6;
      cursor: pointer;
      position: absolute;
      right: 24px;
      top: 120px;

      img {
        width: 28px;
        height: 11px;
        margin-left: 5px;
      }
    }

    .left {
      flex-shrink: 0;
      display: flex;
      display: none;
    }

    .content {
      padding-top: 80px;

      .text {
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0px;
        color: #333333;
        white-space: pre-wrap;
      }

      .btn {
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #ffffff;
        width: 110px;
        height: 30px;
        background-color: #3cb4d6;
        cursor: pointer;

        img {
          width: 28px;
          height: 11px;
          margin-left: 5px;
        }
      }
    }
  }
}

/* pc */
@media screen and (min-width: 1023px) {
  .two {
    display: flex;
    align-items: center;
    padding: 0 160px;

    &>.btn {
      display: none;
    }

    .content {
      padding-left: 97px;

      .text {
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0px;
        color: #333333;
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #ffffff;
        margin-top: 32px;
        width: 110px;
        height: 40px;
        background-color: #3cb4d6;
        cursor: pointer;

        img {
          width: 28px;
          height: 11px;
          margin-left: 5px;
        }
      }
    }

    .left {
      flex-shrink: 0;
      display: flex;

      .bg {
        width: 272px;
        height: 350px;
        background: #3CB4D6;
      }

      img {
        width: 417px;
        height: 479px;
        background-color: #333333;
        margin-left: -207px;
        margin-top: 65px;
      }
    }
  }
}

.two {
  width: 100%;
  height: 100%;
  padding-top: 80px;

}
</style>