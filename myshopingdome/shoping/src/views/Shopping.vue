<template>
  <div>
    <nav-bar :Title="header" />
    <!-- pull load  start -->
    <van-pull-refresh success-text="刷新成功" v-model="isLoading" @refresh="onRefresh">
      <!-- card start -->
      <div id="card-box">
        <van-card :num="num" card-background-color="#fff" :price="moeny" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <!-- tags  插槽 自定义描述下方标签区域 -->
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <!-- footer  插槽 自定义右下角内容 -->
          <template #footer>
            <van-stepper v-model="num" :disable-plus="!pitch" theme="round" button-size="22" disable-input />
          </template>
          <!-- bottom  插槽 复选框 -->
          <template #bottom>
            <van-checkbox checked-color="#ee0a24" v-model="pitch">选中</van-checkbox>
          </template>
        </van-card>
      </div>
      <!-- card end -->
    </van-pull-refresh>
    <!-- pull load end -->
    <van-submit-bar :price="getPrice" @submit="pushShoping" button-text="提交订单">
      <van-checkbox v-model="checked" checked-color="#ee0a24" @click="checkAll">全选</van-checkbox>
      <template v-if="siteStatus" #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>
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
      num: 1,
      checked: false,
      siteStatus: false,
      pitch: false,
    }
  },
  methods: {
    addGoods() {
      this.num += 1;
    },
    checkAll() {
      this.pitch = this.checked
    },
    pushShoping() {
      if (this.getPrice == 0) {
        console.log("1111")
      }
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
      if (this.pitch == true) {
        return (this.moeny * this.num) * 100
      }
      return 0
    }
  }
}
</script>