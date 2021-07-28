<template>
  <div class="home">
    <div class="warpper">
      <Nearby />
      <div class="shopList">
        <p class="shopList_title">附近店铺</p>
        <div class="shopList_item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            alt=""
            class="shopList_item_img"
          />
          <div class="shopList_item_content">
            <p class="shopList_item_name">沃尔玛</p>
            <span class="shopList_item_sales">月售10000</span>
            <span class="shopList_item_expressPrice">起送￥：0</span>
            <span class="shopList_item_expressLimit">基础运费¥：5元</span>
            <p class="shopList_item_slogan">
              VIP尊享满89元减4元运费券（每月3张）
            </p>
          </div>
        </div>
        <div class="shopList_item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            alt=""
            class="shopList_item_img"
          />
          <div class="shopList_item_content">
            <p class="shopList_item_name">沃尔玛</p>
            <span class="shopList_item_sales">月售10000</span>
            <span class="shopList_item_expressPrice">起送￥：0</span>
            <span class="shopList_item_expressLimit">基础运费¥：5元</span>
            <p class="shopList_item_slogan">
              VIP尊享满89元减4元运费券（每月3张）
            </p>
          </div>
        </div>
        <div class="shopList_item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            alt=""
            class="shopList_item_img"
          />
          <div class="shopList_item_content">
            <p class="shopList_item_name">沃尔玛</p>
            <span class="shopList_item_sales">月售10000</span>
            <span class="shopList_item_expressPrice">起送￥：0</span>
            <span class="shopList_item_expressLimit">基础运费¥：5元</span>
            <p class="shopList_item_slogan">
              VIP尊享满89元减4元运费券（每月3张）
            </p>
          </div>
        </div>
        <div class="shopList_item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/near.png"
            alt=""
            class="shopList_item_img"
          />
          <div class="shopList_item_content">
            <p class="shopList_item_name">沃尔玛</p>
            <span class="shopList_item_sales">月售10000</span>
            <span class="shopList_item_expressPrice">起送￥：0</span>
            <span class="shopList_item_expressLimit">基础运费¥：5元</span>
            <p class="shopList_item_slogan">
              VIP尊享满89元减4元运费券（每月3张）
            </p>
          </div>
        </div>
      </div>
    </div>
    <Docker />
  </div>
</template>

<script>
import axios from "axios";
import Docker from "./Docker.vue";
import Nearby from "./Nearby.vue";
export default {
  name: "Home",
  components: {
    Docker,
    Nearby,
  },
  setup() {
    const getShopList = () => {
      const result = axios
        .get(
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/shop/hot-list"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return {
        result,
      };
    };
    getShopList();
  },
};
</script>
<style lang="scss" scoped>
.warpper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  margin: 0 0.18rem;
  overflow: hidden;
  overflow-y: scroll;
}
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
      border-bottom: .01rem solid #f1f1f1;
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
      line-height: .18rem;
      font-size: 0.13rem;
      color: #333333;
    }
    &_slogan {
      margin: .08rem  0 .12rem 0;
      line-height: .18rem;
      font-size: 13px;
      color: #e93b3b;
    }
  }
}
</style>