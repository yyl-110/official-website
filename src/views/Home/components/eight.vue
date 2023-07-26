<template>
  <div class="eight">
    <CardTitle :title="$t('common.nav_title8')" />
    <div v-html="pageData" class="wrap"></div>
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
  justify-content: center;
  padding-bottom: 240px;
  overflow: hidden;
  padding-top: 200px;

  .wrap {
    // height: 450px !important;
    width: 1400px !important;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
   ::v-deep p {
      img {
        object-fit: contain !important;
        height: 100%;
      }
    }
  }
}
</style>