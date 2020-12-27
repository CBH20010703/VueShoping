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
        data: [{ title: "全部", list: ["1", "2", "3", "4"] },
        { title: "待付款", list: ["1", "2", "3", "4"] },
        { title: "待收货", list: ["1", "2",] },
        { title: "已完成" },
        { title: "已取消", list: ["1"] }]
      }
    }
  }
}
</script>
<style scoped>
</style>