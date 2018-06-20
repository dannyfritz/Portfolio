<template>
  <header class="bio">
    <h1>{{ info.name }}</h1>
    <blockquote>{{ info.description }}</blockquote>
  </header>
</template>

<style scoped>
  .bio {
    padding: 2rem 1rem;
  }
  h1 {
    text-align: center;
    font-size: 15vw;
    font-family: 'Alegreya Sans SC', serif;
    font-weight: 100;
  }
  blockquote {
    text-align: center;
    font-style: italic;
    font-weight: 300;
    font-family: "Lato", sans-serif;
  }
</style>

<script lang="ts">
export default {
  props: {
    info: {
      type: Object,
      default () {
        return {
          "name": "",
          "description": "",
        };
      },
    },
  },
};
</script>
