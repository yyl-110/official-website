<template>
  <div class="eight">
    <CardTitle :title="$t('common.nav_title8')" />
    <div v-html="pageData" class="wrap"></div>
    <!-- <img src="../../../assets/image/map.png" alt="" class="map"> -->
    <Footer />
  </div>
</template>

<script>
import Footer from '../../../components/Footer.vue';
import CardTitle from './cardTitle.vue';
export default {
  components: {
    Footer,
    CardTitle
  },
  props: {
    xnData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pageData () {
      if (this.xnData.length) {
        let content = this.xnData[0].content
        content = content.replace('src="', `src="${process.env.VUE_APP_PUBLIC_URL}`)
        return content
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.eight {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 240px;
  overflow: hidden;

  .wrap {
    height: 450px !important;
    width: auto !important;
    margin: 0 auto;
    overflow: hidden;
   ::v-deep p {
      img {
        object-fit: cover !important;
        height: 100%;
      }
    }
  }
}
</style>