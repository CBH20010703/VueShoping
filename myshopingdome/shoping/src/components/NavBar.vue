<template>
  <div>
    <van-nav-bar :title="title" left-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="ellipsis" color="#ee0a24" size="20" />
      </template>
    </van-nav-bar>
    <van-share-sheet v-model="showShare" @select="onSelect" title="立即分享给好友" :options="options" />
  </div>
</template>
<style >
.van-nav-bar .van-icon {
  color: red;
  font-size: 20px;
}
</style>
<script>
import { Toast } from 'vant';
export default {
  props: ['Title'],
  data() {
    return {
      title: this.Title,
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
  methods: {
    onSelect(option) {
      console.log(option.name == "复制链接")
      switch (option.name) {
        case "复制链接":
          this.Copy(location.href)
          break;
        default:
          Toast(option.name);
          break;
      }
      this.showShare = false;
    },
    Copy(str) {
      var save = function (e) {
        e.clipboardData.setData('text/plain', str);
        e.preventDefault();
      }
      document.addEventListener('copy', save);
      document.execCommand('copy');
      document.removeEventListener('copy', save);
      Toast("已自动复制到粘贴板");
    },
    onClickLeft() {
      window.history.go(-1)
    },
    onClickRight() {
      this.showShare = true;
    },
  },
};
</script>