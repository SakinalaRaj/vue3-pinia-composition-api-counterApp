<template>
  <diV class="header">Welcome to Vue Pinia Stores</diV>
  <hr />
  <ConterComponent1 />
  <hr />
  <ConterComponent2 />
  <hr />
  <ConterComponent3 />
</template>

<script>
import ConterComponent1 from "./components/ConterComponent1.vue";
import ConterComponent2 from "./components/ConterComponent2.vue";
import ConterComponent3 from "./components/ConterComponent3.vue";

export default {
  name: "App",
  components: { ConterComponent1, ConterComponent2, ConterComponent3 },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  margin: 20px;
  font-size: 55px;
}
</style>
