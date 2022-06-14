<script setup>
import FloatingElement from "./FloatingElement.vue";
</script>

<script>
export default {
  props: {
    offset: Number,
  },
  computed: {
    elements() {
      return this.$slots.default()[0].children[0].children.split(" ");
    },
  },
};
</script>

<template>
  <div>
    &nbsp;
    <FloatingElement
      v-for="element in elements"
      :key="element.id"
      :offset="offset"
    >
      {{ element }}&nbsp;
    </FloatingElement>
  </div>
</template>
