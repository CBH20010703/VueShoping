<template>
  <div>
    <van-row id="Bottom">
      <van-tabbar active-color="#ee0a24" v-model="active">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/Category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/Shoping" badge="1" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/Home" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </van-row>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  mounted() {
    console.log(this.$route.path);
    switch (this.$route.path) {
      case "/":
        this.active = 0
        break;
      case "/Category":
        this.active = 1
        break;
      case "/Shoping":
        this.active = 2
        break;
      case "/Home":
        this.active = 3
        break;
      default:
        this.active = 0;
    }
    console.log(this.$route.path)
  }
}
</script>