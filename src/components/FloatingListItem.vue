<script setup>
import { mapState } from "pinia";
import FloatingElement from "./FloatingElement.vue";
import FloatingSplit from "./FloatingSplit.vue";
import { useNutsStore } from "../stores/nuts";
</script>

<script>
export default {
  data() {
    return {
      offset: 0,
    };
  },
  computed: {
    ...mapState(useNutsStore, ["peanuts"]),
  },
  methods: {
    computeOffset() {
      let rect = this.$refs.title.getBoundingClientRect();
      let position = (rect.top + rect.bottom) / 2;
      let height = this.$refs.top.clientHeight;
      return height * (position / height - 0.5);
    },
    handleScroll() {
      this.offset = this.computeOffset();
    },
  },
  mounted() {
    this.handleScroll();
  },
  beforeMount() {
    document
      .getElementById("app-container")
      .addEventListener("scroll", this.handleScroll);
    document
      .getElementById("app-container")
      .addEventListener("resize", this.handleScroll);
  },
  beforeUnmount() {
    document
      .getElementById("app-container")
      .removeEventListener("scroll", this.handleScroll);
    document
      .getElementById("app-container")
      .removeEventListener("resize", this.handleScroll);
  },
};
</script>

<template>
  <div class="item" ref="top">
    <FloatingElement :offset="offset">
      <slot name="upper"></slot>
    </FloatingElement>
    <div ref="title">
      <slot name="title"></slot>
    </div>
    <FloatingSplit :offset="offset" v-if="peanuts">
      <slot name="lower"></slot>
    </FloatingSplit>
    <FloatingElement :offset="offset" v-if="!peanuts">
      <slot name="lower"></slot>
    </FloatingElement>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
i {
  color: (--color-text);
}
</style>
