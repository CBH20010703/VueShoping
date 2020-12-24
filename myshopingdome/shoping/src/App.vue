<template>
  <div id="app">
    <van-row id="Bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/Category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/Shoping" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </van-row>
    <!-- content start -->
    <div id="top">
      <router-view />
    </div>
    <!-- content end -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 0,
    };
  }, methods: {}
};
</script>
<style>
body {
  background-color: #f7f8fa;
}

#app {
  height: 100vh;
}
</style>
