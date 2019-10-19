<template>
  <div class="container d-flex flex-column justify-content-center h-100">
    <div class="row v-center-end">
      <div class="w-100">
        <h1>WannA joiN?</h1>
        <drummer-form/>
      </div>
    </div>
    <div class="row justify-content-end v-center-content">
      <div class="signup">
        <a href="/signup/" class="icon icon-prepend icon-mail font">joiN MailinG list</a>
      </div>
    </div>
  </div>
</template>
<script>
import DrummerForm from "@/components/DrummerForm";
export default {
  components: { DrummerForm },
  name: "DrummerWanted"
};
</script>

<style lang="scss">
h1 {
  font-size: 4em;
}
.v-center-end {
  flex-grow: 1;
  align-items: flex-end;
}
.v-center-content {
  flex-grow: 1;
  align-items: center;
}
.signup {
  text-align: right;
  opacity: 0.4;
  font-size: 1.3em;

  &:hover {
    opacity: 1;
  }
}
</style>
