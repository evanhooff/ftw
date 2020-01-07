<template>
  <div class="full-height component-dark wulff-head flex-column container">
    Hullo
    <sticky-tab></sticky-tab>
      <div class="row v-center-end">
        <div class="w-100">
          <counting-sheep></counting-sheep>
        </div>
      </div>
      <div class="row justify-content-end v-center-content w-100">
        <sign-up></sign-up>
      </div>
  </div>
</template>

<script>
import StickyTab from "@/components/StickyTab";
import CountingSheep from "@/components/CountingSheep";
import SignUp from "@/components/SignUpLink";
import SignUpForm from "@/components/SignUpForm";
export default {
  name: "ComingSoon",
  components: { StickyTab, CountingSheep, SignUp, SignUpForm }
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
