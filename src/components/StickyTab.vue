<template>
  <div class="sticky-tab col-xs-8 col-md-4 col-lg-2 d-none d-sm-block">
    <a href="https://soundcloud.com/fosterthewulff" target="_blank" class="cta">
      <!-- <p>sAw
        <br>viDeo?
      </p>-->
      <p>listeN soMe
        <br>mUsic heRe
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: "StickyTab"
};
</script>

<style lang="scss">
.sticky-tab {
  position: absolute;
  left: -22px;
  top: 3rem;
  max-width: 320px;
}
.cta {
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-left: 1em;
  background-image: url("../assets/arrow.svg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
}
</style>
