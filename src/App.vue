<template>
  <div id="app">
    <el-container>
      <mainHeader />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mainHeader from './components/Header.vue';
export default {
  components: { mainHeader },
  data () {
    return {
      router: true,
      isShow: false,
    };
  },

};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.el-main {
  padding: 0 !important;
}
</style>
