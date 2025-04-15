<script setup>
import { mapState } from "pinia";
import DisturbedString from "./DisturbedString.vue";
import { useNutsStore } from "../stores/nuts";
import { RouterLink } from "vue-router";
</script>

<script>
export default { computed: { ...mapState(useNutsStore, ["coconuts"]) } };
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
          of <DisturbedString v-if="coconuts"> things </DisturbedString
          ><span v-if="!coconuts">things</span>
        </h3>
      </div>
    </div>
    <RouterLink to="/about" v-if="this.$route.path === '/'">
      <a>Find out more...</a>
    </RouterLink>
    <RouterLink to="/" v-if="this.$route.path === '/about'">
      <a>Get back home...</a>
    </RouterLink>
  </div>
</template>
