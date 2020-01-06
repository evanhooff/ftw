<template>
  <div class="full-height component-dark wulff-head flex-column container">
    <sticky-tab></sticky-tab>
      <div class="row v-center-end">
        <div class="w-100">
          <coming-soon></coming-soon>
        </div>
      </div>
      <div class="row justify-content-end v-center-content w-100">
        <sign-up></sign-up>
      </div>
  </div>
</template>

<script>
import StickyTab from "@/components/StickyTab";
import ComingSoon from "@/components/ComingSoon";
import SignUp from "@/components/SignUpLink";
import Loading from "@/components/Loading";
export default {
  components: { StickyTab, ComingSoon, Loading, SignUp }
};
</script>

<style lang="scss">
.full-height {
  display: flex;
  align-items: center;
  height: 100vh;
}
.v-center-end {
  flex-grow: 1;
  align-items: flex-end;
}
.v-center-content {
  flex-grow: 1;
  align-items: center;
}
.always-on-front {
  z-index: 1008;
}
</style>
