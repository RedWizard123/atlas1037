<template>
  <div class="sex">
    <div class="sex-wrap" :class="{ 'fly': sexLoaded, 'float': sexFloat }">
      <div class="boy" @click="boyOnClick">
        <div ref="boy">
          <h3>～boy</h3>
          <img src="../assets/boy.png"/>
        </div>
      </div>
      <div class="girl" @click="girlOnClick">
        <div  ref="girl">
          <h3>～girl</h3>
          <img src="../assets/girl.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sexLoaded: false,
      sexFloat: false
    };
  },
  mounted () {
    var self = this;
    setTimeout(function () {
      self.sexLoaded = true;
      setTimeout(function () {
        self.sexFloat = true;
      }, 500);
    }, 200);
  },
  methods: {
    boyOnClick () {
      var self = this;
      this.$refs.boy.className = 'jump';
      setTimeout(function () {
        self.$refs.boy.className = '';
      }, 400);
    },
    girlOnClick () {
      var self = this;
      this.$refs.girl.className = 'jump';
      setTimeout(function () {
        self.$refs.girl.className = '';
      }, 400);
    }
  }
}
</script>

<style scoped>
@keyframes tip-blink {
  0% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
  75% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
@keyframes float {
  0% { transform: translateY(0rem); }
  25% { transform: translateY(-0.5rem); }
  50% { transform: translateY(0rem); }
  75% { transform: translateY(-0.5rem); }
  100% { transform: translateY(0rem); }
}
@keyframes jump {
  0% { transform: translateY(0rem); }
  50% { transform: translateY(-4rem); }
  100% { transform: translateY(0rem); }
}
.sex {
  flex: 1;
  position: relative;
}
.sex-wrap {
  position: absolute;
  bottom: 8rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.boy h3 {
  position: absolute;
  margin: 0;
  padding: 1.5rem 0 0 3rem;
  overflow: hidden;
  height: 0;
  width: 0;
  left: 80%;
  background: url('../assets/boy-tip.png') no-repeat;
  background-size: 100%;
  animation-name: tip-blink;
  animation-duration: 4s;
  animation-iteration-count: 100000;
  animation-delay: 0.2s;
}
.girl h3 {
  position: absolute;
  margin: 0;
  padding: 2rem 0 0 4rem;
  overflow: hidden;
  height: 0;
  width: 0;
  left: 60%;
  top: -1rem;;
  background: url('../assets/girl-tip.png') no-repeat;
  background-size: 100%;
  animation-name: tip-blink;
  animation-duration: 4s;
  animation-iteration-count: 100000;
  animation-delay: 0.1s;
}
.girl,
.boy {
  position: relative;
  width: 7rem;
  height: 7rem;
  display: inline-block;
  margin: 0 2rem;
  transition: transform 0.3s 0.1s ease-in-out;
}
.float .girl,
.float .boy {
  animation-name: float;
  animation-duration: 10s;
  animation-iteration-count: 100000;
}
.jump {
  animation-name: jump;
  animation-duration: 0.4s;
}
.boy {
  transform: translateX(-200%);
  animation-delay: 0.2s;
}
.girl {
  transform: translateX(200%);
  animation-delay: 0.6s;
}
.sex-wrap.fly .boy,
.sex-wrap.fly .girl {
  transform: translateX(0);
}
.girl img {
  width: 80%;
}
.boy img {
  width: 100%;
}
</style>
