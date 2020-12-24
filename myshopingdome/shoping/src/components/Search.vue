<template>
  <div>
    <van-search v-model="value" @input="onSearch" show-action placeholder="请输入搜索关键词">
      <template #action>
        <div @click="ShowSearch">
          <van-icon name="search" size="18" />
        </div>
      </template>
    </van-search>
    <div id="ShowSearchList" v-if="temp">
    </div>
  </div>
</template>
<style scoped>
#ShowSearchList {
  width: 100%;
  height: 30vh;
  background: #ccc;
  position: absolute;
  z-index: 999;
}
</style>
<script>
// 搜索组件
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: '',
      temp: false
    };
  }, methods: {
    ShowSearch: function () {
      if (this.value == "") {
        return Toast.fail('不能为空');
      }
      Dialog({ message: this.value });
    },
    onSearch: function () {
      if (this.value == "") {
        this.temp = false;
        return
      }
      this.temp = true;
      console.log(this.value)
    }
  }

};
</script>
