<template>
  <div class="wulff-head"></div>
</template>

<script>
import "@/js/wulffhead";
// import "@/js/three";
export default {
  name: "WulffHead"
};
</script>

<style lang="scss">
.wulff-head {
  background: url("../assets/wulff-head.svg") no-repeat scroll 0 0
    rgba(0, 0, 0, 0);
  height: 85%;
  position: absolute;
  right: 0;
  top: 0;
  width: 85%;
  z-index: 0;
}
</style>
