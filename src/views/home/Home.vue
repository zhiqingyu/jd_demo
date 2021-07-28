<template>
  <div class="home">
    <div class="warpper">
      <div class="address">
        <div class="iconfont address_icon">&#xe61b;</div>
        <div class="address_title">
          北京理工大学国防科技园2号楼10号北京理工大学国防科技园2号楼10号北京理工大学国防科技园2号楼10号北京理工大学国防科技园2号楼10号
        </div>
        <div class="iconfont address_remind">&#xe634;</div>
      </div>
      <div class="search">
        <div class="iconfont search_icon">&#xe648;</div>
        <input class="search_input" type="text" placeholder="山姆会员商店优惠商品">
      </div>
    </div>
    <Docker />
  </div>
</template>

<script>
// @ is an alias to /src
import Docker from "./Docker.vue";
export default {
  name: "Home",
  components: {
    Docker,
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
}
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
    margin-right: .05rem;
  }
  &_remind {
    font-size: 0.2rem;
  }
}
.search{
  display: flex;
  margin-top: .16rem;
  width: 100%;
  height: .32rem;
  background-color: #f5f5f5;
  border-radius: .16rem;
  &_icon{
    line-height: .32rem;
    margin-left: .12rem;
    font-size: .25rem;
  }
  &_input{
    flex: 1;
    font-size: .14rem;
    margin-left: .12rem;
    outline: none;
    background: none;
    border:none
  }
}
</style>