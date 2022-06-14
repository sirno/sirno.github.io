<script setup>
import FloatingListItem from "./FloatingListItem.vue";
</script>

<script>
export default {
  data() {
    return {
      content: [
        {
          cloud: "dec 21",
          title: "rainr",
          content: "dense matrix rain for rainer",
          href: "https://github.com/sirno/rainr",
        },
        {
          cloud: "oct 21",
          title: "pypetting",
          content: "the bartending python package",
          href: "https://github.com/sirno/pypetting",
        },
        {
          cloud: "jul 21",
          title: "mensar",
          content: "delightful meals",
          href: "https://github.com/sirno/mensar",
        },
        {
          cloud: "jun 21",
          title: "radior",
          content: "streaming through space",
          href: "https://github.com/sirno/radior",
        },
      ],
    };
  },
};
</script>

<template>
  <FloatingListItem v-for="item in content" :key="item.id">
    <template #upper> {{ item.cloud }} </template>
    <template #title>
      <a target="_blank" :href="item.href">{{ item.title }}</a>
    </template>
    <template #lower> {{ item.content }} </template>

    {{ item.content }}
  </FloatingListItem>
</template>

<style scoped>
.item {
  scroll-snap-align: start;
  height: 100vh;
}
</style>
