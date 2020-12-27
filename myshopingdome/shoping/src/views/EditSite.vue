<template>
  <div>
    <nav-bar />
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
  </div>
</template>
<script>
import { Toast } from 'vant';
import NavBar from '../components/NavBar.vue';
import areaList from "../assets/areaList.js";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave(content) {
      console.log(content)
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>