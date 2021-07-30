<template>
  <div class="wapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wapper_img"
    />
    <div class="wapper_input">
      <input
        type="text"
        class="wapper_input_username"
        placeholder="请输入手机号"
      />
    </div>
    <div class="wapper_input">
      <input
        type="text"
        class="wapper_input_passworld"
        placeholder="请输入密码"
      />
    </div>
    <div class="wapper_input">
      <input
        type="text"
        class="wapper_input_passworld"
        placeholder="确认密码"
      />
    </div>
    <div class="wapper_button">注册</div>
    <div class="wapper_login">
      <span @click="handleToLogin">已有账号去登陆</span>
    </div>
  </div>
</template>
<script>
import { useRouter} from 'vue-router'
export default {
  name: "Register",
  setup(){
      const router= useRouter();
      const handleToLogin=()=>{
          router.push({path:'./Login'})
      }
      return {
          handleToLogin
      }
  }
};
</script>
<style lang="scss" scoped>
.wapper {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  &_img {
    margin: 0 auto;
    width: 0.66rem;
    height: 0.66rem;
    margin-bottom: 0.4rem;
  }
  &_input {
    width: 2.95rem;
    height: 0.48rem;
    border-radius: 0.06rem;
    background-color: #f9f9f9;
    margin-bottom: 0.16rem;
    &_username,
    &_passworld {
      margin-left: 0.2rem;
      width: 100%;
      height: 100%;
      line-height: 0.48rem;
      font-size: 0.16rem;
      border: none;
      background: none;
      outline: none;
    }
  }
  &_button {
    margin-top: 0.32rem;
    border-radius: 0.04rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    color: #fff;
    width: 2.95rem;
    height: 0.48rem;
    background-color: #0091ff;
  }
  &_login {
    margin-top: 0.16rem;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>