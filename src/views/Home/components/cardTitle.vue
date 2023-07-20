<template>
  <div class="title">
    <img src="../../../assets/image/products.png" alt="">
    <span class="text" :style="{ color: type === 'wight' ? '#fff' : '' }">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    type: {
      type: String,
      default: 'blue'
    },
    top: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1023px) {
  .title {
    left: 50px;
    top: 90px;
  }
}

@media screen and (min-width: 1023px) {
  .title {
    left: 150px !important;
    top: 160px;
  }
}

.title {
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;

  img {
    width: 227px;
  }

  .text {
    font-size: 40px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #3CB4D6;
    margin-top: -20px;
    position: relative;
    z-index: 10;
  }
}
</style>