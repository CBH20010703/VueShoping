<template>
  <div id="setPadding">
    <nav-bar :Title="header" />
    <div class="User-header">
      <div class="User-warp">
        <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <p class="LogoinStatus" v-if="isLogoin"><a href="/Logoin">登录/注册</a></p>
      </div>
      <div class="Hot-Title">

        <h3>免费试用超级会员30天 <img src="../public/img/ar.png"></h3>
        <p><img class="img-right" src="../public/img/sd.png" />可享95折专享价免邮费每日闪购等权益</p>
      </div>
    </div>
    <div class="Home-Pading">
      <div>
        <van-cell title="查看全部" is-link to="/" />
        <tool-bar :TollData="test" />
      </div>
      <br />
      <van-cell title="福利中心" is-link to="/" />
      <tool-bar :TollData="testtow" />
      <br />
      <van-cell title="我的服务" is-link to="/" />
      <tool-bar :TollData="testhree" />
    </div>
  </div>
</template>
<style scoped>
h3,
p {
  padding: 0;
  margin: 0;
}

.Hot-Title {
  padding: 5px 40px;
  background: #424242;
  border-radius: 10px;
  color: #f1debd;
  font-size: 0.7rem;
  position: absolute;
  left: 3%;
  right: 3%;
  bottom: -30%;
}
.Hot-Title h3,
p {
  padding: 5px 0;
  position: relative;
}
.Hot-Title img {
  width: 15px;
  height: 15px;
}
.Hot-Title .img-right {
  width: 17px;
  height: 17px;
  left: -27px;
  top: -10px;
  position: absolute;
}
#setPadding {
  padding-bottom: 100px;
}
.Home-Pading {
  margin-top: 40px;
  padding: 5px 10px;
}
.User-header {
  background: linear-gradient(to right, #3cabec, #634bf6);
  background-color: #d7bc85;
  padding: 2rem 1rem;
  margin: 0 0 20px 0;
  position: relative;
}
.van-cell--clickable {
  border-bottom: 1px solid #f1f2fc;
}
.LogoinStatus {
  font-size: 1rem;
  color: #ffff;
  padding: 1rem;
}
.LogoinStatus a {
  color: #fff;
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
      test: {
        columnNum: 5,
        data: [{ val: "待付款", icon: "paid", hotNum: 10 },
        { val: "待发货", icon: "logistics", hotNum: 20 },
        { val: "已发货", icon: "free-postage", hotNum: 30 },
        { val: "待评价", icon: "smile-comment-o", hotNum: 50 },
        { val: "售后", icon: "shop-collect-o", hotNum: 30 }]
      },
      testtow: {
        columnNum: 4,
        data: [{ val: "免费领卷", icon: "coupon-o" },
        { val: "超级年购", icon: "like-o" },
        { val: "积分抽奖", icon: "point-gift-o" },
        { val: "帮助于客服", icon: "service" }]
      },
      testhree: {
        columnNum: 4,
        data: [{ val: "订单详情", icon: "records" },
        { val: "填写地址", icon: "location-o" },
        { val: "入驻商家", icon: "shop" },
        { val: "常见问题", icon: "question-o" },
        { val: "成为会员", icon: "vip-card-o" },
        { val: "系统优选", icon: "gift-card" },
        { val: "分享邀请", icon: "share-o" },
        { val: "设置", icon: "setting" }]
      },
    }
  }
}
</script>