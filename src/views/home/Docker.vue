<template>
  <div class="docker">
    <div
      :class="{ docker_item: true, 'docker_item-active': !index }"
      v-for="(item, index) of dockerList"
      :key="index"
    >
      <span class="iconfont docker_item_icon" v-html="item.icon"></span>
      <span class="docker_item_text">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe65b;", text: "首页" },
      { icon: "&#xe658;", text: "购物车" },
      { icon: "&#xe604;", text: "订单" },
      { icon: "&#xebd9;", text: "我的" },
    ];
    return {
      dockerList,
    };
  },
};
</script>
<style lang="scss" scoped>
.docker {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  &_item {
    flex: 1;
    text-align: center;
    &-active {
      color: #1fa4fc;
    }
    &_icon {
      margin-top: 0.07rem;
      font-size: 0.2rem;
      display: block;
    }
    &_text {
      margin-top: -0.05rem;
      display: block;
      font-size: 0.2rem;
      transform: scale(0.5);
    }
  }
}
</style>