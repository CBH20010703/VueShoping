<template>
  <div>
    <nav-bar :Title="header" />
    <div class="User-header">
      <div class="User-warp">
        <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p class="LogoinStatus" v-if="isLogoin">登录/注册</p>
      </div>
    </div>
    <div>
      <van-cell title="查看全部" is-link to="/" />
      <tool-bar />
    </div>
  </div>
</template>
<style scoped>
.User-header {
  background: linear-gradient(to right, #3cabec, #634bf6);
  background-color: #d7bc85;
  padding: 1rem;
  margin: 10px 0;
}
.van-cell--clickable {
  border-bottom: 1px solid #f1f2fc;
}
.LogoinStatus {
  font-size: 1.3rem;
  color: #ffff;
  padding: 0 1rem;
}
.User-warp {
  display: flex;
}
</style>
<script>
import NavBar from "../components/NavBar.vue";
import ToolBar from '../components/ToolBar.vue';
export default {
  components: {
    NavBar,
    ToolBar,
  },
  data() {
    return {
      header: "个人中心",
      isLogoin: true,
    }
  }
}
</script>