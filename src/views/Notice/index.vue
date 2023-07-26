<template>
  <div class="detail">
    <common-banner />
    <div class="wrap">
      <div class="content">
        <div id="print" style="width: 100%;">
          <div class="title" style="height: 50px; text-align: center;">{{ notice.noticeTitle }}</div>
          <div class="info" style="display: flex;align-items: center;justify-content: space-around;">
            <span class="pub_date"><span>发布日期: {{ notice.createTime }}</span></span>
            <sapn class="source"><span>来源: {{ notice.createBy }}</span></sapn>
          </div>
          <div class="img_txt" v-html="notice.noticeContent"></div>
        </div>
        <div class="bottom_wrp" style="width: 100%;">
          <div class="bottom">
            <div class="print" @click="print"><i class="el-icon-printer" style="color: rgb(0, 133, 76);"></i> <span
                class="txt">打印本页</span></div>
            <div class="close" @click="close"><i class="el-icon-circle-close" style="color: rgb(228, 116, 112);"></i>
              <span class="txt">关闭</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { getNoticeList } from '../../api';
import CommonBanner from '../../components/CommonBanner.vue';
import Footer from '../../components/Footer.vue';
import printJS from 'print-js'
export default {
  components: {
    CommonBanner, Footer
  },
  data () {
    return {
      notice: {}
    }
  },
  created () {
    this.getNotice()
  },
  methods: {
    async getNotice () {
      const res = await getNoticeList()
      if (res.code === 0) {
        try {
          this.notice = res.data.find(i => i.noticeId === Number(this.$route.query.id))
        } catch (error) {
          console.log('error:', error)
        }
      }
    },
    print () {
      printJS({
        printable: 'print',
        type: 'html',
        scanStyles: false,
        targetStyles: ['*'],
        documentTitle: this.notice.noticeTitle,
        ignoreElements: ['no-print', 'bc', 'gb']
      })
    },
    close () {
      window.close()
    },
  }

}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  padding-bottom: 220px;

  .wrap {
    min-height: 400px;


    .bottom_wrp {
      padding: 0 360px;
      box-sizing: border-box;
      position: absolute;
      bottom: 30px;

      .bottom {
        margin-top: 23px;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-end;
        padding-right: 40px;

        .tet {
          margin-left: 6px;
        }

        .close {
          width: 110px;
          height: 40px;
          border: 1px solid #e47470;
          box-sizing: border-box;
          color: #e47470;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .print {
          height: 40px;
          border: 1px solid #00854c;
          box-sizing: border-box;
          color: #00854c;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: auto;
          min-width: 110px;
          margin-right: 20px;
          padding: 0 5px;
        }
      }
    }

    .content {
      padding: 0 360px;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      justify-content: flex-start;
      position: relative;
      margin-top: 20px;

      .title {
        color: #333;
        font-size: 24px;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }

      .info {
        width: 100%;
        height: 45px;
        background: #daecfb;
        font-size: 14px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 250px;

        div {
          white-space: nowrap;
        }
      }

      .img_txt {
        font-size: 16px;
        color: #333;
        padding-bottom: 150px;
        padding-top: 20px;
      }
    }

    /* mobile */
    @media screen and (max-width: 1023px) {
      .content {
        padding: 10px !important;

        .title {
          font-size: 14px !important;
        }

        .img_txt {
          margin-top: 20px !important;
        }

        .bottom_wrp {
          padding: 25px 160px 0 !important;

          .bottom {
            margin-top: 10px !important;
            padding-right: 0 !important;

            .close {
              font-size: 12px !important;
              width: 80px !important;
              min-width: 80px;
              height: 24px !important;
            }

            .print {
              font-size: 12px !important;
              height: 24px !important;
              min-width: 80px !important;
            }
          }
        }

        .info {
          font-size: 12px !important;
          flex-direction: column;
          height: auto !important;
          line-height: 24px !important;
          align-items: flex-start !important;
          padding: 0 10px !important;

          div {
            white-space: nowrap;
          }
        }
      }

      .breadcrumb {
        padding: 20px !important;
        height: 24px !important;

        .right_bread {
          font-size: 12px !important;
          margin-left: 0 !important;
        }

      }
    }
  }
}
</style>