<template>
  <div>
    <nav-bar :Title="header" />
    <la-bel :OderData="test" />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import LaBel from "../components/Label.vue";
export default {
  components: {
    NavBar,
    LaBel
  },
  data() {
    return {
      header: "个人订单",
      test: {
        data: [{
          title: "全部", list: [{
            shopName: "乐视电视", shop: "液晶电视", shopStatus: "已支付"
          }, {
            shopName: "美的冰箱", shop: "冰箱", shopStatus: "已支付"
          }, {
            shopName: "华为手机", shop: "华为P30", shopStatus: "已支付"
          }, {
            shopName: "苹果手机", shop: "苹果11", shopStatus: "已支付"
          }]
        },
        { title: "待付款", list: [{ shopName: "京东电器", shop: "电脑", shopStatus: "未支付" }, { shopName: "京东电器", shop: "电脑", shopStatus: "已支付" }, { shopName: "京东电器", shop: "电脑", shopStatus: "未支付" }, { shopName: "京东电器", shop: "电脑", shopStatus: "未支付" }] },
        {
          title: "待收货", list: [{
            shopName: "京东电器", shop: "电脑", shopStatus: "已支付"
          }, {
            shopName: "京东电器", shop: "电脑", shopStatus: "已支付"
          }]
        },
        { title: "已完成" },
        {
          title: "已取消", list: [{
            shopName: "苹果手机", shop: "苹果11", shopStatus: "已支付"
          }]
        }]
      }
    }
  }
}
</script>
<style scoped>
</style>