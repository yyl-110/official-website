<template>
  <div class="six">
    <CardTitle :title="$t('common.nav_title6')" />
    <div class="content">
      <div class="item" v-for="(item, index) in navList" :key="item.id" @click="goToList(item.id)">
        <img :src="item.imgUrl | imgFilter" alt="">
        <p class="text">{{ $i18n.locale === 'zh' ? item.name : item.enName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from '../../../api';
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
      ],
      navList: []
    }
  },
  filters: {
    imgFilter (val) {
      return process.env.VUE_APP_PUBLIC_URL + val
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const res = await getData({ code: 'ly_lm_lyfw' })
      if (res.code === 0) {
        this.navList = res.data.list
      }
    },
    goToList (id) {
      this.$store.commit('setActiveNavIndex', 4)
      this.$router.push({
        path: '/list',
        query: {
          code: 'ly_lm_lyfw',
          id
        }
      })
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
}
</style>