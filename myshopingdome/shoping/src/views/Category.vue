<template>
  <div id="ShowList">
    <nav-bar :Title="header" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <h1>这是列表页</h1>

    </van-pull-refresh>

  </div>
</template>
<style scoped>
.van-pull-refresh {
  overflow: visible;
}
</style>
<script>
import NavBar from "../components/NavBar";
import { Toast } from 'vant';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      header: "List",
      count: 0,
      isLoading: false,
    }
  }, methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }
}
</script>