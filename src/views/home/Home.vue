<template>
  <div class="home">
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
</style>