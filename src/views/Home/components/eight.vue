<template>
  <div class="eight">
    <img src="../../../assets/image/map.png" alt="" class="map">
    <Footer />
  </div>
</template>

<script>
import Footer from '../../../components/Footer.vue';
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.eight {
  width: 100%;
  height: 100%;

  .map {
    width: 80%;
    display: block;
    margin: 180px auto 0;
  }
}
</style>