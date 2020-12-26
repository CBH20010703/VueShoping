<template>
  <div>
    <search />
    <swiper />
    <!-- grid start -->
    <van-grid square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- grid end -->
  </div>
</template>
<script>
import Swiper from '../components/Swiper.vue';
import Search from "../components/Search.vue";
export default {
  components: {
    Swiper,
    Search
  }
}
</script>