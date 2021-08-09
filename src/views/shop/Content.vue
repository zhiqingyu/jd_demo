<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category_item: true,
          'category_item-active': currentTab == item.tab,
        }"
        v-for="item in categorylist"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="contentList">
      <div class="contentList_item" v-for="item in list" :key="item._id">
        <img :src="item.imgUrl" class="contentList_item_img" />
        <div class="contentlist_info">
          <div class="contentList_info_name">{{ item.name }}</div>
          <div class="contentList_info_sales">月售{{ item.sales }}件</div>
          <div class="contentList_info_price">
            <span class="price">￥</span>{{ item.price }}
            <span class="oldPrice">￥{{ item.oldPrice }}</span>
          </div>
        </div>
        <p class="number">
          <span
            class="number_minus"
            @click="() => changeCartList(shopId, item._id, item, -1)"
            >-</span
          >
          <span class="number_count">{{ cartList?.[shopId]?.[item._id]?.count||0}}</span>
          <span
            class="number_add"
            @click="() => changeCartList(shopId, item._id, item, 1)"
            >+</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs, watchEffect } from "vue";
import { get } from "../../utils/requsets";
import { useRoute } from "vue-router";
import { useChangeCartListEffect } from "./changeCartList";
import { useStore } from 'vuex';
// 左侧导航栏数据
const categorylist = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruits" },
];
// Tab栏切换相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categorylist[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return {
    currentTab,
    handleTabClick,
  };
};

// contentList 列表数据相关逻辑
const useContentListEffect = (shopId, currentTab) => {
  const contentList = reactive({ list: [] });
  const getContentList = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result.errno === 0 && result.data) {
      contentList.list = result.data;
    }
  };
  watchEffect(() => {
    getContentList();
  });
  const { list } = toRefs(contentList);
  return { list };
};
export default {
  setup() {

    const store = useStore()
    const {cartList} = toRefs(store.state)
    const route = useRoute();
    const shopId = route.params.id;


    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useContentListEffect(shopId, currentTab);
    const { changeCartList } = useChangeCartListEffect();
    return {
      categorylist,handleTabClick,currentTab,
      list,changeCartList,
      shopId,cartList
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  top: 1.38rem;
}
.category {
  width: 0.76rem;
  overflow-y: scroll;
  background-color: #f5f5f5;
  &_item {
    line-height: 0.4rem;
    height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333333;
    border-radius: 0.02rem;
    &-active {
      background-color: #fff;
    }
  }
}
.contentList {
  flex: 1;
  overflow-y: scroll;
  &_item {
    position: relative;
    display: flex;
    margin: 0.08rem 0.18rem 0.16rem 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &_img {
      margin-right: 0.16rem;
      width: 0.68rem;
      height: 0.68rem;
    }
  }
  &_info {
    &_name {
      line-height: 0.2rem;
      font-size: 0.14rem;
      font-weight: 550;
    }
    &_sales {
      margin: 0.06rem 0 0.03rem 0;
      font-size: 12px;
      color: #333333;
      line-height: 16px;
    }
    &_price {
      line-height: 0.2rem;
      margin: 0 0 0.12rem -0.1rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
  }
}
.price,
.oldPrice {
  display: inline-block;
  font-size: 0.2rem;
  transform: scale(0.5);
}
.price {
  color: #e93b3b;
  position: relative;
  left: 0.05rem;
  top: 0.039rem;
}
.oldPrice {
  position: relative;
  top: 0.039rem;
  left: -0.15rem;
  text-decoration: line-through;
  color: #999;
}
.number {
  position: absolute;
  right: 0;
  bottom: 0.12rem;
  &_add {
    display: inline-block;
    width: 0.195rem;
    height: 0.194rem;
    background-color: #0091ff;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    line-height: 0.16rem;
    font-size: 0.16rem;
  }
  &_count {
    width: 0.17rem;
    height: 0.16rem;
    margin: 0 0.1rem;
    font-size: 0.14rem;
    color: #333333;
    line-height: 0.16rem;
  }
  &_minus {
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 0.152rem;
    height: 0.152rem;
    font-size: 0.16rem;
    line-height: 0.142rem;
    border: 0.02rem solid #999;
  }
}
</style>