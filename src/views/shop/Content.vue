<template>
  <div class="content">
    <ul class="leftNav">
      <li
        :class="{
          leftNav_list: true,
          'leftNav_list-active': currentTab == item.table,
        }"
        v-for="item in categorys"
        :key="item.name"
        @click="() => handleTabClick(item.table)"
      >
        {{ item.name }}
      </li>
    </ul>
    <ul class="content_list">
      <li class="content_list_item" v-for="item in list" :key="item._id">
        <img :src="item.imgUrl" alt="" class="content_item_img" />
        <div class="content_item_info">
          <h4 class="content_item_name">{{ item.name }}</h4>
          <span class="content_item_sales">月售{{ item.sales }}件</span>
          <p class="content_item_price">
            <span class="content_item_currentPrice">¥</span>{{ item.price }}
            <span class="content_item_oldPrice">¥{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="amount">
          <span class="minus">—</span>
          <span class="count">88</span>
          <span class="add">+</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../utils/requsets";
// 左侧导航栏数据
const categorys = [
  { name: "全部商品", table: "all" },
  { name: "秒杀", table: "seckill" },
  { name: "新鲜水果", table: "fruit" },
];
// Tab 切换相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categorys[0].table);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return {
    currentTab,
    handleTabClick,
  };
};
// contentList 相关逻辑
const useContentEffect = (shopId, currentTab) => {
  const contentList = reactive({ list: [] });
  const getContentList = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result.errno == 0) {
      contentList.list = result.data;
    }
  };
  watchEffect(() => {
    getContentList();
  });
  const { list } = toRefs(contentList);
  return {
    list,
  };
};
export default {
  name: "Content",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useContentEffect(shopId, currentTab);
    return {
      categorys,
      currentTab,
      handleTabClick,
      list,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  top: 1.38rem;
  left: 0;
  right: 0;
  bottom: 0.49rem;
  border-bottom: 1px solid #f1f1f1;
  .leftNav {
    width: 0.76rem;
    height: 100%;
    background-color: #f5f5f5;
    text-align: center;
    overflow: hidden;
    overflow-y: scroll;
    &_list {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 14px;
      color: #333333;
      &-active {
        background: #fff;
      }
    }
  }
  &_list {
    flex: 1;
    margin: 0 0.18rem 0 0.16rem;
    overflow: hidden;
    overflow-y: scroll;
    &_item {
      display: flex;
      border-bottom: 0.01rem solid #f1f1f1;
      padding-top: 0.12rem;
      position: relative;
    }
  }
  &_item {
    &_img {
      width: 0.68rem;
      height: 0.68rem;
    }
    &_info {
      margin-left: 0.16rem;
    }
    &_name {
      font-size: 0.14rem;
      color: #333333;
      line-height: 0.2rem;
      font-weight: 550;
    }
    &_sales {
      display: block;
      font-size: 12px;
      color: #333333;
      line-height: 16px;
      margin: 0.06rem 0;
    }
    &_price {
      line-height: 0.2rem;
      color: #e93b3b;
      line-height: 20px;
      font-size: 0.14rem;
    }
    &_currentPrice {
      display: inline-block;
      height: 0.2rem;
      font-size: 0.2rem;
      transform: scale(0.5) translate(50%, 40%);
    }
    &_oldPrice {
      display: inline-block;
      margin-left: 0.05rem;
      font-size: 0.2rem;
      color: #999999;
      line-height: 0.2rem;
      text-decoration: line-through;
      transform: scale(0.5) translate(-50%, 30%);
      margin-bottom: 0.12rem;
    }
  }
  .amount {
    flex: 1;
    position: absolute;
    bottom: 0.12rem;
    right: 0;
    height: 0.2rem;
    .add,
    .minus {
      text-align: center;
      border-radius: 50%;
      display: inline-block;
    }
    .add {
      background: #0091ff;
      color: #fff;
      width: 0.2rem;
      height: 0.2rem;
      font-weight: 300;
    }
    .minus {
      font-weight: 700;
      font-size: 0.12rem;
      line-height: 0.14rem;
      border: 0.02rem solid #666;
      width: 0.152rem;
      height: 0.152rem;
    }
    .count {
      height: 0.2rem;
      display: inline-block;
      margin: 0 0.05rem;
      line-height: 0.2rem;
    }
  }
}
</style>