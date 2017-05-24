<template>
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    window.vueLoaded = true;
    this.$refs.app.style.opacity = '1';
  }
}
</script>

<style>
@font-face {
  font-family: "AaWanWan";
  src: url('./assets/font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "AaWanWan";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
