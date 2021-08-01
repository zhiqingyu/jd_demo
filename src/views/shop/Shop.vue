<template>
  <div class="top">
    <div class="top_back iconfont" @click="handleToBack">&#xe623;</div>
    <div class="top_search">
      <div class="top_search_icon iconfont">&#xe648;</div>
      <input
        type="text"
        class="top_search_input"
        placeholder="请输入商品名称搜索"
      />
    </div>
    <!-- <ShopInfo /> -->
  </div>
</template>
<script>
// import ShopInfo from "../../components/ShopInfo";
import { useRouter } from "vue-router";
export default {
  name: "Shop",
  props: ["item"],
  // components: {
  //   ShopInfo,
  // },
  setup() {
    const router = useRouter();
    const handleToBack = () => {
      router.push({ path: "/" });
    };

    return {
      handleToBack,
    };
  },
};
</script>
<style lang="scss" scoped>
.top {
  margin: 0.16rem 0.18rem 0;
  display: flex;
  &_back {
    color: #b6b6b6;
    font-size: 0.25rem;
  }
  &_search {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 16px;
    &_icon {
      line-height: 0.25rem;
      margin-left: 0.1rem;
      font-size: 0.2rem;
    }
    &_input {
      flex: 1;
      outline: none;
      background: none;
      border: none;
      font-size: 0.14rem;
      color: #333333;
      line-height: 0.16rem;
    }
  }
}
</style>