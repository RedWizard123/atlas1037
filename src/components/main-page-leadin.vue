<template>
  <div class="leadin" ref="leadinRoot">
    <div class="leadin-text">
      <img src="../assets/leadin-text.png">
    </div>
    <button class="leadin-button" @click="jumpToSex">开启回忆</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToSex () {
      var self = this;
      self.$refs.leadinRoot.classList.add('fade');
      setTimeout(function () {
        self.$refs.leadinRoot.classList.remove('fade');
        self.$router.push('/sex');
      }, 950);
    }
  }
}
</script>

<style scoped>
@keyframes scale-button {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
.leadin {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.leadin.fade .leadin-button{
  animation-name: scale-button;
  animation-duration: 1s;
}
.leadin.fade .leadin-text {
  opacity: 0;
}
.leadin-text {
  width: 80%;
  display: block;
  margin: 0 auto;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  transition: opacity 0.5s 0.5s;
}
.leadin-text > img {
  width: 100%;
}
.leadin-button {
  height: 4rem;
  width: 12rem;
  border: 0;
  margin: 0 auto;
  border-radius: 0.4rem;
  background: #F1ABAD;
  color: #FFFFFF;
  font-size: 1.5rem;
  outline: none;
}
</style>
