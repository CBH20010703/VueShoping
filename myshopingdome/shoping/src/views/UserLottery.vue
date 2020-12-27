<template>
  <van-row id="rows">
    <van-col v-for="(item,index) in  9" :key="index" :class="{active :index ==ac}" span="8">
      {{index}}
    </van-col>
    <button @click="clearClassName">抽奖</button>
    <button @click="time">停止</button>
  </van-row>
</template>
<style scoped>
#rows div {
  height: 100px;
  border: 1px solid #ccc;
}
.active {
  background: red;
}
</style>
<script>
export default {
  data() {
    return {
      ac: 0,
      temp: false,
    }
  },

  methods: {
    clearClassName: function () {
      this.temp = false;
      this.temp = this.time - 1;
      if (this.temp == -1) {
        this.temp = 0;
      }

      setInterval(() => {
        if (this.temp) return;
        if (this.ac >= 8) {
          this.ac = 0;
          return
        } this.ac += 1;
        console.log(this.ac)

      }, 300)
      setTimeout(() => {
        this.temp = true;
        this.ac = 5;
        this.time()
      }, 300 * 10)
    }, time: function () {
      console.log("我是" + this.ac)
    }
  }
}
</script>