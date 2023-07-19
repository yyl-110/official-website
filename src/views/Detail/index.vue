<template>
  <div class="detail">
    <common-banner />
    <Footer />
  </div>
</template>

<script>
import CommonBanner from '../../components/CommonBanner.vue';
import Footer from '../../components/Footer.vue';
export default {
  components: { CommonBanner, Footer }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  position: relative;
  padding-bottom: 220px;
}
</style>