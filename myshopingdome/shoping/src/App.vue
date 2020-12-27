
<template>

  <div id="app">
    <tab-bar />
    <!-- content start -->
    <div id="top">
      <router-view />
    </div>
    <!-- content end -->
  </div>

</template>
<script>
import TabBar from "./components/TabBar.vue"
export default {
  components: {
    TabBar
  }, watch: {

  },
  data() {
    return {
      active: 0,
    };
  }, methods: {},

};
</script>
<style>
body {
  background-color: #eee;
}

#app {
  height: 100vh;
}
</style>
