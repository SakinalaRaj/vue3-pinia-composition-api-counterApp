<template>
  <div>Count App with script setup</div>
  <div>Count = {{ count }}</div>
  <div>
    <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button>
  </div>
  <div>Count is : {{ evenOrOdd }}</div>
</template>

<script setup>
import { computed, ref } from "vue";
const count = ref(0);
const increaseCount = () => {
  count.value++;
};
const decreaseCount = function () {
  count.value--;
};
const evenOrOdd = computed(() => {
  if (count.value % 2 === 0) return "even";
  return "odd";
});
</script>

<style scoped></style>
