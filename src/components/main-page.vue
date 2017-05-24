<template>
  <div class="root">
    <div class="title">
      <h1>1037</h1>
      <h2>我的独家记忆</h2>
    </div>
    <router-view></router-view>
    <div class="bottom">
      <img src="../assets/bottom-flowers.png"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: ''
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.title {
  padding-top: 2rem;
}
h1 {
  padding-top: 4rem;
  margin: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  background: url('../assets/1037.png') no-repeat 20%;
  background-size: auto 4rem;
}
h2 {
  padding-left: 2rem;
  margin: 0;
}
router-view {
  flex: 1;
}
.bottom {
  font-size: 0;
}
.bottom > img {
  width: 100%;
  height: auto;
}
</style>
