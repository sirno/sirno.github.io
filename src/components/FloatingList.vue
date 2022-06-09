<script setup>
import FloatingListItem from './FloatingListItem.vue';
</script>

<script>
export default {
  name: 'FloatingList',
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log('scrolling Injected');
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    console.log('scrolling Destroyed');
  },
  methods: {
    handleScroll() {
      console.log('scrolling...');
    },
  },
  data() {
    return {
      offset: 50,
    };
  },
};
</script>

<template>
  <FloatingListItem :offset="offset">
    <template #cloud> CLOUD </template>
    <template #title> TITLE </template>

    Some text
  </FloatingListItem>
  <FloatingListItem :offset="offset">
    <template #cloud> CLOUD </template>
    <template #title> TITLE </template>

    Some text
  </FloatingListItem>
</template>

<style scoped>
.item {
  height: 100vh;
}
</style>
