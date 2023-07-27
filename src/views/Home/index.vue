<template>
  <div class="home">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one">
        <one :bannerList="bannerList" />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <two :articelDetail="articelDetail" @goToList="goToList" />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <three :attractions="attractions" />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-fouth">
        <fouth />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-five">
        <five />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-six">
        <six />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-siven">
        <siven :picList="picList" />
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-eight">
        <eight :xnData="xnData" />
      </swiper-slide>
    </swiper>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import one from "./components/one.vue";
import two from "./components/two.vue";
import eight from "./components/eight.vue";
import three from "./components/three.vue";
import fouth from "./components/fouth.vue";
import five from "./components/five.vue";
import six from "./components/six.vue";
import siven from "./components/siven.vue";
import { getArticleDetail, getArticleList, getData } from "../../api";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide,
    one,
    two,
    three,
    eight,
    fouth,
    five,
    six,
    siven
  },
  data () {
    return {
      loading: true,
      activeIndex: 0,
      caseList: [],
      newsList: [],
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            this.activeIndex = swiper.activeIndex
            this.$store.commit('setActive', swiper.activeIndex)
          }
        }
      },
      articelDetail: {}, // 景区概况
      attractions: [],
      pageData: [],
      picList: [],
      xnData: [],
      bannerList: []
    };
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  created () {
    this.getBanner()
    this.getOneData()
  },
  mounted () {
  },
  methods: {
    /* 页面跳转 */
    goToList (params) {
      const { subId, type } = params
      const pageData = this.pageData[type - 1]
      this.$router.push({
        path: '/list',
        query: {
          code: pageData.code,
          id: pageData.id
        }
      })
    },
    async getBanner () {
      const res = await getData({ code: 'ly_lm_dbdh' })
      if (res.code === 0) {
        this.bannerList = res.data.list
        localStorage.setItem('bannerList', JSON.stringify(this.bannerList))
      }
    },
    /* 景区概况 */
    async getOneData () {
      const res = await getData({ code: 'ly_lm_zjddh' })
      this.$set(this.pageData, 0, { code: res.data.code, id: res.data.id })
      if (res.data.list.length) {
        const obj1 = res.data.list.find(i => i.name === '景区概括') || {}
        const obj2 = res.data.list.find(i => i.name === '景点介绍') || {}
        const obj3 = res.data.list.find(i => i.name === '景区图片') || {}
        const obj4 = res.data.list.find(i => i.name === '虚拟游') || {}
        /* 景区概括 */
        getArticleList({ columnId: obj1.id, pageSize: 1, pageNum: 10 }).then(list => {
          if (list.code === 0) {
            this.articelDetail = list.data.rows[0]
          }
        })
        /* 景点介绍 */
        getArticleList({ columnId: obj2.id, pageSize: 20, pageNum: 1 }).then(introList => {
          if (introList.code === 0) {
            this.attractions = introList.data.rows
          }
        })
        /* 景区图片 */
        getArticleList({ columnId: obj3.id, pageSize: 20, pageNum: 1 }).then(picData => {
          if (picData.code === 0) {
            this.picList = picData.data.rows
          }
        })
        /* 虚拟 */
        getArticleList({ columnId: obj4.id, pageSize: 20, pageNum: 1 }).then(xnyData => {
          if (xnyData.code === 0) {
            this.xnData = xnyData.data.rows
          }
        })
      }
    },
  }
};
</script>
 
<style lang="scss" scoped>
.swiper-slide {
  font-size: 18px;

  .page {
    text-align: center;
    height: 100px;
    overflow: hidden;

  }
}

//经典案例
.case-item {
  width: 1100px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: 330px;
    height: 250px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;

    &:hover {
      .case-item-hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}

//经典案例hover
.case-item-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }

  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }

  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;

    span {
      color: #fff;
      font-size: 20px;
    }
  }
}

// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }
.slide-one {
  // background: url('../../assets/image/main-bg1.png') no-repeat center;
  background-size: cover;
}

.slide-two {
  background: url('../../assets/image/bg_bl.png') no-repeat center;
  background-size: contain;
}

.slide-three {
  background: url('../../assets/image/bg-three.png') no-repeat bottom;
  background-size: cover;
}

.slide-fouth {
  background: url('../../assets/image/bg_ddh.png') no-repeat center;
  background-size: cover;
}

.slide-five {
  background: url('../../assets/image/bg-more.png') no-repeat bottom;
  background-size: cover;
}

.slide-six {
  background: url('../../assets/image/bg.png') no-repeat bottom;
  background-size: cover;
}

.slide-siven {
  background: url('../../assets/image/bg-more.png') no-repeat bottom;
  background-size: cover;
}

.slide-eight {
  background: url('../../assets/image/bg-more.png') no-repeat bottom;
  background-size: cover;
}

//最新资讯
.news-content {
  width: 1240px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  &-item {
    width: 400px;
    display: flex;
    flex-direction: column;

    .item-img {
      width: 360px;
      height: 230px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-origin: content-box;
      margin: 0 auto;
    }

    .el-divider {
      background-color: #fff;
      height: 3px;

      .el-divider__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 0px;
        color: #fff;
      }
    }

    .item-content {
      width: 360px;
      height: 230px;
      margin: 0 auto;

      //border: 1px solid paleturquoise;
      h3 {
        font-size: 22px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        font-size: 15px;
        height: 80px;
        overflow: hidden;
        margin: 10px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal !important;
        word-wrap: break-word;
      }

      span {
        display: block;
        font-size: 14px;
        text-align: end;
      }

      h3,
      p,
      span {
        color: #fff;
      }
    }
  }
}

.order {
  order: -1;
}

.order-img {
  order: 1;
}
</style>