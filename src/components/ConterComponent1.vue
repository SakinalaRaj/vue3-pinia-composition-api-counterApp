<template>
  <div id="header">Count App without script setup</div>
  <div>Count = {{ count }}</div>
  <div>
    <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button>
  </div>
  <div>Count is : {{ evenOrOdd }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ConterComponent",
  data() {
    return { count: ref(1) };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  computed: {
    evenOrOdd() {
      if (this.count % 2 === 0) return "even";
      return "odd";
    },
  },
};
</script>

<style scoped></style>
