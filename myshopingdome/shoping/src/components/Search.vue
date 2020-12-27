<template>
  <div>
    <van-search id="SearchText" v-model="value" @keyup.enter="ShowSearch" @input="onSearch" show-action placeholder="请输入搜索关键词">
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
//import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: '',
      temp: false
    };
  }, methods: {

    ShowSearch: function () {
      console.log("我触发了 center事件")
      if (this.value == "") {
        return Toast.fail('不能为空');
      }
      this.$message({
        position: "bottom-left",
        message: "用户未登录",
        type: 'error',
        offset: 120
      });
      //console.log(arr.join(","))
      //sessionStorage.setItem("SearchData",)
      //Dialog({ message: this.value });
    },
    onSearch: function () {
      if (this.value == "") {
        this.temp = false;
        return
      }

      this.temp = true;
      console.log(this.value)
    }
  }, mounted() {
    // 指向 vue 对象
    let that = this;


    document.onkeydown = function (e) {
      // 截取文档对象操作方式
      var key = window.event.keyCode ? window.event.keyCode : window.event.which

      //   if (e.altKey && key === 78) {
      //     console.log("alt+N");
      //   }
      //   if (e.altKey && key === 83) {
      //     console.log("ctrl+s")
      //   }
      console.log(e.altKey);
      console.log(key)
      if (key == 123) {
        that.$notify({
          title: '成功',
          message: '感谢',
          type: 'success',
          offset: 100
        });
      }
    }
    console.log(this)
    console.log(this.$notify)
  }
};
</script>
