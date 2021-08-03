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
    <!-- <div class="shopList_item">
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
  </div> -->
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../utils/requsets";
const useCurrentTabEffect = () => {
  const categorys = [
    { name: "全部商品", table: "all" },
    { name: "秒杀", table: "seckill" },
    { name: "新鲜水果", table: "fruit" },
  ];
  const currentTab = ref(categorys[0].table);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return {
    categorys,
    handleTabClick,
    currentTab,
  };
};
export default {
  name: "Content",
  setup() {
    const { categorys, handleTabClick, currentTab } = useCurrentTabEffect();
    const route = useRoute();
    const shopId = route.params.id;
    const data = reactive({ list: [] });
    const getContentData = async (shopId) => {
      const result = await get(`/api/shop/${shopId}/products`, {
        tab: "all",
      });
      if (result.errno == 0 || result.data) {
        data.list.value = result.data;
      }
    };
    getContentData();
    const { list } = toRefs(data);
    return {
      data,
      shopId,
      categorys,
      handleTabClick,
      currentTab,
      list,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
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
}
</style>