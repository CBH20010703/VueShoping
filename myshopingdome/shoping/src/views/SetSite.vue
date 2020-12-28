<template>
  <div>
    <nav-bar :Title="header" />
    <van-notice-bar left-icon="volume-o" text="春节期间可能部分地区停止配送,请见谅" />
    <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
import { Toast } from 'vant';
import NavBar from "../components/NavBar.vue"
export default {
  components: {
    NavBar
  }
  ,
  data() {
    return {
      chosenAddressId: '1',
      header: "地址管理",
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  /* 禁用状态数据格式 disabledList [{}]
  */
  methods: {
    onAdd() {
      this.$router.push({
        path: `/EditSite`,
      });
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
};
</script>