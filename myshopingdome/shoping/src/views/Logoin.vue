<template>
  <div>
    <nav-bar :title="header" />
    <div>
      <div id="UserImg">

      </div>

      <van-form @submit="onSubmit">
        <div class="van-hairline--top-bottom">
          <van-field v-model="username" name="username" label="账号" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        </div>
        <div class="van-hairline--top-bottom">
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        </div>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  components: {
    NavBar,
  }, data() {
    return {
      header: "登录",
      username: '',
      password: '',
    }
  }, methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  }
}
</script>