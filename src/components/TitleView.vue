<script setup>
import DisturbedString from "./DisturbedString.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div className="flex flex-col items-center justify-center gap-8 p-8">
    <div className="w-full flex items-center justify-center gap-8">
      <img
        alt="logo"
        class="logo"
        src="@/assets/picture.jpg"
        width="125"
        height="125"
      />

      <div class="title">
        <h1 class="colored text-4xl font-bold">collection</h1>
        <h3 className="text-xl">
          <DisturbedString>of things</DisturbedString>
        </h3>
      </div>
    </div>
    <RouterLink v-if="$route.path === '/'" to="/about">
      <a>Find out more...</a>
    </RouterLink>
    <RouterLink v-if="$route.path === '/about'" to="/">
      <a>Get back home...</a>
    </RouterLink>
  </div>
</template>

<style></style>
