import { defineStore } from "pinia";

const keys = ["peanuts", "coconuts"];

export const useNutsStore = defineStore({
  id: "nuts",
  state: () => ({
    peanuts: true,
    coconuts: false,
  }),
  actions: {
    toggle_nuts() {
      let property = keys[(keys.length * Math.random()) << 0];
      this[property] = !this[property];
    },
  },
});
