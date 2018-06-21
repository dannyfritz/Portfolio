
<template>
  <main>
    <Bio
      :info="bio"
      class="bg"/>
    <section class="bg-alt">
      <h2>Links</h2>
      <Items
        :items="sites"
      />
    </section>
    <section class="bg">
      <h2>Applications</h2>
      <Items
        :items="applications"
      />
    </section>
    <section class="bg-alt">
      <h2>Games</h2>
      <Items
        :items="games"
      />
    </section>
    <footer class="bg">
      Made with <i class="heart fas fa-heart"/> by Danny Fritz
    </footer>
  </main>
</template>

<style scoped>
h2 {
  font-size: 2rem;
}
.heart {
  color: red;
}
.bg, .bg-alt {
  padding: 2rem 1rem;
}
.bg h2 {
  color: black;
}
.bg-alt h2 {
  color: white;
}
.bg {
  border-top-color: var(--color-1);
  border-top-style: solid;
  border-top-width: 1rem;
  background-color: var(--color-2);
  border-bottom-color: var(--color-3);
  border-bottom-style: solid;
  border-bottom-width: 1rem;
}
.bg-alt {
  border-top-color: var(--color-4);
  border-top-style: solid;
  border-top-width: 1rem;
  background-color: var(--color-5);
  border-bottom-color: var(--color-5);
  border-bottom-style: solid;
  border-bottom-width: 1rem;
}
</style>

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
