<template>
  <MaskLayer/>
  <div class="bottom">
    <div class="bottom_cart">
      <img
        src="http://www.dell-lee.com/imgs/vue3/basket.png"
        alt=""
        class="bottom_cart_img"
      />
      <span class="bottom_cart_remined" v-show="total > 0">{{ total }}</span>
    </div>
    <div class="bottom_content">
      <span class="bottom_content_text" v-if="price == 0">购物车是空的</span>
      <span class="bottom_content_text" v-else>总计：￥{{ price }}</span>
      <button class="bottom_content_btn">去结算</button>
    </div>
  </div>
</template>

<script>
import MaskLayer from '../../components/MaskLayer'
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// 购物车数量及价格相关逻辑
const useCartEffect = () => {
  const route = useRoute();
  const shopId = route.params.id;
  const store = useStore();
  const cartList = store.state.cartList;

  const total = computed(() => {
    let count = 0;
    const productList = cartList[shopId];
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });
  const price = computed(() => {
    let num = 0;
    const productList = cartList[shopId];
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        num += product.price * product.count;
      }
    }
    return num.toFixed(2);
  });
  return { total, price };
};

export default {
  components:{
    MaskLayer
  },
  name: "Cart",
  setup() {
    const { total, price } = useCartEffect();
    return { total, price, };
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.5rem;
  &_cart {
    width: 0.76rem;
    height: 0.5rem;
    position: relative;
    &_img {
      margin: 0.11rem 0 0.12rem 0.24rem;
      width: 0.26rem;
      height: 0.26rem;
    }
    &_remined {
      position: absolute;
      top: 0;
      left: 0.38rem;
      display: inline-block;
      min-width: 0.2rem;
      height: 0.2rem;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      background-color: #e93b3b;
      transform: scale(0.5);
    }
  }
  &_content {
    line-height: 0.5rem;
    &_text {
      font-size: 0.12rem;
      color: #333333;
    }
    &_btn {
      position: absolute;
      right: 0;
      outline: none;
      border: none;
      background-color: #4fb0f9;
      color: #fff;
      width: 0.98rem;
      height: 100%;
    }
  }
}
</style>