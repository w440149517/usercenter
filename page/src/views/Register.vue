<template>
  <div class="register_div">
    <h1>注册</h1>
    <div class="content">
      <input type="text" placeholder="账号" />
      <input type="password" placeholder="密码" />
      <input type="password" placeholder="确认密码" />
      <button>注册</button>
    </div>
    <div class="regist">
      <a>返回登录</a>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Login extends Vue {}
</script>
<style lang="sass" scoped>
@import "./register.scss"
</style>
