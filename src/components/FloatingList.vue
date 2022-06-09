<script setup>
import FloatingListItem from './FloatingListItem.vue';
</script>

<script>
export default {
  data() {
    return {
      content: [
        {
          cloud: 'dec 21',
          title: 'rainr',
          content: 'dense matrix rain for rainer',
        },
        {
          cloud: 'jul 21',
          title: 'mensar',
          content: 'delightful meals',
        },
        {
          cloud: 'jun 21',
          title: 'radior',
          content: 'soundscapes',
        },
      ],
    };
  },
};
</script>

<template>
  <FloatingListItem v-for="item in content" :key="item.id">
    <template #cloud> {{ item.cloud }} </template>
    <template #title> {{ item.title }} </template>

    {{ item.content }}
  </FloatingListItem>
</template>

<style scoped>
.item {
  height: 100vh;
}
</style>
