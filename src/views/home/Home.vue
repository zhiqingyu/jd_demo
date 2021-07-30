<template>
  <div class="home">
    <div class="warpper">
      <Nearby />
      <ShopList/>
    </div>
    <Docker />
  </div>
</template>

<script>
import Docker from "./Docker.vue";
import Nearby from "./Nearby.vue";
import ShopList from './ShopList.vue'
export default {
  name: "Home",
  components: {
    Docker,
    Nearby,
    ShopList
  },
  setup() {
    
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

</style>