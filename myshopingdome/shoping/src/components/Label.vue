<template>
  <div>
    <van-tabs>
      <van-tab v-for="(item,index) in OderData.data" :key="index" :title="item.title">
        <van-empty description="暂无" v-if="item.list==null" />
        <van-panel v-for="(value,i) in item.list" :key="i" :title="value.shopName" :desc="value.shop" :status="value.shopStatus">
          <!-- <div>
            append contend
           </div> -->
        </van-panel>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  props: ["OderData"],
}
</script>