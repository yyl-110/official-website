<template>
  <div class="eight">
    <CardTitle title="虚拟游" />
    <img src="../../../assets/image/map.png" alt="" class="map">
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
  }
}
</script>

<style lang="scss" scoped>
.eight {
  width: 100%;
  height: 100%;

  .map {
    width: 70%;
    display: block;
    height: 555px;
    margin: 200px auto 0;
  }
}
</style>