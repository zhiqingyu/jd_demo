<template>
  <div class="wapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wapper_img"
    />
    <div class="wapper_input">
      <input
        v-model="username"
        type="text"
        class="wapper_input_username"
        placeholder="请输入用户名"
      />
    </div>
    <div class="wapper_input">
      <input
        v-model="password"
        type="password"
        class="wapper_input_passworld"
        placeholder="请输入密码"
      />
    </div>
    <div class="wapper_button" @click="handleLogin">登录</div>
    <div class="wapper_login">
      <span class="wapper_login_register" @click="handleToRegister"
        >立即注册</span
      >
      <span>|</span>
      <span class="wapper_login_link">忘记密码</span>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/requsets";
// 点击注册相关逻辑
const useToRegisterEffect = () => {
  const router = useRouter();
  const handleToRegister = () => {
    router.push({ path: "./Register" });
  };
  return {
    handleToRegister,
  };
};
// 点击登录相关逻辑
const userLoginEffect = () => {
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    const result = await post("/api/user/Login", {
      username: data.username,
      password: data.password,
    });
    console.log(result);
    if (result.errno === 0) {
      localStorage.isLogin = "true";
      router.push({ path: "/" });
    } else {
      alert("登录失败");
    }
  };
  return {
    handleLogin,
    data,
  };
};
export default {
  name: "Login",
  setup() {
    const { handleLogin, data } = userLoginEffect();
    const { handleToRegister } = useToRegisterEffect();
    const { username, password } = toRefs(data);

    return {
      handleLogin,
      handleToRegister,
      username,
      password,
    };
  },
};
</script>
<style lang="scss" scoped>
.wapper {
  position: absolute;
  top: 45%;
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
    &_register {
      margin-right: 0.12rem;
    }
    &_link {
      margin-left: 0.12rem;
    }
  }
}
</style>