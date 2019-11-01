<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <router-view />
  </div>
</template>

<script>
// import navigation from "@/components/nav";

// export default {
//   components: {
//     navigation
//   }
// };
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  background-color: #1e1d1d;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
