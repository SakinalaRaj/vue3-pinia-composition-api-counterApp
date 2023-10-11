import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "Counter",
  state: () => ({
    count: 10,
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  getters: {
    evenOrOdd(state) {
      if (state.count % 2 === 0) return "Even";
      return "Odd";
    },
  },
});
