<template>
  <div>
    <header class="header py-4 component-white">
      <sign-up-form></sign-up-form>
    </header>
    <main class="main shark-teeth">
      <wulff-head></wulff-head>
      <router-view></router-view>
    </main>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
import WulffHead from "@/components/WulffHeadLines";
export default {
  components: { SignUpForm, WulffHead }
};
</script>

<style lang="scss">
</style>
