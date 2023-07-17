<template>
  <div class="footer">
    <div class="left">
      <p>友情链接：江苏盐城湿地珍禽国家级自然保护区</p>
      <p>
        <span>咨询热线: 400-6066-333</span>
        <span>预定热线:400-6066-333</span>
        <span>投诉电话: 400-6066-333</span>
      </p>
      <p>地址:盐城市亭湖区..</p>
    </div>
    <div class="qrcode">
      <div class="item">
        <span>微信公众号</span>
        <img src="" alt="">
        <span>了解更多</span>
      </div>
      <div class="item">
        <span>下载APP</span>
        <img src="" alt="">
        <span>更多信息</span>
      </div>
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
  .footer {
    padding: 0 160px;

    .qrcode {
      width: 301px;
      padding: 0 30px;


      .item {
        span {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.6;
        }

        img {
          width: 100px;
          height: 100px;
          display: block;
          margin: 12px 0;
        }
      }
    }

    .left {
      p {

        &:not(:first-child) {
          margin-top: 33px;
        }
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .footer {
    padding: 0 20px !important;

    .qrcode {
      padding: 0 10px;
      width: 200px !important;

      .item {
        span {
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.6;
        }

        img {
          width: 60px;
          height: 60px;
          display: block;
          margin: 8px 0;
        }
      }
    }

    .left {
      p {
        span {
          display: block;
        }

        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  }
}

.footer {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  background-color: #414141;
  position: absolute;
  left: 0;
  bottom: 0;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.6;
    }

  }

  .qrcode {

    height: 200px;
    background-color: rgba(97, 97, 97, .3);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

    }
  }
}
</style>