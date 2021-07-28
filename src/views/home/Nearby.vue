<template>
  <div class="address">
    <div class="iconfont address_icon">&#xe61b;</div>
    <div class="address_title">北京理工大学国防科技园2号楼10号</div>
    <div class="iconfont address_remind">&#xe634;</div>
  </div>
  <div class="search">
    <div class="iconfont search_icon">&#xe648;</div>
    <input
      class="search_input"
      type="text"
      placeholder="山姆会员商店优惠商品"
    />
  </div>
  <div class="banner">
    <img
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
      class="banner_img"
    />
  </div>
  <div class="nearby">
    <div class="nearby_list"
    v-for="item in nearbyList"
    :key="item.text">
      <img
        :src="`http://www.dell-lee.com/imgs/vue3/${item.urlName}.png`"
        alt=""
        class="nearby_list_img"
      />
      <div class="nearby_list_tag">{{item.text}}</div>
    </div>
  </div>
  <div class="gay"></div>
</template>
<script>

export default {
  name: "Nearby",
  setup() {
      const nearbyList = [
  { text: "超市便利", urlName: "超市" },
  { text: "菜市场", urlName: "菜市场" },
  { text: "水果店", urlName: "水果店" },
  { text: "鲜花绿植", urlName: "鲜花" },
  { text: "医药健康", urlName: "医药健康" },
  { text: "家居时尚", urlName: "家居" },
  { text: "烘培蛋糕", urlName: "蛋糕" },
  { text: "签到", urlName: "签到" },
  { text: "大牌免运", urlName: "大牌免运" },
  { text: "红包套餐", urlName: "红包" },
];
    return {
      nearbyList,
    };
  },
};
</script>
<style lang="scss" scoped>
.address {
  display: flex;
  margin-top: 0.16rem;
  &_icon {
    position: relative;
    margin-right: 0.1rem;
    top: -0.01rem;
    font-size: 0.18rem;
  }
  &_title {
    flex: 1;
    font-size: 0.16rem;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 0.05rem;
  }
  &_remind {
    font-size: 0.2rem;
  }
}
.search {
  display: flex;
  margin-top: 0.16rem;
  width: 100%;
  height: 0.32rem;
  background-color: #f5f5f5;
  border-radius: 0.16rem;
  &_icon {
    line-height: 0.32rem;
    margin-left: 0.12rem;
    font-size: 0.25rem;
  }
  &_input {
    flex: 1;
    font-size: 0.14rem;
    margin-left: 0.12rem;
    outline: none;
    background: none;
    border: none;
  }
}
.banner {
  margin-top: 0.12rem;
  &_img {
    width: 100%;
    height: 100%;
  }
}
.nearby {
  display: flex;
  flex-flow: wrap;
  &_list {
    margin-top: 0.16rem;
    text-align: center;
    flex: 20%;
    font-size: 12px;
    color: #333333;
    &_img {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
.gay {
  margin-top: 0.16rem;
  height: 0.1rem;
  background-color: #f1f1f1;
}
</style>