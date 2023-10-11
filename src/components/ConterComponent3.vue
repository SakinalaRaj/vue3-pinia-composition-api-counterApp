<template>
  <div>Count App with script setup</div>
  <div>Count = {{ storeCounter.count }}</div>
  <div>
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
  </div>
  <div>Count is : {{ storeCounter.evenOrOdd }}</div>
</template>

<script setup>
// import { computed, ref } from "vue";
// import { useCounterStore } from "@stores/counter";
import { useCounterStore } from "../stores/counter";
const storeCounter = useCounterStore();
// const count = ref(0);
// const increaseCount = () => {
//   count.value++;
// };
// const decreaseCount = function () {
//   count.value--;
// };
// const evenOrOdd = computed(() => {
//   if (count.value % 2 === 0) return "even";
//   return "odd";
// });
</script>

<style scoped></style>
