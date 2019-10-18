<template>
  <div class="wulff parallax">
    <img
      class="parallax-layer parallax-layer__1"
      alt="Head part 1"
      src="../assets/wulff_head_prt-1.svg"
      data-parallax-disallow="y"
      data-parallax-deep="1000"
    />
    <img
      class="parallax-layer parallax-layer__2"
      alt="Head part 2"
      src="../assets/wulff_head_prt-2.svg"
      data-parallax-deep="210"
    />
    <img
      class="parallax-layer parallax-layer__3"
      alt="Head part 3"
      src="../assets/wulff_head_prt-3.svg"
      data-parallax-deep="90"
    />
  </div>
</template>

<script>
import "@/assets/parallax.js";
export default {
  name: "WulffHead"
};
</script>

<style scoped lang="scss">
.wulff {
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
