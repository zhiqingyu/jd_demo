<template>
  <div class="warpper">
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
    </div>
    <ShopInfo :item="item" />
  </div>
  <Content/>
  <Cart/>
</template>
<script>
import Content from './Content'
import ShopInfo from "../../components/ShopInfo";
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs } from "@vue/reactivity";
import { get } from "../../utils/requsets";
import Cart from './Cart'
// 返回相关逻辑
const useBack = () => {
  const router = useRouter();
  const handleToBack = () => {
    router.back();
  };
  return {
    handleToBack,
  };
};
// 商铺详情相关逻辑
const useShopInfoEffect = () => {
  const route = useRoute();
  const shopId = route.params.id;
  const data = reactive({ item: {} });
  const getShopInfo = async () => {
    const result = await get(`/api/shop/${shopId}`);
    if (result.errno === 0 || result.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return {
    item,
    getShopInfo,
  };
};
export default {
  name: "Shop",
  components: {
    ShopInfo,
    Content,Cart
  },
  setup() {
    const { handleToBack } = useBack();
    const { item, getShopInfo } = useShopInfoEffect();
    getShopInfo();

    return {
      handleToBack,
      item,
    };
  },
};
</script>
<style lang="scss" scoped>
.warpper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 0.18rem;
}
.top {
  margin: 0.16rem 0;
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
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.38rem;
  bottom: 0.49rem;
  border-bottom: 0.01rem solid #f1f1f1;
  .leftNav {
    width: 0.76rem;
    height: 100%;
    background-color: #f1f1f1;
    text-align: center;
    &_list{
      width: 100%;
      border-radius: .02rem;
      font-size: .14rem;
      line-height: .4rem;
      color: #333333;
    }
  }
}
</style>