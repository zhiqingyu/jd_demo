<template>
  <div class="shopList_item">
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
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item"]
};
</script>
<style lang="scss" scoped>
.shopList {
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