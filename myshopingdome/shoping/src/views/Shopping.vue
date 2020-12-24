<template>
  <div>
    <nav-bar :Title="header" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- card start -->
      <div id="card-box">

        <van-card :num="num" card-background-color="#fff" :price="moeny" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-stepper v-model="num" theme="round" button-size="22" disable-input />
          </template>
        </van-card>

      </div>
      <!-- card end -->
    </van-pull-refresh>
    <van-submit-bar :price="getPrice" button-text="提交订单" />
  </div>
</template>
<style scoped>
.van-submit-bar {
  bottom: 50px;
}
.van-pull-refresh {
  overflow: visible;
}
.van-card {
  background: #fff;
}
#card-box {
  padding-bottom: 110px;
}
.van-tag {
  margin: 0 3px;
}
</style>
<script>
import NavBar from "../components/NavBar";
import { Toast } from 'vant';
export default {
  components: {
    NavBar
  }, data() {
    return {
      header: "购物车",
      count: 0,
      isLoading: false,
      moeny: 100,
      num: 1
    }
  },
  methods: {
    addGoods() {
      this.num += 1;
    },
    removeGoods() {
      if (this.num == 1) {
        return alert("无法进行删除了 已经是最小了")
      }
      this.num -= 1;
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }, computed: {
    getPrice: function () {
      return (this.moeny * this.num) * 100
    }
  }
}
</script>