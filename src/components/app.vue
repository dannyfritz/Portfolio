<template>
  <main class="container">
    <Bio :info="bio"/>
    <section>
      <Items :items="sites" />
    </section>
    <section>
      <Items :items="applications" />
    </section>
    <section>
      <Items :items="games" />
    </section>
    <footer>
      Made with ♥ by Danny Fritz
    </footer>
  </main>
</template>

<script lang="ts">
import Bio from "./bio.vue";
import Items from "./items.vue";
export default {
  components: {
    Items, Bio,
  },
  props: {
    bio: {
      type: Object,
      default () {
        return {};
      },
    },
    applications: {
      type: Array,
      default () {
        return [];
      },
    },
    games: {
      type: Array,
      default () {
        return [];
      },
    },
    sites: {
      type: Array,
      default () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>
