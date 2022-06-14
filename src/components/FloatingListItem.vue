<script setup>
import FloatingElement from "./FloatingElement.vue";
import FloatingSplit from "./FloatingSplit.vue";
</script>

<script>
export default {
  data() {
    return {
      offset: 0,
    };
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
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
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
    <FloatingSplit :offset="offset">
      <slot name="lower"></slot>
    </FloatingSplit>
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
