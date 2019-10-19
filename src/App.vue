<template>
  <div class="full-height component-dark wulff-head">
    <!-- <coming-soon></coming-soon> -->
    <!-- <div class="full-height component-dark"> -->
    <!-- <wulff-head></wulff-head> -->
    <sticky-tab></sticky-tab>
    <router-view class="always-on-front"/>
  </div>
</template>

<script>
import StickyTab from "@/components/StickyTab";
import WulffHead from "@/components/WulffHead";
import ComingSoon from "@/components/ComingSoon";
export default {
  components: { StickyTab, WulffHead, ComingSoon }
};
</script>

<style lang="scss">
.full-height {
  display: flex;
  align-items: center;
  height: 100vh;
}
.always-on-front {
  z-index: 1008;
}
</style>
