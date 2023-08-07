<template>
  <div class="nav">
    <div class="item">
      <img src="" alt="">
      <p class="title">购票入口</p>
    </div>
    <div class="item">
      <img src="" alt="">
      <p class="title">联系我们</p>
    </div>
  </div>
</template>

<script>
import { getData } from '../api'

export default {
  data () {
    return {

    }
  },
  created () {
    this.getNavList()
  },
  methods: {
    async getNavList () {
      const res = await getData({ code: 'ly_lm_cbdh' })
      if (res.code === 0) {
        console.log('res:', res)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 76px;
  position: fixed;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      width: 72px;
      height: 76px;
      flex-shrink: 0;
    }

    p {
      font-size: 19px;
      color: #333;
      margin-top: 12px;
    }

    &:not(:first-child) {
      margin-top: 50px;
    }
  }
}
</style>