<template>
  <div>
    <header class="header py-4 component-white">
      <sign-up-form></sign-up-form>
      <wulff-head></wulff-head>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
import WulffHead from "@/components/WulffHead";
export default {
  components: { SignUpForm, WulffHead }
};
</script>

<style lang="scss">
</style>
