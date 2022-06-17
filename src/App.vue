<script setup>
import { RouterView } from "vue-router";
import TitleView from "@/components/TitleView.vue";
import { mapActions, mapState } from "pinia";
import { useNutsStore } from "./stores/nuts";
</script>

<script>
export default {
  computed: {
    style() {
      return {
        scrollSnapType: this.walnuts ? "y mandatory" : "none",
      };
    },
    ...mapState(useNutsStore, ["coconuts", "walnuts"]),
  },
  methods: {
    ...mapActions(useNutsStore, ["toggle_nuts"]),
  },
};
</script>

<template>
  <div id="app-container" :style="style">
    <header>
      <div class="wrapper">
        <TitleView />

        <nav>
          <a @click="toggle_nuts">banane</a>
          <!-- <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

html,
body,
#app {
  width: 100vw;
  position: relative;
  overflow: hidden;
}

#app-container {
  height: 100vh;
  width: 100vw;

  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;

  overflow-x: hidden;
  overflow-y: scroll;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  scroll-snap-align: start;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.colored {
  text-decoration: none;
  color: hsla(345, 100%, 71%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(345, 100%, 71%, 0.2);
  }

  a:active {
    background-color: hsla(345, 100%, 71%, 0.7);
  }
}

nav {
  position: fixed;
  left: 10px;
  bottom: 20px;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  .wrapper {
    margin-left: 50px;
  }

  #app-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
