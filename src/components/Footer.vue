<template>
  <div class="footer">
    <div class="left">
      <p>友情链接：江苏盐城湿地珍禽国家级自然保护区</p>
      <p>
        <span>咨询热线: 400-6066-333</span>
        <span>预定热线:400-6066-333</span>
        <span>投诉电话: 400-6066-333</span>
      </p>
      <p>地址:盐城市亭湖区黄尖镇兴农村委东</p>
    </div>
    <div class="qrcode">
      <div class="item">
        <span>微信公众号</span>
        <img src="@/assets/image/qrcode.png" alt="">
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
        span {
          &:not(:first-child) {
            margin-left: 54px;
          }
        }

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




}

.footer .left {
  display: flex;
  flex-direction: column;
  justify-content: center;



}

.footer .left p {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.6;
}

.footer .qrcode {
  height: 200px;
  background-color: rgba(97, 97, 97, .3);
  display: flex;
  align-items: center;
  justify-content: space-between;


}

.qrcode .item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

}
</style>