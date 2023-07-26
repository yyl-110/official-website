<template>
  <div class="two">
    <cardTitle :title="$t('common.nav_title2')" />
    <div class="btn more" @click="goTo">{{ $t('common.more') }}<img src="../../../assets/image/right.png" alt=""></div>
    <div class="left">
      <div class="bg"></div>
      <img src="../../../assets/image/two-bg.png" alt="">
    </div>
    <div class="content">
      <p class="text">
        {{ articelDetail.introduction }}
      </p>
      <div class="btn" @click="goTo">{{ $t('common.more') }}<img src="../../../assets/image/right.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import cardTitle from './cardTitle.vue';
export default {
  components: {
    cardTitle
  },
  props: {
    articelDetail: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    goTo () {
      this.$store.commit('setActiveNavIndex', 1)
      this.$emit('goToList', { subId: this.articelDetail.id, type: 1 })
    }
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