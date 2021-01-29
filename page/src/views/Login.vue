<template>
  <div class="login_div">
    <h1>登录</h1>
    <div class="content">
      <input type="text" placeholder="账号" />
      <input type="password" placeholder="密码" />
      <button>登陆</button>
    </div>
    <div class="regist">
      <a>注册</a>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Login extends Vue {}
</script>
<style lang="sass" scoped>
@import "./login.scss"
</style>
