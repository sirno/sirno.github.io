//
<script setup>
import DisturbedString from "./DisturbedString.vue";
</script>

<template>
  <img
    alt="logo"
    class="logo"
    src="@/assets/picture.jpg"
    width="125"
    height="125"
  />

  <div class="title">
    <h1 class="colored">collection</h1>
    <h3>of <DisturbedString>things</DisturbedString></h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

img {
  margin-left: 50px;
}

.title {
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title h1,
.title h3 {
  display: inline-block;
  text-align: center;
}

@media (min-width: 1024px) {
  .title h1,
  .title h3 {
    display: inline-block;
    text-align: left;
  }
}
</style>
