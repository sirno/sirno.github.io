<script>
export default {
  data() {
    return {
      velocity: [2 * Math.random() - 1, 2 * Math.random() - 1],
    };
  },
  props: {
    offset: Number,
  },
  computed: {
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
      transform: 'translate(' + offsetWidth + 'px,' + offsetHeight + 'px)',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.float-element {
  display: inline-block;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
}
</style>
