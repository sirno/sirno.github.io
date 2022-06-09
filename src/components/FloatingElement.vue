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
  <item
    :style="{
      transform: 'translate(' + offsetWidth + 'px,' + offsetHeight + 'px)',
    }"
  >
    <slot></slot>
  </item>
</template>
