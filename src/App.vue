<script setup>
import { RouterView } from "vue-router";
import TitleView from "@/components/TitleView.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { mapActions, mapState } from "pinia";
import { useNutsStore } from "./stores/nuts";
</script>

<script>
export default {
  computed: {
    style() {
      return {
        scrollSnapType: this.$route.path === "/" ? "y mandatory" : "none",
      };
    },
    ...mapState(useNutsStore, ["coconuts", "walnuts"]),
  },
  methods: { ...mapActions(useNutsStore, ["toggle_nuts"]) },
};
</script>

<template>
  <div id="app-container" :style="style">
    <nav
      className="z-2 px-4 py-6 backdrop-blur backdrop-opacity-80 backdrop-blur-xs"
    >
      <a href="https://github.com/sirno">
        <FontAwesomeIcon :icon="faGithub" size="2xl" />
      </a>
      <a href="https://x.com/nosirnoo">
        <FontAwesomeIcon :icon="faSquareXTwitter" size="2xl" />
      </a>
      <a href="https://www.linkedin.com/in/ochsner-nicolas/">
        <FontAwesomeIcon :icon="faLinkedin" size="2xl" />
      </a>
    </nav>

    <header className="flex items-center justify-center p-4 min-w-1/2">
      <TitleView />
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

a,
.colored {
  text-decoration: none;
  color: hsla(345, 100%, 71%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(345, 100%, 71%, 0.08);
  }

  a:active {
    background-color: hsla(345, 100%, 71%, 0.7);
  }
}

nav {
  position: fixed;
  left: 0;
  bottom: 0;
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
  border-left: 2px solid var(--color-border);
}

a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app-container {
    display: flex;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
