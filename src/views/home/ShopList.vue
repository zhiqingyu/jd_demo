<template>
  <div class="shopList">
    <p class="shopList_title">附近店铺</p>
    <div class="shopList_item" v-for="item in data" :key="item.id">
      <img :src="item.imgUrl" alt="" class="shopList_item_img" />
      <div class="shopList_item_content">
        <p class="shopList_item_name">{{ item.name }}</p>
        <span class="shopList_item_sales">月售{{ item.sales }}</span>
        <span class="shopList_item_expressPrice"
          >起送￥:{{ item.expressPrice }}</span
        >
        <span class="shopList_item_expressLimit"
          >基础运费¥：{{ item.expressLimit }}</span
        >
        <p class="shopList_item_slogan">{{ item.slogan }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { get } from "../../utils/requsets";
export default {
  name: "ShopList",
  setup() {
    const data = ref([]);

    const getShopList = async () => {
      const result = await get(
        "/api/shop/hot-list"
      );
      if (result.errno == 0 && result.data.length) {
        data.value = result.data;
      }
    };
    getShopList();
    return {
      data,
      getShopList,
    };
  },
};
</script>
<style lang="scss" scoped>
.shopList {
  &_title {
    margin-top: 0.16rem;
    font-weight: 550;
    font-size: 18px;
    color: #333333;
  }
  &_item {
    margin-top: 0.14rem;
    display: flex;
    &_content {
      flex: 1;
      border-bottom: 0.01rem solid #f1f1f1;
    }
    &_img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    &_name {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: #333333;
    }
    &_sales,
    &_expressPrice,
    &_expressLimit {
      margin: 0.08rem 0.16rem 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #333333;
    }
    &_slogan {
      margin: 0.08rem 0 0.12rem 0;
      line-height: 0.18rem;
      font-size: 13px;
      color: #e93b3b;
    }
  }
}
</style>