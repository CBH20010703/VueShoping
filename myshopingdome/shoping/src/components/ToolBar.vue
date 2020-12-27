<template>
  <div class="Toolbar">
    <van-grid :column-num="TollData.columnNum">
      <van-grid-item v-for="(item,index)  in TollData.data" :key="index" :icon="item.icon" :text="item.val" :badge="item.hotNum" />
    </van-grid>
  </div>
</template>
<style >
.Toolbar .van-icon {
  color: red !important;
}
</style>
<script>
/*
  后期 需要动态传值 完成两个模块 
*/
export default {
  props: ["TollData"],
}
</script>