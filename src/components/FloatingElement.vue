<script>
export default {
  props: {
    offset: Number,
  },
  data() {
    return {
      velocity: [2 * Math.random() - 1, 2 * Math.random() - 1],
    };
  },
  computed: {
    opacity() {
      let size = 2 * Math.max(window.innerWidth, window.innerHeight);
      return Math.max(0, 1 - Math.abs(this.offset / size));
    },
    offsetWidth() {
      return this.offset * this.velocity[0];
    },
    offsetHeight() {
      return this.offset * this.velocity[1];
    },
  },
};
</script>

<template>
  <div
    class="float-element"
    :style="{
      opacity: opacity,
      transform: 'translate(' + offsetWidth + 'px,' + offsetHeight + 'px)',
      WebkitTransform:
        'translate(' + offsetWidth + 'px,' + offsetHeight + 'px)',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.float-element {
  display: inline-block;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
}
</style>
