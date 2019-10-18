<template>
  <div class="home">
    <wulff-head></wulff-head>
    <!-- <audio-visualiser></audio-visualiser> -->
  </div>
</template>

<script>
import WulffHead from "@/components/WulffHead.vue";
// import AudioVisualiser from "@/components/AudioVisualiser.vue";

export default {
  name: "home",
  components: {
    WulffHead
    // AudioVisualiser
  }
};
</script>

<style scoped lang="scss">
.home {
  background-color: #1e1d1d;
  width: 100%;
  height: 100vh;
}
</style>
