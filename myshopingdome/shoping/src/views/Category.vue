<template>
  <div id="ShowList">
    <nav-bar :Title="header" />
    <!--pull load start  -->
    <!-- <van-pull-refresh success-text="刷新成功" v-model="isLoading" @refresh="onRefresh"> -->
    <!-- menu-bar start  -->
    <van-tree-select height="calc(100vh - 50px)" :items="json" :main-active-index.sync=" activeIndex">
      <template #content>
        <van-grid :column-num="3">
          <van-grid-item v-for="value in 18" :key="value" icon="photo-o" text="文字" />
        </van-grid>
      </template>
    </van-tree-select>
    <!--menu-bar end  -->
    <!-- </van-pull-refresh> -->
    <!--pull load end  -->
  </div>
</template>
<style scoped>
.van-pull-refresh {
  overflow: visible;
}
.van-tree-select__nav {
  flex: inherit;
}
</style>
<script>
import { Notify } from 'vant';
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
      items: [{ text: '分组 1' }, { text: '分组 2' }],
      activeId: 1,
      activeIndex: 0,
      json: [{
        text: "一号",
        arr: [1, 2, 3, 4]
      }, {
        text: "一号",
        arr: [4, 5, 6, 7]
      }]
    }
  }, methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
    },
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