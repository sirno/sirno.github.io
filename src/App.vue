<script setup>
import { RouterView } from "vue-router";
import TitleView from "@/components/TitleView.vue";
import { mapActions, mapState } from "pinia";
import { useNutsStore } from "./stores/nuts";
</script>

<script>
export default {
  computed: {
    ...mapState(useNutsStore, ["coconuts"]),
  },
  methods: {
    ...mapActions(useNutsStore, ["toggle_nuts"]),
  },
};
</script>

<template>
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
</template>

<style>
@import "@/assets/base.css";

html {
  overflow-x: hidden;
  overflow-y: scroll;

  scroll-snap-type: y mandatory;
}

#app {
  max-width: 1280px;
  min-width: 100%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.wrapper {
  margin-left: 50px;
}

header {
  scroll-snap-align: start;
  line-height: 1.5;
  max-height: 100vh;
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

  #app {
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

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
