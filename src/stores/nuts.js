import { defineStore } from "pinia";

const keys = ["peanuts", "coconuts", "walnuts"];

export const useNutsStore = defineStore({
  id: "nuts",
  state: () => ({
    peanuts: true,
    coconuts: false,
    walnuts: true,
  }),
  actions: {
    toggle_nuts() {
      let property = keys[(keys.length * Math.random()) << 0];
      this[property] = !this[property];
    },
  },
});
