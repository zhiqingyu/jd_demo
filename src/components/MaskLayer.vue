<template>
    <div class="maskLayer" >
    </div>
</template>
<style lang="scss" scoped>
.maskLayer{
    display: none;
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba($color: #000000, $alpha: .5);
}
</style>