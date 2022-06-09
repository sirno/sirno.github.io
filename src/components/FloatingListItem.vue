<script setup>
import FloatingElement from './FloatingElement.vue';
</script>

<script>
export default {
  data() {
    return {
      offset: 0,
    };
  },
  props: {
    listNumber: Number,
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  },
};
</script>

<template>
  <div class="item" ref="top">
    <FloatingElement :offset="offset">
      <slot name="cloud"></slot>
    </FloatingElement>
    <item ref="title">
      <slot name="title"></slot>
    </item>
    <FloatingElement :offset="offset">
      <slot></slot>
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
